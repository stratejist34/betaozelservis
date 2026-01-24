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
            className="relative bg-charcoal-50 py-32"
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

            {/* Grid Cards Container */}
            <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {cards.map((card, index) => {
                    return (
                        <div
                            key={card.id}
                            className="group relative rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl transition-all duration-700 hover:-translate-y-2"
                        >

                            {/* Content Container */}
                            <div className="relative min-h-[400px] flex flex-col">

                                {/* Text Content */}
                                <div className="w-full p-8 lg:p-10 flex flex-col justify-between relative z-20 flex-grow">
                                    <div className="flex items-start justify-between mb-6">
                                        <span className="text-5xl lg:text-7xl font-black text-white/5 leading-none tracking-tighter select-none">
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

                                {/* Image Side - Simplified for Grid */}
                                <div className="relative h-48 lg:h-64 mt-auto">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        className="object-cover opacity-60"
                                        quality={60}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-900/60 to-transparent z-10" />

                                    <div className={cn(
                                        "absolute bottom-6 right-6 w-12 h-12 bg-white/5 backdrop-blur-md rounded-2xl p-3 flex items-center justify-center border border-white/5 z-30",
                                        card.accent
                                    )}>
                                        <card.icon className="w-full h-full opacity-80" strokeWidth={1} />
                                    </div>
                                </div>

                            </div>
                        </div>
                </div>
        </div>
        </section >
    );
}
