import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

export interface Post {
    id: string;
    title: string;
    slug: string;
    date: string;
    content: string;
    excerpt: string;
    categories: string[];
    tags: string[];
    yoastTitle: string;
    yoastDescription: string;
    thumbnail?: string;
}

export interface Page {
    id: string;
    title: string;
    slug: string;
    content: string;
    yoastTitle: string;
    yoastDescription: string;
}

export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: string;
    categories: string;
    brand: string;
    images: string[];
}

export async function getPosts(): Promise<Post[]> {
    const filePath = path.join(DATA_DIR, 'posts.json');
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
    const posts = await getPosts();
    return posts.find((p) => p.slug === slug);
}

export async function getPages(): Promise<Page[]> {
    const filePath = path.join(DATA_DIR, 'pages.json');
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
}

export async function getPageBySlug(slug: string): Promise<Page | undefined> {
    const pages = await getPages();
    return pages.find((p) => p.slug === slug);
}

export async function getProducts(): Promise<Product[]> {
    const filePath = path.join(DATA_DIR, 'products.json');
    if (!fs.existsSync(filePath)) return [];
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
}

export async function getProductBySlug(slug: string): Promise<Product | undefined> {
    const products = await getProducts();
    return products.find((p) => p.slug === slug);
}

export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
    const posts = await getPosts();
    return posts.filter((p) =>
        p.categories.some(cat =>
            cat.toLowerCase() === categorySlug.toLowerCase() ||
            cat.toLowerCase().replace(/\s+/g, '-') === categorySlug.toLowerCase()
        )
    );
}
