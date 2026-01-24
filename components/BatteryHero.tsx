'use client';

import { ShieldCheck, Truck, Zap } from 'lucide-react';

export default function BatteryHero() {
    return (
        <section className="py-16 text-center relative z-10 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-[10px] font-black text-brand-default tracking-[0.5em] uppercase mb-4 animate-fade-in">// ENERJİ VE PERFORMANS</h2>
                <h1 className="text-4xl sm:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
                    Garantili <span className="text-brand-default font-black">Akü Değişimi</span>
                </h1>
                <p className="text-sm sm:text-base text-charcoal-300 max-w-2xl mx-auto leading-relaxed font-medium opacity-80 mb-10">
                    Tuzla'da 20 yıllık teknik tecrübemizle, aracınızın genetiğine en uygun Varta akü seçimini yapıyoruz.
                    Teyit edilmemiş akü, riskli aküdür.
                </p>

                {/* Trust Chips - Premium Style */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                        <Truck className="w-4 h-4 text-brand-default" />
                        <span className="text-[10px] sm:text-xs font-black text-charcoal-50 uppercase tracking-widest">Yerinde Servis</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                        <ShieldCheck className="w-4 h-4 text-brand-default" />
                        <span className="text-[10px] sm:text-xs font-black text-charcoal-50 uppercase tracking-widest">Garanti Dahil</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                        <Zap className="w-4 h-4 text-brand-default" />
                        <span className="text-[10px] sm:text-xs font-black text-charcoal-50 uppercase tracking-widest">Kodlama Desteği</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
