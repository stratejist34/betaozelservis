'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, FileText, Wrench, Calendar, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

type PremiumCard = {
    id: string;
    title: string;
    slogan: string;
    description: string;
    image: string;
    icon: React.ComponentType<any>;
    accent: string;
    gradientFrom: string;
    border: string;
};

const CARDS: PremiumCard[] = [
    {
        id: '01',
        title: 'DIAGNOSTİK',
        slogan: 'SORUNU PARÇA DEĞİŞMEDEN ÖNCE NETLEŞTİRİRİZ',
        description:
            'Gelişmiş cihazlarla arızayı nokta atışı tespit ediyor ve süreci şeffaf verilerle raporluyoruz. Deneme-yanılma yok, kesin sonuç var.',
        image: '/wp-content/uploads/2025/08/Motor-Sanziman-Yag-Kacagi-Tamiri-Fiyat-1024x768.jpg',
        icon: FileText,
        accent: 'text-red-500',
        gradientFrom: 'from-red-900',
        border: 'border-red-500/20',
    },
    {
        id: '02',
        title: 'MEKANİK',
        slogan: 'USTALIK, ÖLÇEREK KARAR VERMEKTİR',
        description:
            'Mekanik onarım hassas bir ölçümdür. Uyumlu parça ve teknik kontrolle karar veriyoruz. Motor ve şanzıman odağı.',
        image: '/images/hero-mercedes.avif',
        icon: Wrench,
        accent: 'text-orange-500',
        gradientFrom: 'from-orange-900',
        border: 'border-orange-500/20',
    },
    {
        id: '03',
        title: 'BAKIM',
        slogan: 'GEREKSİZ BAKIM YOK',
        description:
            'Üretici standardında, sadece gerçek ihtiyacı kapsayan paketler. Ölçülebilir, kayıtlı ve net bakım.',
        image: '/wp-content/uploads/2024/12/yag-filtresi-disk-bakim-seti-1024x698.png',
        icon: Calendar,
        accent: 'text-emerald-400',
        gradientFrom: 'from-emerald-900',
        border: 'border-emerald-500/20',
    },
    {
        id: '04',
        title: 'ELEKTRONİK',
        slogan: 'HATA KODU TEK BAŞINA YETERLİ DEĞİLDİR',
        description:
            'Sistemi bütüncül yorumlayıp çözüyoruz. Sadece “kod okumak” değil; veriyi anlamak.',
        image: '/images/hero-mercedes.avif',
        icon: Cpu,
        accent: 'text-blue-500',
        gradientFrom: 'from-blue-900',
        border: 'border-blue-500/20',
    },
];

export default function PremiumServices() {
    return (
        <section id="premium-services" className="relative bg-charcoal-50 py-24 px-4">
            <div className="container mx-auto text-center mb-12">
                <span className="inline-block text-brand-default font-bold tracking-[0.4em] text-xs uppercase mb-4">
                    UZMANLIK ALANLARIMIZ
                </span>

                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-charcoal-900 mb-6">
                    PREMIUM{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-default to-red-800">
                        SERVİSLERİMİZ
                    </span>
                </h2>

                <div className="h-1 w-24 bg-brand-default mx-auto rounded-full" />
            </div>

            <div className="mx-auto max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {CARDS.map((card) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={card.id}
                                className={cn(
                                    'group relative rounded-[2.5rem] overflow-hidden',
                                    'border border-white/10 shadow-[0_40px_90px_-25px_rgba(0,0,0,0.35)]',
                                    `bg-gradient-to-br ${card.gradientFrom} to-charcoal-950`,
                                    'transition-transform duration-300 will-change-transform',
                                    'hover:-translate-y-1'
                                )}
                            >
                                <div className="relative h-[480px] md:h-[500px] flex">
                                    {/* Sol: metin */}
                                    <div className="w-full lg:w-1/2 p-10 md:p-12 z-20 bg-charcoal-950/45 backdrop-blur-sm flex flex-col justify-center">
                                        <div className="flex items-start justify-between">
                                            <span className="text-7xl md:text-8xl font-black text-white/6 leading-none tracking-tighter select-none">
                                                {card.id}
                                            </span>
                                            <div className={cn('w-14 h-14 rounded-2xl bg-white/6 border border-white/10 flex items-center justify-center', card.border)}>
                                                <Icon className={cn('w-7 h-7 opacity-85', card.accent)} strokeWidth={1.4} />
                                            </div>
                                        </div>

                                        <h3 className="mt-6 text-3xl md:text-4xl font-black text-white tracking-wide uppercase leading-tight">
                                            {card.title}
                                        </h3>

                                        <p className={cn('mt-3 text-xs md:text-sm font-bold tracking-[0.3em] uppercase', card.accent)}>
                                            {card.slogan}
                                        </p>

                                        <p className="mt-6 text-slate-300 text-sm md:text-base leading-relaxed max-w-md font-medium">
                                            {card.description}
                                        </p>
                                    </div>

                                    {/* Sağ: görsel */}
                                    <div className="hidden lg:block relative w-1/2">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 0px, (max-width: 1440px) 48vw, 680px"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/35 to-transparent" />
                                    </div>

                                    {/* Mobilde görsel arka plan gibi */}
                                    <div className="absolute inset-0 lg:hidden">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            fill
                                            className="object-cover opacity-35"
                                            sizes="(max-width: 1024px) 92vw, 0px"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-charcoal-950/10" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
