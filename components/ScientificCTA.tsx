'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { trackPhoneClick, trackWhatsappClick } from '@/lib/analytics';

import { useServiceArea } from '@/context/ServiceAreaContext';

interface ScientificCTAProps {
    variant?: 'inline' | 'bottom' | 'soft';
}

export default function ScientificCTA({ variant = 'inline' }: ScientificCTAProps) {
    const revealRef = useScrollReveal();
    const { verifyAndAction } = useServiceArea();

    const handleAction = (action: 'phone' | 'whatsapp') => {
        verifyAndAction(action, () => {
            if (action === 'phone') {
                trackPhoneClick({ source: 'blog_mid', page_type: 'blog' });
                window.location.href = 'tel:+905332081400';
            } else {
                trackWhatsappClick({ source: 'blog_mid', page_type: 'blog' });
                window.open('https://wa.me/905332081400?text=Blog yazısı üzerinden ulaşıyorum, bilgi almak istiyorum.', '_blank');
            }
        });
    };

    if (variant === 'soft') {
        return (
            <div ref={revealRef as any} className="my-12 p-8 sm:p-12 rounded-[2rem] bg-charcoal-50 border border-charcoal-100 reveal">
                <div className="text-center space-y-6">
                    <h3 className="text-xl sm:text-2xl font-black text-charcoal-900 uppercase tracking-tight">
                        Aracınıza özel netleştirmek ister misiniz?
                    </h3>
                    <p className="text-charcoal-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
                        Bu bilgiler geneldir. Aracınızın Şasi / motor kodu ile net fiyat aralığını doğrularız.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                        <button
                            onClick={() => handleAction('phone')}
                            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-charcoal-900 text-charcoal-900 bg-transparent rounded-xl text-xs font-bold transition-all hover:bg-charcoal-900 hover:text-white active:scale-95 uppercase tracking-widest"
                        >
                            <Phone className="w-4 h-4" />
                            0533 208 14 00
                        </button>
                        <button
                            onClick={() => handleAction('whatsapp')}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-default text-white rounded-xl text-xs font-bold transition-all hover:bg-brand-hover active:scale-95 uppercase tracking-widest"
                        >
                            <MessageCircle className="w-4 h-4" />
                            WhatsApp Danışma
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div ref={revealRef as any} className={`my-16 p-10 sm:p-16 rounded-[2.5rem] bg-gradient-to-br from-brand-default via-charcoal-900 to-black text-white shadow-2xl relative overflow-hidden reveal shimmer ${variant === 'bottom' ? 'border-4 border-brand-default' : ''}`}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -ml-48 -mb-48" />

            <div className="relative z-10 text-center space-y-8">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tighter text-glow">
                    Aracınıza özel netleştirmek ister misiniz?
                </h3>
                <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
                    Bu bilgiler geneldir. Aracınıza özel doğru çözümü 30 saniyede netleştirebiliriz. Şasi / motor kodu ile net fiyat aralığını doğrularız.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <button
                        onClick={() => handleAction('phone')}
                        className="btn-gradient-red flex items-center justify-center gap-3 px-8 py-4 text-white rounded-xl text-base font-bold transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl group"
                    >
                        <Phone className="w-5 h-5 icon-ring" />
                        0533 208 14 00
                    </button>
                    <button
                        onClick={() => handleAction('whatsapp')}
                        className="btn-gradient-green flex items-center justify-center gap-3 px-8 py-4 text-white rounded-xl text-base font-bold transition-all transform hover:-translate-y-1 active:scale-95 shadow-xl group"
                    >
                        <MessageCircle className="w-5 h-5 icon-bounce" />
                        Ücretsiz Fiyat Al
                    </button>
                </div>

                <p className="text-[10px] font-bold text-slate-400 mt-8 uppercase tracking-[0.3em] opacity-60">
                    7/24 Teknik Danışmanlık ve Yol Yardım Merkezi
                </p>
            </div>
        </div>
    );
}
