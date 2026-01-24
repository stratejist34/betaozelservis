'use client';

import { Phone, CheckCircle } from 'lucide-react';

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

export default function StickyBatteryCTA() {
    const trackEvent = (eventName: string) => {
        if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', eventName);
        }
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:hidden">
            <div className="bg-charcoal-900/95 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center p-2 shadow-2xl gap-2">
                <a
                    href="tel:+902163922219"
                    onClick={() => trackEvent('muhasebe_arama')}
                    className="flex-1 bg-charcoal-800 hover:bg-charcoal-700 text-white flex items-center justify-center gap-2 py-4 rounded-xl transition-all active:scale-[0.98]"
                >
                    <Phone className="w-4 h-4 text-brand-default" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Muhasebe Ara</span>
                </a>
                <a
                    href="https://wa.me/905332081400?text=Akü%20fiyatı%20almak%20istiyorum."
                    onClick={() => trackEvent('sticy_whatsapp_usta')}
                    className="flex-1 bg-brand-default hover:bg-brand-dark text-white flex items-center justify-center gap-2 py-4 rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-brand-default/20"
                >
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Fiyat Al</span>
                </a>
            </div>
        </div>
    );
}
