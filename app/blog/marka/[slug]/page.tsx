import { getPostsByCategory, getPosts } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BrandFilter from '@/components/BrandFilter';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ChevronRight, Clock, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import { notFound } from 'next/navigation';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = await getPosts();
    const categories = new Set<string>();
    posts.forEach(post => {
        post.categories.forEach(cat => {
            categories.add(cat.toLowerCase().replace(/\s+/g, '-'));
        });
    });

    return Array.from(categories).map(slug => ({
        slug
    }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const items = await getPostsByCategory(slug);
    const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);

    return {
        title: `${categoryName} Rehberi | Beta Özel Servis`,
        description: `${categoryName} markası için teknik bilgiler, periyodik bakım fiyatları ve servis tavsiyeleri.`,
        alternates: {
            canonical: `https://betaozelservis.com/blog/marka/${slug}/`,
        },
        openGraph: {
            title: `${categoryName} Rehberi | Beta Özel Servis`,
            description: `${categoryName} markası için teknik bilgiler, periyodik bakım fiyatları ve servis tavsiyeleri.`,
            url: `https://betaozelservis.com/blog/marka/${slug}/`,
            type: 'website',
        },
    };
}

export default async function CategoryArchivePage({ params }: Props) {
    const { slug } = await params;
    const posts = await getPostsByCategory(slug);

    if (posts.length === 0) {
        // We could show a "no posts found" or 404
        // For a smoother UX, let's show an empty state or redirect
    }

    const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1);
    const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <main className="min-h-screen flex flex-col pt-16 sm:pt-20 bg-[#F5F6F7]">
            <Header isLightPage={true} />

            {/* Category Hero */}
            <section className="bg-charcoal-900 pt-16 sm:pt-24 pb-12 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(191,194,201,0.1)_0%,_transparent_70%)] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <nav className="flex justify-center items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-6">
                        <span className="w-8 h-[1px] bg-emerald-500/30" />
                        MARKA REHBERİ
                        <span className="w-8 h-[1px] bg-emerald-500/30" />
                    </nav>

                    <h1 className="text-4xl sm:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic">
                        {categoryName} <span className="text-glow">Servİsİ</span>
                    </h1>
                    <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                        {categoryName} grubu araçların periyodik bakımı, kronik arıza çözümleri ve
                        güncel 2025 servis fiyatları hakkında uzman bilgilendirmeler.
                    </p>
                </div>
            </section>

            <BrandFilter />

            <div className="flex-grow py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                        {sortedPosts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/${post.slug}`}
                                className="group bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col hover:-translate-y-2"
                            >
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={(post.thumbnail && post.thumbnail.length > 0) ? post.thumbnail : '/wp-content/uploads/2024/12/Bmw-Audi-Mercedes-Volkswagen-Servisi-Beta-Ozel-Servis-15.jpg'}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.9] group-hover:brightness-100"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 400px"
                                    />
                                    <div className="absolute top-6 left-6">
                                        <span className="bg-white/90 backdrop-blur-md text-charcoal-900 text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest border border-white/20 shadow-xl">
                                            {categoryName}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex items-center gap-3 text-[10px] font-bold text-gray-400 mb-6 uppercase tracking-widest">
                                        <Calendar className="w-3.5 h-3.5 text-brand-default" />
                                        <span>{format(new Date(post.date), 'd MMMM yyyy', { locale: tr })}</span>
                                    </div>

                                    <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 group-hover:text-brand-default transition-colors line-clamp-2 leading-tight tracking-tight">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-500 text-sm leading-relaxed mb-8 line-clamp-3 font-medium">
                                        {(post.excerpt || '').replace(/<[^>]*>?/gm, '')}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-50">
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                            <Clock className="w-3.5 h-3.5" />
                                            <span>5 Dakİka Okuma</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-xs font-black text-brand-default uppercase tracking-widest group-hover:gap-4 transition-all">
                                            İncele
                                            <ChevronRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {sortedPosts.length === 0 && (
                        <div className="text-center py-32 bg-white rounded-[3rem] border border-gray-100">
                            <h3 className="text-2xl font-black text-gray-900 mb-4 uppercase italic">Henüz Bir İçerik Bulunmuyor</h3>
                            <p className="text-gray-500 mb-8 max-w-md mx-auto font-medium">
                                Bu marka için içeriklerimiz yakında burada listelenecek.
                            </p>
                            <Link
                                href="/blog"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal-900 text-white rounded-2xl font-black uppercase tracking-widest transition-all hover:bg-black shadow-xl"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Tüm Yazılara Dön
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
