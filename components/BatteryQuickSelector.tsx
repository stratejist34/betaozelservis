'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { HelpCircle, ChevronRight, Phone, MessageCircle, FlipHorizontal as Photo, CheckCircle2, AlertCircle } from 'lucide-react';

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

export default function BatteryQuickSelector() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selection, setSelection] = useState<string | null>(searchParams.get('startStop'));
    const [showHelp, setShowHelp] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const helpSteps = [
        { icon: '仪表盘', text: "Gösterge panelinde 'A' içinde ok simgesi varsa: Start-Stop" },
        { icon: '标志', text: "Akünüzün üzerinde EFB / AGM yazıyorsa: Start-Stop" },
        { icon: '按键', text: "'Start-Stop OFF' tuşu varsa: Start-Stop" }
    ];

    const trackEvent = (eventName: string) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', eventName);
        }
    };

    // Global Scroll Fix for Next.js Router Push
    useEffect(() => {
        const currentSelection = searchParams.get('startStop');
        if (currentSelection !== selection) {
            setSelection(currentSelection);
        }
    }, [searchParams]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        trackEvent('aku_karar_gorundu');
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleSelection = (id: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if (selection === id) {
            params.delete('startStop');
            setSelection(null);
        } else {
            params.set('startStop', id);
            setSelection(id);
            const eventMap: Record<string, string> = {
                'yes': 'aku_secim_var',
                'no': 'aku_secim_yok',
                'unsure': 'aku_secim_emin_degil'
            };
            trackEvent(eventMap[id]);
        }
        router.push(`?${params.toString()}`, { scroll: false });
    };

    const getActionText = () => {
        if (selection === 'yes') return "Start-Stop sisteminiz için en doğru akü modelini netleştirelim.";
        if (selection === 'no') return "Klasik sisteminize en uygun, uzun ömürlü aküyü seçelim.";
        return "Risk almayın! Hangi akü gerektiği usta teyidi ile 30 saniyede netleşsin.";
    };

    const getWhatsAppUrl = (type: 'general' | 'photo' | 'chassis') => {
        const startStopMap: Record<string, string> = {
            'yes': 'Var',
            'no': 'Yok',
            'unsure': 'Emin değilim'
        };
        const ssStatus = selection ? startStopMap[selection] : '[Var / Yok / Emin değilim]';

        let message = '';
        if (type === 'general') {
            message = `Merhaba. Akü değişimi için hızlı teyit istiyorum.\n\n• Araç: [Marka/Model/Yıl]\n• Start-Stop: ${ssStatus}\n• Konum: [Tuzla / Pendik / Gebze]\n\nUygun aküyü ve toplam fiyatı yazar mısınız?`;
        } else if (type === 'photo') {
            message = `Merhaba. Akü etiket fotoğrafını gönderiyorum.\nUygun aküyü teyit edip toplam fiyatı yazar mısınız?\n\nStart-Stop: ${ssStatus}\nAraç: [Marka/Model/Yıl]`;
        } else if (type === 'chassis') {
            message = `Merhaba. Şasi no ile akü uyumluluğu teyidi istiyorum.\n\nVIN/Şasi: [17 karakter]\nAraç: [Marka/Model/Yıl]\nStart-Stop: ${ssStatus}\n\nUygun aküyü ve toplam fiyatı yazar mısınız?`;
        }

        return `https://wa.me/905332081400?text=${encodeURIComponent(message)}`;
    };

    return (
        <section className="py-24 relative z-20 -mt-16" ref={containerRef}>
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-[3rem] sm:rounded-[4rem] p-8 sm:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.5)] relative overflow-hidden">
                    {/* Interior Decorative Grid */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'var(--tech-grid-dark)', backgroundSize: '32px 32px' }} />

                    <div className="relative z-10 text-center mb-10 sm:mb-12">
                        <h2 className="text-[10px] font-black text-brand-default tracking-[0.5em] uppercase mb-4 opacity-70">// KARAR DESTEK SİSTEMİ</h2>
                        <h3 className="text-xl sm:text-3xl font-black text-white mb-4 uppercase tracking-tight">
                            Aracınızda Start-Stop var mı?
                        </h3>
                        <button
                            onClick={() => setShowHelp(!showHelp)}
                            className="inline-flex items-center gap-2 text-charcoal-400 hover:text-brand-default text-[10px] sm:text-xs font-bold transition-colors group underline underline-offset-4 decoration-white/10 hover:decoration-brand-default"
                        >
                            <HelpCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            Nasıl anlarım?
                            <ChevronRight className={`w-3 h-3 transition-transform ${showHelp ? 'rotate-90' : ''}`} />
                        </button>
                    </div>

                    {/* Quick Selection Buttons - Forced Grid to fit all mobile screens */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-6 relative z-10 mb-10 pb-0">
                        {[
                            { id: 'yes', label: 'VAR', desc: 'START-STOP', color: 'border-white/5' },
                            { id: 'no', label: 'YOK', desc: 'KLASİK', color: 'border-white/5' },
                            { id: 'unsure', label: 'EMİN DEĞİLİM', desc: 'ÖNERİLEN', color: 'border-brand-default/40' }
                        ].map((opt) => (
                            <button
                                key={opt.id}
                                onClick={() => handleSelection(opt.id)}
                                className={`flex-1 min-w-0 group relative p-1.5 sm:p-8 rounded-lg sm:rounded-[2rem] border transition-all text-center flex flex-col items-center justify-center gap-0.5 sm:gap-1 ${selection === opt.id
                                    ? 'bg-brand-default/20 border-brand-default shadow-[0_0_15px_rgba(198,31,58,0.2)]'
                                    : `${opt.color} bg-white/5 hover:border-white/30 hover:bg-white/10`
                                    }`}
                            >
                                <span className={`text-[8px] sm:text-sm font-black tracking-tighter sm:tracking-[0.2em] leading-tight ${selection === opt.id ? 'text-white' : 'text-charcoal-100'}`}>
                                    {opt.label}
                                </span>
                                <span className={`text-[6px] sm:text-[9px] font-black uppercase tracking-tighter sm:tracking-widest opacity-70 ${selection === opt.id ? 'text-brand-default' : 'text-charcoal-400'}`}>
                                    {opt.desc}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Help Guide (Collapsible) */}
                    {showHelp && (
                        <div className="relative z-10 bg-black/40 rounded-3xl p-6 sm:p-8 border border-white/5 mb-10 animate-in slide-in-from-top-4 duration-300">
                            <h4 className="text-[10px] sm:text-xs font-black text-white uppercase tracking-widest mb-6 flex items-center gap-2">
                                <AlertCircle className="w-4 h-4 text-brand-default" />
                                10 Saniyede Kontrol Rehberİ
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                                {helpSteps.map((step, idx) => (
                                    <div key={idx} className="flex gap-4 items-start">
                                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-brand-default/10 flex-shrink-0 flex items-center justify-center text-[10px] sm:text-xs font-black text-brand-default border border-brand-default/20">
                                            {idx + 1}
                                        </div>
                                        <p className="text-[10px] sm:text-xs text-charcoal-200 leading-relaxed font-bold">
                                            {step.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Action Area - Thumb Zone Optimized */}
                    <div className="relative z-10 animate-in fade-in zoom-in duration-500 sm:sticky sm:bottom-0">
                        <div className="text-center mb-10">
                            <p className="text-[13px] sm:text-sm font-bold text-charcoal-300 italic mb-2">
                                {getActionText()}
                            </p>
                            <div className="w-12 h-1 bg-brand-default/20 mx-auto rounded-full" />
                        </div>

                        {/* Primary Action Button - FULL WIDTH & THUMB ZONE */}
                        <a
                            href="tel:+905332081400"
                            onClick={() => trackEvent('aku_teyit_ara')}
                            className="flex items-center justify-center gap-4 p-6 sm:p-10 bg-brand-default hover:bg-brand-dark rounded-2xl sm:rounded-[4rem] transition-all group/btn shadow-[0_20px_60px_rgba(198,31,58,0.3)] mb-8 w-full"
                        >
                            <Phone className="w-8 h-8 sm:w-11 sm:h-11 text-white animate-pulse" />
                            <div className="text-left">
                                <p className="text-[14px] sm:text-xl font-black uppercase tracking-widest text-white leading-tight">
                                    {selection === 'yes' ? '30 sn’de Start-Stop aküyü teyit et' :
                                        selection === 'no' ? 'Klasik aküyü 30 sn’de netleştir' :
                                            'En güvenli aküyü 30 sn’de teyit et'}
                                </p>
                                <p className="text-[11px] sm:text-[13px] text-white/90 font-medium">Ustaya bağlanın, hangi akü gerektiği netleşsin.</p>
                            </div>
                        </a>

                        {/* Secondary Actions - Silent Butons (Jakob's Law) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                            <a
                                href={getWhatsAppUrl('photo')}
                                target="_blank"
                                onClick={() => trackEvent('aku_etiket_foto')}
                                className="flex items-center gap-3 px-5 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-2xl text-white/80 hover:text-brand-default hover:bg-white/10 hover:border-brand-default/30 transition-all group/link"
                            >
                                <Photo className="w-4 h-4 sm:w-5 sm:h-5 text-brand-default shrink-0" />
                                <div className="text-left overflow-hidden">
                                    <span className="text-[12px] sm:text-[13px] font-black block leading-tight mb-0.5 truncate uppercase">Fotoğraf Gönder</span>
                                    <span className="text-[10px] sm:text-[11px] text-charcoal-300 block font-medium leading-none truncate">Etiketi çekin.</span>
                                </div>
                            </a>
                            <a
                                href={getWhatsAppUrl('general')}
                                target="_blank"
                                onClick={() => trackEvent('aku_genel_whatsapp') /* Extra context for tracking */}
                                className="flex items-center gap-3 px-5 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-2xl text-white/80 hover:text-brand-default hover:bg-white/10 hover:border-brand-default/30 transition-all group/link"
                            >
                                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-brand-default shrink-0" />
                                <div className="text-left overflow-hidden">
                                    <span className="text-[12px] sm:text-[13px] font-black block leading-tight mb-0.5 truncate uppercase">WhatsApp'tan Yaz</span>
                                    <span className="text-[10px] sm:text-[11px] text-charcoal-300 block font-medium leading-none truncate">Hızlı akü teyidi.</span>
                                </div>
                            </a>
                            <a
                                href={getWhatsAppUrl('chassis')}
                                target="_blank"
                                onClick={() => trackEvent('aku_sasi_sorgu')}
                                className="flex items-center gap-3 px-5 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-2xl text-white/80 hover:text-brand-default hover:bg-white/10 hover:border-brand-default/30 transition-all group/link"
                            >
                                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-default shrink-0" />
                                <div className="text-left overflow-hidden">
                                    <span className="text-[12px] sm:text-[13px] font-black block leading-tight mb-0.5 truncate uppercase">Şasi No İle Sorgula</span>
                                    <span className="text-[10px] sm:text-[11px] text-charcoal-300 block font-medium leading-none truncate">(17 Karakter)</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Reliability Microtext */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center px-4">
                    <p className="text-[8px] sm:text-[9px] text-charcoal-400 font-black uppercase leading-relaxed tracking-[0.1em]">
                        ✓ Yanlış akü çıkarsa değişim değil, baştan doğru seçim yapalım.
                    </p>
                    <p className="text-[8px] sm:text-[9px] text-charcoal-400 font-black uppercase leading-relaxed tracking-[0.1em]">
                        ✓ Montaj + kodlama gerektiren araçlarda önce teyit ediyoruz.
                    </p>
                    <p className="text-[8px] sm:text-[9px] text-charcoal-400 font-black uppercase leading-relaxed tracking-[0.1em]">
                        ✓ Uyumluluk teyidi her değişim paketine dahildir.
                    </p>
                </div>
            </div>
        </section>
    );
}
