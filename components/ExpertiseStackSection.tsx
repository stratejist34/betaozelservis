'use client';

import React from 'react';
import { FileText, Wrench, Calendar, Cpu, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import styles from './ExpertiseStackSection.module.css';

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
        accent: "text-red-500"
    },
    {
        id: "02",
        title: "MEKANİK",
        slogan: "Ustalık, ölçerek karar vermektir",
        description: "Mekanik onarım deneme-yanılma değil, hassas bir ölçümdür. %100 uyumlu parça ve teknik kontrolle uzun ömürlü çözümler üretiyoruz.",
        link: "/hizmetler/mekanik",
        ctaText: "Usta Görüşü Al",
        image: "/wp-content/uploads/2025/08/9G-Tronic-Sanziman-Tamiri-1024x576.jpg",
        icon: Wrench,
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
        accent: "text-blue-400"
    }
];

export default function ExpertiseStackSection() {
    return (
        <section
            className="relative bg-charcoal-50 pt-24"
            id="brand-stacked"
            style={{
                // Ensure this section creates its own stacking context
                isolation: 'isolate',
                // Override any inherited overflow
                overflow: 'visible'
            }}
        >
            {/* Section Header */}
            <div className="container mx-auto px-4 mb-16 text-center">
                <span className="inline-block text-brand-default font-bold tracking-[0.4em] text-[10px] uppercase mb-4">
                    Uzmanlık Alanlarımız
                </span>
                <h2 className="text-3xl lg:text-5xl text-charcoal-900 font-extrabold tracking-[0.1em] leading-tight">
                    PREMIUM <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-default to-red-800">SERVİSLERİMİZ</span>
                </h2>
            </div>

            {/* STICKY STACKED CARDS */}
            <div
                className={cn("relative px-4 max-w-5xl mx-auto", styles.stackWrapper)}
                style={{ overflow: 'visible' }}
            >
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className={styles.stackCard}
                        style={{
                            // Each card sticks at progressively lower position
                            top: `${100 + index * 32}px`,
                            // Later cards on top
                            zIndex: 10 + index,
                            // Scroll space between cards
                            marginBottom: index === cards.length - 1 ? '2rem' : '70vh',
                        }}
                    >
                        <div
                            className={cn(
                                "group relative overflow-hidden transition-all duration-500",
                                "rounded-[2rem] md:rounded-[2.5rem]",
                                "aspect-[4/5] sm:aspect-[16/10] md:aspect-[21/9] lg:min-h-[500px]",
                                "border border-white/10 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.9)]",
                                "bg-[#111114]"
                            )}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-[opacity,transform] duration-[2500ms]"
                                    quality={90}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent z-10" />
                                <div className="absolute inset-0 bg-charcoal-950/20 z-10" />
                            </div>

                            {/* Content */}
                            <div className="relative z-20 h-full w-full flex flex-col justify-end lg:justify-center p-10 lg:p-24">
                                <span className="absolute top-10 left-10 text-8xl lg:text-[12rem] font-black text-white/5 leading-none select-none tracking-tighter opacity-50">
                                    {card.id}
                                </span>

                                <div className="max-w-3xl text-left relative">
                                    <div className="space-y-2 lg:space-y-4 mb-8 lg:mb-12">
                                        <h3 className="text-4xl lg:text-8xl text-white font-black tracking-widest leading-none uppercase drop-shadow-2xl">
                                            {card.title}
                                        </h3>
                                        <p className={cn("text-[10px] lg:text-sm font-black tracking-[0.4em] uppercase opacity-90", card.accent)}>
                                            {card.slogan}
                                        </p>
                                    </div>

                                    <p className="hidden sm:block text-slate-300 text-lg lg:text-2xl leading-relaxed mb-10 font-medium max-w-xl drop-shadow-md">
                                        {card.description}
                                    </p>

                                    <button className="flex items-center gap-6 bg-white/5 hover:bg-brand-default border border-white/10 hover:border-brand-default px-8 lg:px-14 py-4 lg:py-6 rounded-2xl lg:rounded-[2rem] transition-all duration-500 group/btn w-fit shadow-2xl backdrop-blur-md">
                                        <span className="text-white font-black tracking-widest text-xs lg:text-sm uppercase">
                                            {card.ctaText}
                                        </span>
                                        <ArrowRight className="w-5 h-5 text-white transform group-hover/btn:translate-x-3 transition-transform" />
                                    </button>
                                </div>

                                <div className={cn(
                                    "absolute bottom-10 right-10 lg:bottom-20 lg:right-20 w-14 h-14 lg:w-28 lg:h-28 bg-white/5 backdrop-blur-3xl rounded-[1.5rem] lg:rounded-[2.5rem] p-4 lg:p-8 flex items-center justify-center border border-white/10 shadow-2xl",
                                    card.accent
                                )}>
                                    <card.icon className="w-full h-full opacity-70" strokeWidth={1} />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom padding for last card to have scroll room */}
            <div style={{ height: '30vh' }} />
        </section>
    );
}
