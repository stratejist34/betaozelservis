'use client';

import { ShieldCheck, Truck, Zap, Phone } from 'lucide-react';
import Image from 'next/image';
import { trackPhoneClick, trackWhatsappClick } from '@/lib/analytics';

import { useServiceArea } from '@/context/ServiceAreaContext';

export default function BatteryHero({ compact = false }: { compact?: boolean }) {
    const { verifyAndAction } = useServiceArea();

    return (
        <section className={`${compact ? 'pt-8 pb-4' : 'py-16'} relative z-10 border-b border-white/5`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8 md:gap-12">
                    {/* Text Content */}
                    <div className="text-center md:text-left flex-1">
                        <h2 className="text-[10px] font-black text-brand-default tracking-[0.5em] uppercase mb-4 animate-fade-in">
                            // ENERJİ VE PERFORMANS
                        </h2>
                        <h1 className="text-4xl sm:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">
                            Garantili <span className="text-brand-default font-black">Akü Değişimi</span>
                        </h1>

                        {!compact && (
                            <p className="text-sm sm:text-base text-charcoal-300 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium opacity-80">
                                Tuzla'da 20 yıllık teknik tecrübemizle, aracınızın genetiğine en uygun Varta akü seçimini yapıyoruz.
                                Teyit edilmemiş akü, riskli aküdür.
                            </p>
                        )}
                    </div>

                    <div className="relative w-40 h-24 md:w-56 md:h-32 mt-4 md:mt-0 shrink-0 group animate-fade-in self-center md:self-end lg:self-center">
                        <div className="absolute inset-x-0 bottom-0 h-10 bg-brand-default/20 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity" />
                        <Image
                            src="/images/products/varta/varta-sli_h3_100ah.png"
                            alt="Varta Dynamic SLI 100Ah"
                            fill
                            priority
                            className="object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform duration-500"
                            sizes="(max-width: 768px) 160px, 224px"
                        />
                    </div>
                </div>

                {!compact && (
                    <div className="mt-10 flex flex-col sm:flex-row gap-6 items-center justify-center md:justify-start">
                        <button
                            onClick={() => {
                                verifyAndAction(() => {
                                    trackPhoneClick({ source: 'hero', page_type: 'service' });
                                    window.location.href = 'tel:+905332081400';
                                });
                            }}
                            className="bg-[#C4122F] hover:bg-[#a50f27] text-white px-8 py-4 rounded-xl text-base font-black uppercase tracking-widest transition-all hover:scale-[1.05] active:scale-95 shadow-xl shadow-red-900/20 flex items-center gap-3 group"
                        >
                            <Phone className="w-5 h-5 fill-current" />
                            HEMEN ARA
                        </button>
                        <button
                            onClick={() => {
                                verifyAndAction(() => {
                                    trackWhatsappClick({ source: 'hero', page_type: 'service' });
                                    window.open('https://wa.me/905332081400?text=Akü%20fiyatı%20almak%20istiyorum.', '_blank');
                                });
                            }}
                            className="text-white/80 hover:text-white text-sm font-bold border-b border-white/20 hover:border-white transition-all pb-0.5"
                        >
                            WhatsApp ile yazmak ister misiniz?
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
