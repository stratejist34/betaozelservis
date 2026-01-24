'use client';

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

export default function FloatingActions() {
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const trackAction = (action: string) => {
        // @ts-ignore
        if (typeof gtag !== 'undefined') {
            // @ts-ignore
            gtag('event', 'floating_action_click', {
                action: action,
            });
        }
    };

    return (
        <div className={cn(
            "fixed bottom-0 inset-x-0 z-50 lg:hidden px-4 pb-4 transition-all duration-500 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}>
            <div className="glass-header shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)] rounded-2xl border border-white/10 flex items-center overflow-hidden h-16 animate-fade-up">
                <a
                    href="tel:+905332081400"
                    onClick={() => trackAction('phone_call')}
                    className="flex-1 flex items-center justify-center gap-2 h-full bg-brand-default text-white font-black text-[11px] uppercase tracking-widest active:scale-95 transition-all"
                >
                    <Phone className="w-4 h-4 animate-pulse" />
                    Hemen Ara
                </a>
                <div className="w-px h-8 bg-charcoal-900/10" />
                <a
                    href="https://wa.me/905332081400?text=Hızlı fiyat teklifi almak istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackAction('get_quote')}
                    className="flex-1 flex items-center justify-center gap-2 h-full bg-charcoal-900/5 text-charcoal-900 font-black text-[11px] uppercase tracking-widest active:scale-95 transition-all"
                >
                    <MessageCircle className="w-4 h-4 text-brand-default" />
                    Hızlı Fiyat Al
                </a>
            </div>
        </div>
    );
}
