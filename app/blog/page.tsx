import { getPosts } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ChevronRight, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';

import BrandFilter from '@/components/BrandFilter';

export const metadata = {
    title: 'Uzman Rehberi | Beta Özel Servis',
    description: 'Audi, Volkswagen, BMW ve Mercedes araçlarınız için teknik bilgiler, bakım tavsiyeleri ve güncel haberler.',
    alternates: {
        canonical: 'https://betaozelservis.com/blog/',
    },
    openGraph: {
        title: 'Uzman Rehberi | Beta Özel Servis',
        description: 'Audi, Volkswagen, BMW ve Mercedes araçlarınız için teknik bilgiler, bakım tavsiyeleri ve güncel haberler.',
        url: 'https://betaozelservis.com/blog/',
        type: 'website',
    },
};

export default async function BlogPage() {
    const posts = await getPosts();

    // Sort posts by date descending
    const sortedPosts = posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return (
        <main className="min-h-screen flex flex-col bg-[#F5F6F7]">
            <Header />

            {/* Premium Blog Hero - Perfect Integration */}
            <section className="bg-charcoal-900 pt-20 sm:pt-24 pb-4 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(191,194,201,0.04)_0%,_transparent_70%)] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <nav className="flex justify-center items-center gap-2 text-[8px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-2">
                        BETA AKADEMİ
                    </nav>

                    <h1 className="text-3xl sm:text-5xl font-black text-white mb-0 uppercase tracking-tighter italic leading-none">
                        Uzman <span className="text-glow">Rehberİ</span>
                    </h1>
                </div>
            </section>

            {/* Brand Filter - Clean Transition */}
            <div className="bg-charcoal-900 border-b border-white/5">
                <BrandFilter />
            </div>

            <div className="flex-grow py-8 sm:py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                        {sortedPosts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/${post.slug}`}
                                className="group bg-white rounded-[2rem] border border-gray-100 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] transition-all duration-500 overflow-hidden flex flex-col hover:-translate-y-1.5"
                            >
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image
                                        src={(post.thumbnail && post.thumbnail.length > 0) ? post.thumbnail : '/wp-content/uploads/2024/12/Bmw-Audi-Mercedes-Volkswagen-Servisi-Beta-Ozel-Servis-15.jpg'}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.9] group-hover:brightness-100"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 400px"
                                    />
                                    <div className="absolute top-5 left-5">
                                        {post.categories[0] && (
                                            <span className="bg-white/90 backdrop-blur-md text-charcoal-900 text-[9px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest border border-white/20 shadow-xl">
                                                {post.categories[0]}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <div className="flex items-center gap-2 text-[9px] font-bold text-gray-400 mb-4 uppercase tracking-widest">
                                        <Calendar className="w-3 h-3 text-brand-default" />
                                        <span>{format(new Date(post.date), 'd MMMM yyyy', { locale: tr })}</span>
                                    </div>

                                    <h2 className="text-lg sm:text-xl font-black text-gray-900 mb-3 group-hover:text-brand-default transition-colors line-clamp-2 leading-tight tracking-tight">
                                        {post.title}
                                    </h2>

                                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2 font-medium">
                                        {(post.excerpt || '').replace(/<[^>]*>?/gm, '')}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between pt-5 border-t border-gray-50">
                                        <div className="flex items-center gap-1.5 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                                            <Clock className="w-3 h-3" />
                                            <span>5 Dakİka Okuma</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-[10px] font-black text-brand-default uppercase tracking-widest group-hover:gap-3 transition-all">
                                            İncele
                                            <ChevronRight className="w-3.5 h-3.5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
