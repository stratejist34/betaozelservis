'use client';

import Link from 'next/link';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const navigation = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hizmetler', href: '/hizmetler' },
    { name: 'Aküler', href: '/akuler' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/iletisim' },
];

export default function Header({ isLightPage = false, forceSilver = false }: { isLightPage?: boolean, forceSilver?: boolean }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const showGlass = scrolled || isLightPage || forceSilver;
    const isDarkText = showGlass;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const trackCall = () => {
        // @ts-ignore
        if (typeof gtag !== 'undefined') {
            // @ts-ignore
            gtag('event', 'usta_arama', {
                phone_number: '05332081400',
                click_location: 'header',
            });
        }
    };

    const trackWhatsApp = () => {
        // @ts-ignore
        if (typeof gtag !== 'undefined') {
            // @ts-ignore
            gtag('event', 'mobilmenu_whatsapp', {
                click_location: 'mobile_menu',
            });
        }
    };

    const trackMobileCall = () => {
        // @ts-ignore
        if (typeof gtag !== 'undefined') {
            // @ts-ignore
            gtag('event', 'mobilmenu_acil_yolyardim', {
                click_location: 'mobile_menu',
            });
        }
    };

    const trackLocation = () => {
        // @ts-ignore
        if (typeof gtag !== 'undefined') {
            // @ts-ignore
            gtag('event', 'header_konum_tiklandi', {
                click_location: 'header_desktop',
            });
        }
    };

    return (
        <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300 h-16 sm:h-20">
            <nav className={`w-full h-full transition-all duration-300 ${showGlass
                ? 'bg-gradient-to-b from-[#F2F4F7] via-[#FFFFFF] to-[#E2E5E9] border-b border-black/10 shadow-lg'
                : 'bg-transparent'}`} aria-label="Global">
                {/* Metallic Sheen Accent */}
                {showGlass && (
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/60 pointer-events-none" />
                )}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
                    {/* Logo - Left */}
                    <div className="flex-none lg:flex-1 flex items-center min-w-0">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2 group">
                            <span className={`text-xl sm:text-2xl font-black tracking-tighter transition-colors truncate ${isDarkText ? 'text-charcoal-900' : 'text-white'}`}>
                                BETA<span className="text-brand-default">ÖZELSERVİS</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation - Center */}
                    <div className="hidden lg:flex lg:gap-x-1 items-center">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-[12px] font-black px-4 py-2 rounded-full transition-all duration-300 uppercase tracking-widest ${isDarkText
                                    ? 'text-charcoal-900 hover:text-brand-default'
                                    : 'text-white hover:bg-white/10'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Utilities & CTA - Right */}
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-6">
                        <a
                            href="tel:+905332081400"
                            onClick={trackCall}
                            className={`flex items-center gap-2 text-xs font-bold transition-all duration-500 ${isDarkText ? 'text-charcoal-500' : 'text-white/60'}`}
                        >
                            <Phone className={`w-3.5 h-3.5 ${isDarkText ? 'text-brand-default' : 'text-white'}`} />
                            <span className={isDarkText ? 'text-charcoal-900' : 'text-white'}>0 (533) 208 14 00</span>
                        </a>

                        <a
                            href="https://google.com/maps/place//data=!4m2!3m1!1s0x14cadc151e770faf:0x41c5cb833bbb8a29?sa=X&ved=1t:8290&ictx=111"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={trackLocation}
                            className={`px-6 py-2 rounded-lg text-xs font-black transition-all duration-300 uppercase tracking-widest bg-brand-default text-white hover:bg-brand-hover shadow-premium`}
                        >
                            Konum
                        </a>
                    </div>

                    <div className="flex lg:hidden items-center ml-auto">
                        <button
                            type="button"
                            className={`p-2 transition-all ${isDarkText ? 'text-charcoal-900' : 'text-white'}`}
                            onClick={() => setMobileMenuOpen(true)}
                            aria-label="Menüyü aç"
                        >
                            <Menu className="h-6 w-6 stroke-[3]" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-50 overflow-y-auto bg-charcoal-900/90 backdrop-blur-xl px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 border-r border-white/5">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                            <span className="text-2xl font-black tracking-tighter text-charcoal-50">
                                BETA<span className="text-brand-default">ÖZELSERVİS</span>
                            </span>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-charcoal-400"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Menüyü kapat</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-charcoal-800">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-bold leading-7 text-charcoal-100 hover:bg-white/5 hover:text-brand-default"
                                    >
                                        {navigation.indexOf(item) === 0 ? '' : '// '}{item.name}
                                    </Link>
                                ))}
                            </div>
                            <div className="py-6 space-y-4">
                                <a
                                    href="tel:+905332081400"
                                    onClick={trackMobileCall}
                                    className="w-full flex items-center justify-center gap-3 rounded-xl bg-brand-default px-6 py-4 text-lg font-bold text-white shadow-premium"
                                >
                                    <Phone className="w-6 h-6" />
                                    Acil Yol Yardım
                                </a>
                                <a
                                    href="https://wa.me/905332081400?text=Fiyat teklifi almak istiyorum."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={trackWhatsApp}
                                    className="w-full flex items-center justify-center gap-3 rounded-xl bg-charcoal-800 px-6 py-4 text-lg font-bold text-white shadow-premium"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    WhatsApp Fiyat Al
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
