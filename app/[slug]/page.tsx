import { getPostBySlug, getPosts, getPageBySlug, getPages } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScientificCTA from '@/components/ScientificCTA';
import TableOfContents from '@/components/TableOfContents';
import RichContent from '@/components/RichContent';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { cn } from '@/lib/utils';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const [posts, pages] = await Promise.all([getPosts(), getPages()]);

    const postParams = posts.map((post) => ({
        slug: post.slug,
    }));

    // Some static pages are already handled by physical files (app/hakkimizda/page.tsx etc)
    // We only need to generate params for those that DON'T have a physical route
    // But since this is a catch-all, it's safer to include them and Next.js will prioritize physical files
    const pageParams = pages.map((page) => ({
        slug: page.slug,
    }));

    return [...postParams, ...pageParams];
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const [post, page] = await Promise.all([getPostBySlug(slug), getPageBySlug(slug)]);
    const item = post || page;

    if (!item) return {};

    const metaTitle = item.yoastTitle || `${item.title} | Beta Özel Servis`;
    const rawDescription = item.yoastDescription || (('excerpt' in item ? item.excerpt : '') || '');
    const metaDescription = rawDescription.replace(/<[^>]*>?/gm, '').substring(0, 160);
    const canonicalUrl = `https://betaozelservis.com/${slug}/`;
    const featuredImage = (item as any).thumbnail || 'https://betaozelservis.com/wp-content/uploads/2024/12/Bmw-Audi-Mercedes-Volkswagen-Servisi-Beta-Ozel-Servis-15.jpg';

    return {
        title: metaTitle,
        description: metaDescription,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: metaTitle,
            description: metaDescription,
            url: canonicalUrl,
            siteName: 'Beta Özel Servis',
            locale: 'tr_TR',
            type: post ? 'article' : 'website',
            publishedTime: post ? post.date : undefined,
            authors: ['Beta Özel Servis'],
            images: [
                {
                    url: featuredImage,
                    width: 1200,
                    height: 630,
                    alt: metaTitle,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: metaTitle,
            description: metaDescription,
            images: [featuredImage],
        },
    };
}

export default async function DynamicRoutePage({ params }: Props) {
    const { slug } = await params;
    const [post, page] = await Promise.all([getPostBySlug(slug), getPageBySlug(slug)]);

    if (!post && !page) {
        notFound();
    }

    const item = post || page;
    const isPost = !!post;

    // Process content: 
    // 1. Convert any manual H1 to H2 to preserve hierarchy without duplicating the hero H1
    const contentWithH2 = (post.content || '').replace(/<h1([^>]*)>(.*?)<\/h1>/gi, '<h2$1>$2</h2>');

    // 2. Remove the first H2 specifically (as it typically repeats the main title)
    let firstH2Removed = false;
    const contentCleaned = contentWithH2.replace(/<h2([^>]*)>(.*?)<\/h2>/i, (match) => {
        if (!firstH2Removed && isPost) {
            firstH2Removed = true;
            return ''; // Remove only the first H2 for posts
        }
        return match;
    });

    // 3. Then add IDs to remaining headings for TOC and split for CTA
    const tocItems: { id: string; text: string; level: number }[] = [];
    const processedContent = contentCleaned.replace(/<(h[23])([^>]*)>(.*?)<\/\1>/gi, (match, tag, attrs, text) => {
        const id = text.toLowerCase()
            .replace(/[^a-z0-9ğüşıöç ]/gi, '')
            .replace(/\s+/g, '-');

        tocItems.push({ id, text: text.replace(/<[^>]*>?/gm, ''), level: parseInt(tag.substring(1)) });
        return `<${tag}${attrs} id="${id}">${text}</${tag}>`;
    });

    // 4. Split content for CTA: Try to insert after the first table, otherwise use midpoint
    let part1, part2;
    const tableIndex = processedContent.indexOf('</table>');

    if (tableIndex !== -1) {
        // Find the index of the closing tag and include it in part1
        const splitPoint = tableIndex + '</table>'.length;
        part1 = processedContent.substring(0, splitPoint);
        part2 = processedContent.substring(splitPoint);
    } else {
        const contentParts = processedContent.split('</p>');
        const midPoint = Math.floor(contentParts.length / 2);
        part1 = contentParts.slice(0, midPoint).join('</p>') + (contentParts.length > 0 ? '</p>' : '');
        part2 = contentParts.slice(midPoint).join('</p>');
    }

    const jsonLd = isPost ? {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": item.title,
        "image": [(item as any).thumbnail || 'https://betaozelservis.com/wp-content/uploads/2024/12/Bmw-Audi-Mercedes-Volkswagen-Servisi-Beta-Ozel-Servis-15.jpg'],
        "datePublished": (item as any).date,
        "author": {
            "@type": "Organization",
            "name": "Beta Özel Servis"
        },
        "description": (item.yoastDescription || (item as any).excerpt || '').replace(/<[^>]*>?/gm, '').substring(0, 160)
    } : {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": item.title,
        "description": (item.yoastDescription || '').replace(/<[^>]*>?/gm, '').substring(0, 160)
    };

    return (
        <main className="min-h-screen flex flex-col bg-[#F5F6F7]">
            <Header forceSilver={isPost} />

            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <article className="flex-grow">
                {/* Hero Section - Silver Gradient Background to integrate header */}
                <header className="pt-24 sm:pt-32 pb-8 sm:pb-12 border-b border-gray-200/50 bg-gradient-to-b from-gray-100 to-white">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                            {/* Passive Breadcrumb */}
                            <nav className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-gray-500/60 mb-3 sm:mb-4 animate-fade-in">
                                <span>{isPost ? 'Uzman Rehberİ' : 'Bİlgİ Merkezİ'}</span>
                                <span className="text-gray-300">/</span>
                                <span className="text-brand-default truncate max-w-[200px] sm:max-w-none">{item.title}</span>
                            </nav>

                            <h1 className="text-2xl sm:text-5xl font-black text-gray-900 leading-[1.1] tracking-tight mb-3 sm:mb-4 italic">
                                {item.title}
                            </h1>

                            {/* Minimal Update Date */}
                            {isPost && (
                                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest opacity-60">
                                    Son Güncelleme: {format(new Date(post.date), 'MMMM yyyy', { locale: tr })}
                                </div>
                            )}
                        </div>
                    </div>
                </header>

                <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16">
                        {/* Left Content Area */}
                        <div className="lg:col-span-8">
                            {/* TOC for Mobile */}
                            {tocItems.length > 0 && <TableOfContents items={tocItems} variant="mobile" />}

                            {/* Featured Image */}
                            {((isPost && post.thumbnail) || (item as any).thumbnail) && (
                                <div className="relative h-[240px] sm:h-[480px] w-full rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-2xl mb-6 sm:mb-10">
                                    <Image
                                        src={(item as any).thumbnail || '/wp-content/uploads/2024/12/Bmw-Audi-Mercedes-Volkswagen-Servisi-Beta-Ozel-Servis-15.jpg'}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            )}

                            {/* Content Part 1 */}
                            <RichContent
                                content={part1}
                                className="prose prose-slate prose-lg max-w-none 
                                    prose-headings:text-gray-900 prose-headings:font-black prose-headings:tracking-tight 
                                    prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5 sm:prose-p:mb-8
                                    prose-a:text-brand-default prose-a:no-underline hover:prose-a:underline
                                    prose-strong:text-gray-900 prose-strong:font-bold
                                    prose-ul:list-none prose-ul:pl-0 prose-li:pl-0
                                    prose-li:before:content-['//'] prose-li:before:text-brand-default prose-li:before:mr-3 prose-li:before:font-black
                                "
                            />

                            {/* Soft CTA 1 (Middle) */}
                            <ScientificCTA variant="soft" />

                            {/* Content Part 2 */}
                            <RichContent
                                content={part2}
                                className="prose prose-slate prose-lg max-w-none 
                                    prose-headings:text-gray-900 prose-headings:font-black prose-headings:tracking-tight 
                                    prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-5 sm:prose-p:mb-8
                                    prose-a:text-brand-default prose-a:no-underline hover:prose-a:underline
                                    prose-strong:text-gray-900 prose-strong:font-bold
                                    prose-ul:list-none prose-ul:pl-0 prose-li:pl-0
                                    prose-li:before:content-['//'] prose-li:before:text-brand-default prose-li:before:mr-3 prose-li:before:font-black
                                "
                            />

                            {/* Strong CTA 2 (End) */}
                            <ScientificCTA variant="bottom" />

                            {/* Tags */}
                            {isPost && post.tags && post.tags.length > 0 && (
                                <div className="mt-16 pt-8 border-t border-gray-100">
                                    <div className="flex flex-wrap gap-2">
                                        {post.tags.map((tag) => (
                                            <span key={tag} className="bg-white border border-gray-100 text-gray-500 text-[10px] sm:text-xs px-4 py-2 rounded-xl font-bold uppercase tracking-widest">
                                                # {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Sidebar - Desktop TOC */}
                        <div className="hidden lg:block lg:col-span-4">
                            <TableOfContents items={tocItems} variant="desktop" />
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
