'use client';

import React from 'react';
import { FileText, Wrench, Calendar, Cpu, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const cards = [
    {
        id: "01",
        title: "DIAGNOSTİK",
        slogan: "Sorunu parça değişmeden önce netleştiririz",
        description: "Gelişmiş cihazlarla arızayı nokta atışı tespit ediyor ve süreci şeffaf verilerle raporlıyoruz.",
        link: "/hizmetler/diagnostik",
        ctaText: "Sorunu Netleştir",
        image: "/wp-content/uploads/2025/08/Motor-Sanziman-Yag-Kacagi-Tamiri-Fiyat-1024x768.jpg",
        icon: FileText,
        color: "bg-[#111114]",
        accent: "text-red-500"
    },
    {
        id: "02",
        title: "MEKANİK",
        slogan: "Ustalık, ölçerek karar vermektir",
        description: "Mekanik onarım hassas bir ölçümdür. %100 uyumlu parça ve teknik kontrolle garantili çözümler üretiyoruz.",
        link: "/hizmetler/mekanik",
        ctaText: "Usta Görüşü Al",
        image: "/wp-content/uploads/2025/08/9G-Tronic-Sanziman-Tamiri-1024x576.jpg",
        icon: Wrench,
        color: "bg-[#111114]",
        accent: "text-orange-500"
    },
    {
        id: "03",
        title: "BAKIM",
        slogan: "Gereksiz bakım yok",
        description: "Üretici standartlarında, sadece aracınızın gerçek ihtiyacı olan işlemleri içeren teknik bakım paketleri.",
        link: "/hizmetler/bakim",
        ctaText: "Bakım Paketini Gör",
        image: "/wp-content/uploads/2024/12/yag-filtresi-disk-bakim-seti-1024x698.png",
        icon: Calendar,
        color: "bg-[#111114]",
        accent: "text-teal-400"
    },
    {
        id: "04",
        title: "ELEKTRONİK",
        slogan: "Hata kodu tek başına yeterli değildir",
        description: "Elektronik problemleri sadece kod okuyarak değil, sistem verilerini bütüncül bir bakışla yorumlayarak çözüyoruz.",
        link: "/hizmetler/elektronik",
        ctaText: "Hata Kodunu Anla",
        image: "/images/hero-mercedes.avif",
        icon: Cpu,
        color: "bg-[#111114]",
        accent: "text-blue-400"
    }
];

export default function ExpertiseStackSection() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const containerRef = React.useRef<HTMLElement>(null);

    const layoutRef = React.useRef({ offsetTop: 0, height: 0, vh: 0, vw: 0 });

    React.useEffect(() => {
        const updateLayout = () => {
            if (!containerRef.current) return;
            layoutRef.current = {
                offsetTop: containerRef.current.offsetTop,
                height: containerRef.current.offsetHeight,
                vh: window.innerHeight,
                vw: window.innerWidth
            };
        };

        updateLayout();
        window.addEventListener('resize', updateLayout);

        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    if (layoutRef.current.vw < 1024) {
                        const { offsetTop, height, vh } = layoutRef.current;
                        const scrollY = window.scrollY;
                        const scrolledInto = scrollY - offsetTop;

                        const totalCards = cards.length;
                        const scrollProgress = Math.max(0, Math.min(1, scrolledInto / (height - vh)));
                        const index = Math.min(totalCards - 1, Math.floor(scrollProgress * totalCards));
                        setActiveIndex(index);
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateLayout);
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative bg-charcoal-50 pt-32 pb-0 snap-y snap-mandatory lg:snap-none"
            id="brand-stacked"
        >
            {/* Section Header */}
            <div className="container mx-auto px-4 mb-20 text-center">
                <span className="inline-block text-brand-default font-bold tracking-[0.4em] text-[10px] uppercase mb-4 animate-fade-up">
                    Uzmanlık Alanlarımız
                </span>
                <h2 className="text-3xl lg:text-5xl text-charcoal-900 font-extrabold tracking-[0.1em] leading-tight animate-fade-up delay-100">
                    PREMIUM <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-default to-red-800">SERVİSLERİMİZ</span>
                </h2>
            </div>

            {/* Sticky Cards Container */}
            <div className="container mx-auto px-4">
                {cards.map((card, index) => {
                    const isNext = index === activeIndex + 1;
                    const isCurrent = index <= activeIndex;

                    return (
                        <div
                            key={card.id}
                            className={cn(
                                "sticky-card mb-12 lg:mb-8 last:mb-0 snap-start lg:snap-align-none transition-all duration-700",
                                // Mobile Discovery: Current is 100%, Next is 20%, others 0 on mobile
                                "opacity-100 lg:opacity-100",
                                index > activeIndex + 1 ? "lg:opacity-100 opacity-0 scale-95" : "",
                                isNext ? "opacity-20 scale-95 lg:opacity-100 lg:scale-100" : ""
                            )}
                            style={{
                                position: 'sticky',
                                // FIXED: Tighter sticky offset to ensure visibility (User request: 5.5rem + index * 1.25rem)
                                top: `calc(5.5rem + ${index * 1.25}rem)`,
                                zIndex: index + 10
                            }}
                        >
                            <div className={cn(
                                "group relative rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700",
                                // Unified background color for consistency
                                card.color
                            )}>

                                {/* Accent Top Border/Glow for Differentiation without breaking uniformity */}
                                <div className={cn("absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-50", card.accent.replace('text-', 'bg-'))} />

                                {/* Content Container */}
                                <div className="relative min-h-[360px] md:min-h-[280px] lg:min-h-[480px] flex flex-col lg:flex-row">

                                    {/* Text Content */}
                                    <div className="w-full lg:w-1/2 p-6 lg:p-12 flex flex-col justify-between relative z-20">

                                        <div className="flex items-start justify-between">
                                            <span className="text-7xl lg:text-9xl font-black text-white/5 leading-none tracking-tighter select-none">
                                                {card.id}
                                            </span>
                                        </div>

                                        <div className="mt-8 lg:mt-0">
                                            <h3 className="text-3xl lg:text-5xl text-white mb-4 font-black tracking-widest leading-tight uppercase">
                                                {card.title}
                                            </h3>
                                            <p className="text-white text-sm lg:text-base font-bold tracking-[0.3em] mb-8 uppercase drop-shadow-sm">
                                                {card.slogan}
                                            </p>
                                            <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-10 font-medium">
                                                {card.description}
                                            </p>

                                            {/* CTA Button with Final Hover Recipe */}
                                            <button
                                                className={cn(
                                                    "inline-flex items-center gap-4 group/btn cursor-pointer bg-charcoal-900/40 hover:bg-brand-default px-8 py-3.5 rounded-2xl transition-all duration-300 backdrop-blur-xl border border-white/10 hover:border-brand-default opacity-80 hover:opacity-100",
                                                    // Micro-movement: -1px lift
                                                    "hover:-translate-y-[1px]"
                                                )}
                                            >
                                                <span className={cn(
                                                    "text-white font-bold tracking-widest text-[10px] uppercase transition-all duration-300"
                                                )}>
                                                    {card.ctaText}
                                                </span>
                                                <ArrowRight className="w-4 h-4 text-white transform group-hover/btn:translate-x-1 transition-all duration-200 ease-out" strokeWidth={3} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Image Side */}
                                    <div className="absolute inset-0 lg:relative lg:w-1/2">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 scale-105 group-hover:scale-100 opacity-60"
                                            priority={index === 0}
                                            fetchPriority={index === 0 ? "high" : "auto"}
                                            quality={75}
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        {/* Deep Technical Scrims for Professional Contrast (WCAG) */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-900/80 to-transparent z-10" />
                                        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-transparent z-10" />

                                        {/* Logo/Icon - FIXED: Subtler Style with Accent Color */}
                                        <div className={cn(
                                            "absolute bottom-10 right-10 w-20 h-20 bg-white/5 backdrop-blur-[2px] rounded-3xl p-5 flex items-center justify-center border border-white/5 z-30 shadow-2xl transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:backdrop-blur-xl",
                                            card.accent // Apply accent color to icon container text
                                        )}>
                                            <card.icon className="w-full h-full opacity-80" strokeWidth={1} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Spacer for smooth scroll past last card */}
                <div className="h-[20vh] lg:h-[20vh]" />
            </div>

            {/* Scroll Affordance Indicator (Mobile Only) */}
            <div className="lg:hidden sticky bottom-10 left-0 right-0 z-50 flex justify-center pointer-events-none transition-opacity duration-500" style={{ opacity: activeIndex === cards.length - 1 ? 0 : 1 }}>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
                    <span className="text-[9px] font-black text-white/60 tracking-widest uppercase">KAYDIR</span>
                    <div className="w-1 h-3 bg-brand-default rounded-full animate-bounce" />
                </div>
            </div>
        </section>
    );
}
