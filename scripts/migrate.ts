import fs from 'fs';
import path from 'path';
import { XMLParser } from 'fast-xml-parser';
import Papa from 'papaparse';

const YAZILAR_XML = 'wordpress_yedekleri/betazelservis.WordPress.YAZILAR.2026-01-14.xml';
const SAYFALAR_XML = 'wordpress_yedekleri/betazelservis.WordPress.SAYFALAR.2026-01-14.xml';
const URUNLER_CSV = 'wordpress_yedekleri/beta ozel servis - urunler wc-product-export-14-1-2026-1768361504360.csv';
const OUTPUT_DIR = 'data';

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
}

const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
});

async function migrate() {
    console.log('Starting migration...');

    // 1. Migrate Posts (Yazılar)
    const yazilarContent = fs.readFileSync(YAZILAR_XML, 'utf-8');
    const yazilarData = parser.parse(yazilarContent);
    const items = yazilarData.rss.channel.item;

    // Build a map of attachment ID to URL
    const attachments = new Map<string, string>();
    items.forEach((item: any) => {
        if (item['wp:post_type'] === 'attachment') {
            attachments.set(item['wp:post_id'].toString(), item.guid['#text'] || item.guid);
        }
    });

    const posts = items
        .filter((item: any) => item['wp:post_type'] === 'post' && item['wp:status'] === 'publish')
        .map((item: any) => {
            const metaRaw = item['wp:postmeta'];
            const meta = Array.isArray(metaRaw) ? metaRaw : (metaRaw ? [metaRaw] : []);
            const findMeta = (key: string) => {
                const entry = meta.find((m: any) => m['wp:meta_key'] === key);
                return entry ? entry['wp:meta_value'] : '';
            };

            const thumbnailId = findMeta('_thumbnail_id');
            const thumbnailUrl = thumbnailId ? attachments.get(thumbnailId.toString()) : '';

            return {
                id: item['wp:post_id'],
                title: item.title,
                slug: item['wp:post_name'],
                date: item['wp:post_date'],
                content: item['content:encoded'],
                excerpt: item['excerpt:encoded'],
                categories: Array.isArray(item.category)
                    ? item.category.filter((c: any) => c['@_domain'] === 'category').map((c: any) => c['#text'])
                    : (item.category?.['@_domain'] === 'category' ? [item.category['#text']] : []),
                tags: Array.isArray(item.category)
                    ? item.category.filter((c: any) => c['@_domain'] === 'post_tag').map((c: any) => c['#text'])
                    : (item.category?.['@_domain'] === 'post_tag' ? [item.category['#text']] : []),
                yoastTitle: findMeta('_yoast_wpseo_title'),
                yoastDescription: findMeta('_yoast_wpseo_metadesc'),
                thumbnail: thumbnailUrl || '',
            };
        });

    fs.writeFileSync(path.join(OUTPUT_DIR, 'posts.json'), JSON.stringify(posts, null, 2));
    console.log(`Migrated ${posts.length} posts.`);

    // 2. Migrate Pages (Sayfalar)
    const sayfalarContent = fs.readFileSync(SAYFALAR_XML, 'utf-8');
    const sayfalarData = parser.parse(sayfalarContent);
    const pages = sayfalarData.rss.channel.item
        .filter((item: any) => item['wp:post_type'] === 'page' && item['wp:status'] === 'publish')
        .map((item: any) => {
            const metaRaw = item['wp:postmeta'];
            const meta = Array.isArray(metaRaw) ? metaRaw : (metaRaw ? [metaRaw] : []);
            const findMeta = (key: string) => {
                const entry = meta.find((m: any) => m['wp:meta_key'] === key);
                return entry ? entry['wp:meta_value'] : '';
            };

            return {
                id: item['wp:post_id'],
                title: item.title,
                slug: item['wp:post_name'],
                content: item['content:encoded'],
                yoastTitle: findMeta('_yoast_wpseo_title'),
                yoastDescription: findMeta('_yoast_wpseo_metadesc'),
            };
        });

    fs.writeFileSync(path.join(OUTPUT_DIR, 'pages.json'), JSON.stringify(pages, null, 2));
    console.log(`Migrated ${pages.length} pages.`);

    // 3. Migrate Products (Ürünler)
    const urunlerContent = fs.readFileSync(URUNLER_CSV, 'utf-8');
    const urunlerResult = Papa.parse(urunlerContent, {
        header: true,
        skipEmptyLines: true,
    });

    const products = urunlerResult.data.map((item: any) => ({
        id: item['Kimlik'],
        name: item['İsim'],
        slug: item['İsim']?.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''),
        description: item['Açıklama'],
        price: item['Normal fiyat'],
        categories: item['Kategoriler'],
        brand: item['Markalar'],
        images: item['Görseller']?.split(',').map((img: string) => img.trim()),
    }));

    fs.writeFileSync(path.join(OUTPUT_DIR, 'products.json'), JSON.stringify(products, null, 2));
    console.log(`Migrated ${products.length} products.`);

    console.log('Migration completed successfully.');
}

migrate().catch(console.error);
