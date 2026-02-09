'use client';

import Image from 'next/image';
import { Phone, MessageCircle, Star, MapPin } from 'lucide-react';
import { trackPhoneClick, trackWhatsappClick } from '@/lib/analytics';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useServiceArea } from '@/context/ServiceAreaContext';

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
    const { verifyAndAction } = useServiceArea();

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
                        sizes="(max-width: 1440px) 98vw, 1440px"
                    />

                    {/* Technical Scrims - Depth & Contrast */}
                    <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-900/60 to-transparent z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/20 via-transparent to-charcoal-950 z-10" />

                    {/* Professional Bottom Transition */}
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal-900 to-transparent z-20" />
                </div>

                {/* HEADER-AWARE PADDING AND CONTENT */}

                {/* === MOBILE LAYOUT (BETA HERO) === */}
                <div className="relative z-30 w-full px-5 pt-[72px] pb-[48px] text-left sm:hidden flex flex-col h-full justify-end">

                    {/* 1. TOP BAR (Absolute) - Adjusted Down to avoid Header Overlap */}
                    <div className="absolute top-[80px] left-0 w-full flex items-center justify-center pointer-events-none z-20">
                        <div className="inline-flex items-center gap-2 bg-[#0E0F12]/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/5 shadow-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#0EA76B] animate-pulse shadow-[0_0_8px_rgba(14,167,107,0.5)]" />
                            <span className="text-white/90 text-[10px] font-bold tracking-wide uppercase">Servis Aktif</span>
                        </div>
                    </div>

                    {/* 2. Main Hero Block */}
                    <div className="mb-auto mt-20"> {/* Adjusted spacing to account for header */}
                        <h1 className="text-white leading-[1.05] tracking-tight mb-4">
                            <span className="block text-[28px] font-medium text-white/90">Premium Araçlar İçin</span>
                            <span className="block text-[32px] font-extrabold text-white">Özel Servis Hizmeti</span>
                        </h1>

                        {/* Social Proof - GROUNDED with Title */}
                        <div className="inline-flex items-center gap-4 bg-[#111214]/90 backdrop-blur-xl rounded-[16px] p-3 pr-5 mb-5 border border-white/10 w-fit shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="flex gap-1 text-[#FFB800]">
                                <Star className="w-3.5 h-3.5 fill-current" />
                                <Star className="w-3.5 h-3.5 fill-current" />
                                <Star className="w-3.5 h-3.5 fill-current" />
                                <Star className="w-3.5 h-3.5 fill-current" />
                                <Star className="w-3.5 h-3.5 fill-current" />
                            </div>
                            <div className="h-3 w-px bg-white/20" />
                            <div className="flex flex-col leading-none">
                                <span className="text-white font-bold text-[12px] tracking-wide">4.5 Google</span>
                                <span className="text-[#9CA3AF] text-[9px] font-medium mt-0.5">50+ Gerçek Yorum</span>
                            </div>
                        </div>

                        {/* Subtext - Ultra Condensed */}
                        <p className="text-white/80 text-[15px] leading-relaxed font-medium mb-6 max-w-[95%]">
                            İstanbul Tuzla'da premium araçlar için garantili servis.
                        </p>

                        {/* Trust Layer - HORIZONTAL SINGLE LINE */}
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-brand-default shadow-[0_0_6px_rgba(196,18,47,0.8)]" />
                                <span className="text-white/90 text-[12px] font-bold tracking-wide">Orijinal Parça</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-brand-default shadow-[0_0_6px_rgba(196,18,47,0.8)]" />
                                <span className="text-white/90 text-[12px] font-bold tracking-wide">Şeffaf Fiyat</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-1 h-1 rounded-full bg-brand-default shadow-[0_0_6px_rgba(196,18,47,0.8)]" />
                                <span className="text-white/90 text-[12px] font-bold tracking-wide">20 Yıllık Tecrübe</span>
                            </div>
                        </div>
                    </div>

                    {/* 3. Primary CTA - MINIMIZED & CLEAN */}
                    <button
                        onClick={() => {
                            verifyAndAction(() => {
                                trackPhoneClick({ source: 'hero', page_type: 'home' });
                                window.location.href = 'tel:+905332081400';
                            });
                        }}
                        className="w-[90%] mx-auto h-[50px] bg-[#C4122F] hover:bg-[#a50f27] rounded-[14px] flex items-center justify-center gap-2 shadow-md mb-3 active:scale-[0.98] transition-all"
                    >
                        <Phone className="w-4.5 h-4.5 text-white fill-current" />
                        <span className="text-white font-black text-[14px] tracking-wider uppercase">HEMEN ARA</span>
                    </button>

                    {/* 4. Secondary CTA */}
                    <a
                        href="https://maps.google.com/maps?q=Beta%20%C3%B6zel%20servis"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-[90%] mx-auto h-[46px] rounded-[16px] border border-white/5 bg-black/40 backdrop-blur-md flex items-center justify-center gap-2.5 text-white/[0.85] hover:bg-white/5 active:scale-[0.98] transition-all"
                    >
                        <MapPin className="w-4 h-4 text-white/80" />
                        <span className="font-bold text-[12px] tracking-widest uppercase">KONUM AL</span>
                    </a>

                </div>

                {/* === DESKTOP LAYOUT (Existing) === */}
                <div className="relative z-30 max-w-[1440px] w-full mx-auto px-5 lg:px-20 pt-24 sm:pt-48 pb-0 text-left hidden sm:block">
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

                    <div className="hidden sm:flex flex-col sm:flex-row gap-6 items-center justify-start">
                        <button
                            onClick={() => {
                                verifyAndAction(() => {
                                    trackPhoneClick({ source: 'hero', page_type: 'home' });
                                    window.location.href = 'tel:+905332081400';
                                });
                            }}
                            className="flex bg-[#C4122F] hover:bg-[#a50f27] text-white px-12 py-5 rounded-xl text-base font-black uppercase tracking-widest transition-all hover:scale-[1.05] active:scale-95 items-center justify-center gap-3 group animate-pulse-ring shadow-xl shadow-red-900/30"
                        >
                            <Phone className="w-5 h-5 fill-current group-hover:rotate-12 transition-transform" />
                            HEMEN ARA
                        </button>
                        <button
                            onClick={() => {
                                verifyAndAction(() => {
                                    trackWhatsappClick({ source: 'hero', page_type: 'home' });
                                    window.open('https://wa.me/905332081400?text=Randevu almak istiyorum.', '_blank');
                                });
                            }}
                            className="text-white/70 hover:text-white text-sm font-bold border-b border-white/10 hover:border-white transition-all pb-1"
                        >
                            WhatsApp ile yazmak ister misiniz?
                        </button>
                    </div>
                </div>

                {/* Mobile CTAs removed in favor of GlobalStickyBar - Now restored above for Beta Hero */}

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
                                    sizes="48px"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
