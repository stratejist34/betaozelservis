'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { trackPhoneClick, trackWhatsappClick } from '@/lib/analytics';
import { useServiceArea } from '@/context/ServiceAreaContext';

export default function GlobalStickyBar() {
    const [isVisible, setIsVisible] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const { verifyAndAction } = useServiceArea();
    const pathname = usePathname();

    const getPageType = (): 'home' | 'service' | 'blog' | 'contact' | 'price' | 'other' => {
        if (pathname === '/') return 'home';
        if (pathname?.includes('/hizmetler') || pathname?.includes('/akuler')) return 'service';
        if (pathname?.includes('/blog')) return 'blog';
        if (pathname?.includes('/iletisim')) return 'contact';
        if (pathname?.includes('fiyat')) return 'price';
        return 'other';
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const viewportHeight = window.innerHeight;

            // Show sticky bar after 10% scroll
            if (currentScrollY > viewportHeight * 0.1) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Detect Scroll Direction
            if (currentScrollY < lastScrollY) {
                setIsScrollingUp(true);
            } else {
                setIsScrollingUp(false);
            }

            setLastScrollY(currentScrollY);
        };

        // Use passive listener for performance
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleCall = () => {
        verifyAndAction('phone', () => {
            trackPhoneClick({ source: 'sticky_bar', page_type: 'home' });
            window.location.href = 'tel:+905332081400';
        });
    };

    const handleWhatsApp = () => {
        verifyAndAction('whatsapp', () => {
            trackWhatsappClick({ source: 'sticky_bar', page_type: 'home' });
            window.open('https://wa.me/905332081400?text=Merhaba, fiyat teklifi almak istiyorum.', '_blank');
        });
    };

    // Calculate dynamic styles
    const containerStyle = {
        transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
        opacity: isVisible ? (isScrollingUp ? 0.85 : 1) : 0,
        pointerEvents: isVisible ? 'auto' : 'none',
    } as React.CSSProperties;

    return (
        <>
            <div
                className="fixed bottom-0 left-0 w-full z-[9999] sm:hidden transition-all duration-300 ease-out will-change-transform"
                style={containerStyle}
            >
                {/* Backdrop Blur Container */}
                <div
                    className="bg-[#111214]/90 backdrop-blur-md border-t border-white/10 shadow-[0_-8px_32px_rgba(0,0,0,0.6)] pb-safe-area pt-3 px-4"
                >
                    <div className="flex items-center gap-3 h-[56px] w-full max-w-[400px] mx-auto">

                        {/* Primary Action - Call (70%) */}
                        <button
                            onClick={handleCall}
                            className="flex-[0.7] h-full bg-[#C4122F] hover:bg-[#a50f27] text-white rounded-[12px] flex items-center justify-center gap-2.5 active:scale-[0.98] transition-transform shadow-lg shadow-red-900/20"
                        >
                            <Phone className="w-5 h-5 fill-current" />
                            <div className="flex flex-col items-start leading-none">
                                <span className="text-[14px] font-black uppercase tracking-wider">HEMEN ARA</span>
                            </div>
                        </button>

                        {/* Secondary Action - WhatsApp (30%) - SOLID STYLE */}
                        <button
                            onClick={handleWhatsApp}
                            className="flex-[0.3] h-full bg-[#0EA76B] hover:bg-[#0c8e5b] text-white rounded-[12px] flex items-center justify-center active:scale-[0.98] transition-transform shadow-lg shadow-emerald-900/20"
                        >
                            <MessageCircle className="w-6 h-6" />
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
}
