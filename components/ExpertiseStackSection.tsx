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
    return (
        <section
            className="relative bg-charcoal-50 pt-32 pb-64"
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

            {/* STICKY STAGGERED CARDS CONTAINER */}
            <div className="container mx-auto px-4 relative max-w-6xl">
                {cards.map((card, index) => {
                    return (
                        <div
                            key={card.id}
                            className={cn(
                                "sticky mb-24 lg:mb-48 last:mb-0 transition-all duration-700",
                                card.color
                            )}
                            style={{
                                // Proper Sticky Offset for "Stacking" Effect
                                top: `calc(10vh + ${index * 8}px)`,
                                zIndex: index + 10
                            }}
                        >
                            <div className={cn(
                                "group relative rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden border border-white/5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] hover:shadow-brand-default/10 transition-shadow",
                                card.color
                            )}>
                                {/* CONTENT WRAPPER */}
                                <div className="relative flex flex-col lg:flex-row min-h-[500px] lg:min-h-[600px]">

                                    {/* TEXT CONTENT - TOP ON MOBILE / LEFT ON DESKTOP */}
                                    <div className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-between relative z-20">
                                        <div className="relative">
                                            <span className="text-8xl lg:text-9xl font-black text-white/5 leading-none tracking-tighter select-none absolute -top-10 -left-6">
                                                {card.id}
                                            </span>

                                            <div className="relative mt-10">
                                                <h3 className="text-3xl lg:text-6xl text-white mb-4 font-black tracking-widest leading-tight uppercase">
                                                    {card.title}
                                                </h3>
                                                <p className={cn("text-xs lg:text-sm font-black tracking-[0.3em] mb-8 uppercase", card.accent)}>
                                                    {card.slogan}
                                                </p>
                                                <p className="text-slate-400 text-base lg:text-xl leading-relaxed max-w-md mb-8 font-medium">
                                                    {card.description}
                                                </p>

                                                <button className="flex items-center gap-4 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-2xl transition-all group/btn w-fit shadow-xl">
                                                    <span className="text-white font-black tracking-widest text-[10px] uppercase">
                                                        {card.ctaText}
                                                    </span>
                                                    <ArrowRight className="w-4 h-4 text-white transform group-hover/btn:translate-x-2 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* IMAGE CONTENT - BOTTOM ON MOBILE / RIGHT ON DESKTOP */}
                                    <div className="relative h-[300px] lg:h-auto lg:w-1/2 overflow-hidden border-t lg:border-t-0 lg:border-l border-white/5">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
                                            quality={90}
                                        />
                                        {/* Premium Scrims */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-l z-10" />

                                        <div className={cn(
                                            "absolute bottom-8 right-8 w-16 h-16 bg-black/40 backdrop-blur-xl rounded-2xl p-4 flex items-center justify-center border border-white/10 z-30 shadow-2xl transition-transform group-hover:scale-110",
                                            card.accent
                                        )}>
                                            <card.icon className="w-full h-full" strokeWidth={1} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
