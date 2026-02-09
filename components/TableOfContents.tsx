'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, List } from 'lucide-react';
import { cn } from '@/lib/utils';
import { trackWhatsappClick } from '@/lib/analytics';
import { useServiceArea } from '@/context/ServiceAreaContext';

interface TocItem {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    items: TocItem[];
    variant?: 'mobile' | 'desktop' | 'all';
}

export default function TableOfContents({ items, variant = 'all' }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>('');
    const [isOpen, setIsOpen] = useState(false);
    const { verifyAndAction } = useServiceArea();

    const handleWhatsappClick = () => {
        verifyAndAction('whatsapp', () => {
            trackWhatsappClick({ source: 'toc_sidebar', page_type: 'blog' });
            window.open('https://wa.me/905332081400?text=Blog yazısı üzerinden fiyat teklifi almak istiyorum.', '_blank');
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0% -80% 0%' }
        );

        items.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [items]);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsOpen(false);
    };

    if (items.length === 0) return null;

    return (
        <>
            {/* Mobile Header Button */}
            {(variant === 'mobile' || variant === 'all') && (
                <div className="lg:hidden mb-1">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full flex items-center justify-between p-3 bg-charcoal-50 rounded-2xl border border-charcoal-100 text-charcoal-900 font-bold uppercase tracking-wider text-[10px]"
                    >
                        <div className="flex items-center gap-2">
                            <List className="w-4 h-4 text-brand-default" />
                            İçindekiler
                        </div>
                        <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
                    </button>

                    {isOpen && (
                        <div className="mt-2 p-4 bg-white rounded-2xl border border-gray-100 shadow-xl space-y-3">
                            {items.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className={cn(
                                        "block w-full text-left text-sm font-medium transition-colors",
                                        item.level === 3 ? "pl-4 text-gray-500" : "text-gray-900",
                                        activeId === item.id ? "text-brand-default" : "hover:text-brand-default"
                                    )}
                                >
                                    {item.text}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Desktop Sticky Sidebar */}
            {(variant === 'desktop' || variant === 'all') && (
                <aside className="hidden lg:block sticky top-32 h-fit w-full max-w-[280px]">
                    <div className="p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-premium">
                        <h3 className="text-xs font-black text-charcoal-900 uppercase tracking-[0.2em] mb-8 pb-4 border-b border-gray-50">
                            İçindekiler
                        </h3>
                        <nav className="space-y-4 mb-10">
                            {items.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollTo(item.id)}
                                    className={cn(
                                        "block w-full text-left text-[13px] leading-snug transition-all relative pl-4",
                                        item.level === 3 ? "ml-4 text-gray-400 font-medium" : "font-bold text-charcoal-700",
                                        activeId === item.id
                                            ? "text-brand-default"
                                            : "hover:text-brand-default"
                                    )}
                                >
                                    {/* Active Indicator Dot */}
                                    {activeId === item.id && (
                                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-brand-default rounded-full" />
                                    )}
                                    {item.text}
                                </button>
                            ))}
                        </nav>

                        {/* Sidebar Mini CTA */}
                        <div className="pt-6 border-t border-gray-50">
                            <button
                                onClick={handleWhatsappClick}
                                className="w-full group flex items-center justify-between p-4 bg-brand-default text-white rounded-2xl shadow-lg shadow-brand-default/20 transition-all hover:bg-brand-hover hover:-translate-y-1 active:scale-95"
                            >
                                <div className="space-y-0.5 text-left">
                                    <span className="block text-[10px] font-black uppercase tracking-[0.1em] opacity-80">
                                        Fiyatları
                                    </span>
                                    <span className="block text-sm font-black whitespace-nowrap">
                                        Netleştirelim
                                    </span>
                                </div>
                                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                    <ChevronDown className="w-4 h-4 -rotate-90" />
                                </div>
                            </button>
                        </div>
                    </div>
                </aside>
            )}
        </>
    );
}
