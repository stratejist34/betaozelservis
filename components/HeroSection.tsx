'use client';

import Image from 'next/image';
import { Phone, MessageCircle } from 'lucide-react';
import { trackCTA } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const brands = [
    { name: 'Audi', logo: '/images/brands/audi-logo.webp' },
    { name: 'BMW', logo: '/images/brands/bmw-logo.webp' },
    { name: 'Mercedes', logo: '/images/brands/mercedes-logo.webp' },
    { name: 'Volkswagen', logo: '/images/brands/volkswagen-logo.webp' },
    { name: 'Porsche', logo: '/images/brands/porsche-logo.webp' },
    { name: 'Land Rover', logo: '/images/brands/land-rover-logo.webp' },
    { name: 'Seat', logo: '/images/brands/seat-logo.webp' },
    { name: 'Skoda', logo: '/images/brands/skoda-logo.webp' },
];

export default function HeroSection() {
    const revealRef = useScrollReveal();

    return (
        <section className="relative px-0 pt-0 pb-0 overflow-hidden bg-charcoal-900 noise-overlay">
            {/* Main Stage - 100vh on mobile to anchor buttons at the bottom */}
            <div ref={revealRef as any} className="relative h-[100dvh] sm:min-h-[750px] lg:min-h-[900px] w-full flex flex-col items-center justify-between reveal overflow-hidden mx-auto">
                {/* Tech Grid Background - Darker for Light BG */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
                        backgroundSize: '40px 40px'
                    }}
                />
                {/* Background Image - Industrial Studio Lighting */}
                <div className="absolute inset-0 z-0 scale-105">
                    <Image
                        src="/images/hero-mercedes.avif"
                        alt="Beta Özel Servis Tuzla"
                        fill
                        className="object-cover object-[80%_center] opacity-60"
                        priority
                        fetchPriority="high"
                        quality={75}
                        sizes="(max-width: 768px) 100vw, 100vw"
                    />

                    {/* Technical Scrims - Depth & Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-900/60 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/20 via-transparent to-charcoal-950 z-10" />

                    {/* Professional Bottom Transition */}
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal-900 to-transparent z-20" />
                </div>

                {/* Header-Aware Padding and Content - Shifted to Top */}
                <div className="relative z-30 max-w-[1440px] w-full mx-auto px-5 lg:px-20 pt-24 sm:pt-48 pb-0 text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-charcoal-900/40 backdrop-blur-sm mb-6 shadow-xl">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-default opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-default"></span>
                        </span>
                        <span className="text-[10px] font-bold text-charcoal-100 tracking-widest uppercase">System Status: Online</span>
                    </div>

                    <h1 className="text-white text-4xl sm:text-7xl lg:text-8xl font-black !leading-[1.1] tracking-tighter mb-4 lg:mb-10">
                        <span className="hidden sm:inline text-charcoal-400">20 Yıldır<br /></span>
                        <span className="text-charcoal-100 block sm:inline mt-1 sm:mt-0 drop-shadow-[0_2px_10px_rgba(255,255,255,0.1)]">Premium Araçlar için</span><br />
                        Özel Servis Hizmeti
                    </h1>

                    <div className="hidden sm:block space-y-4 mb-12">
                        <p className="text-base sm:text-lg text-charcoal-300 max-w-2xl leading-relaxed font-medium uppercase tracking-[0.2em]">
                            İstanbul Tuzla • Garantili Teknik Hizmet
                        </p>

                        <div className="text-brand-default font-black tracking-[0.5em] uppercase text-[10px] sm:text-xs">
                            // YÜKSEK PERFORMANS TEKNİK MERKEZİ
                        </div>
                    </div>

                    <div className="hidden sm:flex flex-col sm:flex-row gap-6 justify-start">
                        <a
                            href="tel:+905332081400"
                            onClick={() => trackCTA('hero_hemen_ara_tel')}
                            className="bg-brand-default hover:bg-brand-hover text-white px-12 py-5 rounded-xl text-base font-black uppercase tracking-widest transition-all hover:scale-[1.05] active:scale-95 items-center justify-center gap-3 group animate-pulse-ring"
                        >
                            <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                            HEMEN ARA
                        </a>
                        <a
                            href="https://wa.me/905332081400?text=Randevu almak istiyorum."
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackCTA('hero_randevu_whatsapp')}
                            className="bg-charcoal-900 text-white hover:bg-black px-12 py-5 rounded-xl text-base font-black uppercase tracking-widest transition-all shadow-xl hover:scale-[1.05] active:scale-95 items-center justify-center gap-3 group"
                        >
                            <MessageCircle className="w-5 h-5" />
                            RANDEVU AL
                        </a>
                    </div>
                </div>

                {/* Mobile Only: Decision Hierarchy CTAs - NOW ANCHORED AT BOTTOM OF 100dvh CONTAINER */}
                <div className="sm:hidden w-full px-5 pb-8 relative z-30 flex flex-col gap-3">
                    <a
                        href="tel:+905332081400"
                        onClick={() => trackCTA('hero_hemen_ara_tel')}
                        className="w-full bg-brand-default text-white px-8 py-5 rounded-xl text-base font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 group animate-pulse-ring"
                    >
                        <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                        HEMEN ARA
                    </a>
                    <a
                        href="https://wa.me/905332081400?text=Randevu almak istiyorum."
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackCTA('hero_randevu_whatsapp')}
                        className="w-full bg-charcoal-900/40 backdrop-blur-md border border-white/20 text-white px-8 py-5 rounded-xl text-base font-bold uppercase tracking-widest flex items-center justify-center gap-2"
                    >
                        <MessageCircle className="w-4 h-4" />
                        RANDEVU AL
                    </a>
                </div>

                {/* Brands Strip - Integrated into Hero Bottom */}
                <div className="absolute bottom-8 left-0 right-0 z-30 flex flex-col items-center justify-center gap-6 hidden lg:flex">
                    <h3 className="text-[10px] font-black text-charcoal-400/60 tracking-[0.3em] uppercase">// UZMANI OLDUĞUMUZ MARKALAR</h3>
                    <div className="flex items-center gap-12 opacity-90 hover:opacity-100 transition-opacity duration-500">
                        {brands.map((brand) => (
                            <div key={brand.name} className="relative w-12 h-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all">
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    fill
                                    className="object-contain invert brightness-0 hover:filter-none transition-all"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
