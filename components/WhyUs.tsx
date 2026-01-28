'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Zap, Clock, Star, CheckCircle2, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
    {
        label: 'Yıllık Tecrübe',
        value: '20+',
        icon: Clock,
        color: 'text-brand-default',
        bg: 'bg-brand-default/5'
    },
    {
        label: 'Müşteri Memnuniyeti',
        value: '%99',
        icon: Star,
        color: 'text-amber-500',
        bg: 'bg-amber-500/5'
    }
];

const features = [
    'Orijinal Yedek Parça Garantisi',
    'Şeffaf Fiyat Politikası',
    'Elektronik Arıza Tespit Cihazları',
    'Garantili İşçilik ve Bakım'
];

export default function WhyUs() {
    const revealRef = useScrollReveal();

    return (
        <section className="relative py-24 bg-beta-silver-ultra overflow-hidden">
            {/* Background Accents - Subtle light shadow instead of glow */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,_rgba(0,0,0,0.02)_0%,_transparent_50%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Area */}
                <div className="text-center mb-20 animate-fade-up">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-brand-default/5 border border-brand-default/10 text-brand-default text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                        NEDEN BİZ?
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-charcoal-950 italic tracking-tighter uppercase leading-[1.1]">
                        Teknoloji ve Ustalığın<br />
                        <span className="text-glow">Kusursuz Uyumu</span>
                    </h2>
                </div>

                <div ref={revealRef as any} className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center reveal">
                    {/* Left Column - Content & Stats */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black text-charcoal-900 uppercase italic tracking-tight">
                                Premium Araç Uzmanlığı
                            </h3>
                            <p className="text-charcoal-600 text-lg leading-relaxed font-medium">
                                Beta Özel Servis, sadece parça değiştiren bir servis değil; aracınızın DNA'sını analiz eden bir teknoloji merkezidir. 20 yılı aşkın süredir Tuzla'da, yetkili servis standartlarını %100 butik hizmet anlayışıyla birleştiriyoruz.
                            </p>
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="group p-6 bg-white rounded-[2rem] border border-beta-silver-light hover:border-brand-default/30 transition-all duration-500 shadow-premium hover:shadow-2xl">
                                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110", stat.bg)}>
                                        <stat.icon className={cn("w-5 h-5", stat.color)} />
                                    </div>
                                    <div className="text-3xl font-black text-charcoal-950 mb-1 tracking-tighter">{stat.value}</div>
                                    <div className="text-[9px] font-black text-charcoal-400 uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Checklist */}
                        <div className="space-y-4 pt-4">
                            {features.map((feature) => (
                                <div key={feature} className="flex items-center gap-4 group cursor-default">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 group-hover:text-white" />
                                    </div>
                                    <span className="text-charcoal-700 font-bold uppercase text-[11px] tracking-widest leading-none pt-0.5 group-hover:text-charcoal-950 transition-colors">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Image & Overlays */}
                    <div className="lg:col-span-7 relative">
                        <div className="relative h-[400px] md:h-[550px] w-full rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl group">
                            <Image
                                src="/wp-content/uploads/2024/12/Bmw-Audi-Mercedes-Volkswagen-Servisi-Beta-Ozel-Servis-15.bk.jpg"
                                alt="Beta Özel Servis Atölye"
                                fill
                                className="object-cover brightness-90 group-hover:scale-105 transition-transform duration-[2s]"
                                sizes="(max-width: 1024px) 100vw, 60vw"
                            />

                            {/* Inner Overlay Glow - Lighter for visibility */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                            {/* Floating Card 1: 1 Year Guarantee */}
                            <div className="absolute bottom-10 left-10 right-auto md:right-auto p-6 bg-white/95 backdrop-blur-xl rounded-[2rem] border border-white shadow-2xl animate-fade-up delay-300">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-brand-default rounded-2xl flex items-center justify-center text-white shadow-glow">
                                        <ShieldCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl font-black text-charcoal-950">1 Yıl Garanti</span>
                                            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 text-[8px] font-black uppercase">ONAYLI</span>
                                        </div>
                                        <p className="text-charcoal-500 text-xs font-medium max-w-[150px]">Tüm işçilik ve parçalarda sorgusuz garanti.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card 2: Fast Delivery */}
                            <div className="absolute top-10 right-10 p-6 bg-beta-silver-ultra/80 backdrop-blur-md rounded-[2rem] border border-white shadow-2xl animate-fade-up delay-500 hidden md:block">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-default shadow-xl border border-white/50">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl font-black text-charcoal-950">Hızlı Teslimat</span>
                                            <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-600 text-[8px] font-black uppercase">HIZLI</span>
                                        </div>
                                        <p className="text-charcoal-600 text-xs font-medium max-w-[150px]">Aynı gün arıza tespiti ve hızlı onarım süreci.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Technical Decoration - Subtle light glow */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-default/5 blur-[60px] pointer-events-none" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-default/5 blur-[60px] pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}
