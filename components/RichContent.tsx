'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import parse, { domToReact, HTMLReactParserOptions, Element } from 'html-react-parser';
import { cn } from '@/lib/utils';
import { X, Maximize2 } from 'lucide-react';

interface RichContentProps {
    content: string;
    className?: string;
}

export default function RichContent({ content, className }: RichContentProps) {
    const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

    // Close lightbox on escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setLightboxSrc(null);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const options: HTMLReactParserOptions = {
        replace: (domNode) => {
            if (domNode instanceof Element) {
                // 1. Optimize Images + Platinum Design + Lightbox Trigger
                if (domNode.name === 'img' && domNode.attribs) {
                    const { src, alt, width, height } = domNode.attribs;

                    if (src.startsWith('/wp-content') || src.startsWith('/images')) {
                        const parsedWidth = parseInt(width) || 800;
                        const parsedHeight = parseInt(height) || 500;

                        return (
                            <div
                                className="group relative w-full my-6 sm:my-12 rounded-[1.5rem] overflow-hidden cursor-zoom-in transition-all duration-500 shadow-sm hover:shadow-md border border-gray-200/60 bg-white"
                                onClick={() => setLightboxSrc(src)}
                            >
                                {/* Platinum Border Overlay - Fixed 1px Metallic Feel */}
                                <div className="absolute inset-0 border border-white/40 rounded-[1.5rem] pointer-events-none z-10" />

                                <Image
                                    src={src}
                                    alt={alt || 'Beta Özel Servis Teknik'}
                                    width={parsedWidth}
                                    height={parsedHeight}
                                    className="w-full h-auto object-cover brightness-[0.98] group-hover:brightness-100 transition-all duration-700"
                                    sizes="(max-width: 1024px) 100vw, 800px"
                                />

                                {/* Subtle Hover Indicator */}
                                <div className="absolute top-4 right-4 p-2 bg-black/20 backdrop-blur-md rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
                                    <Maximize2 className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        );
                    }
                }

                // 2. Headings & Styling Consistency
                if (domNode.name === 'h2') {
                    return (
                        <h2 id={domNode.attribs.id} className="text-2xl sm:text-3xl font-black text-gray-900 mt-10 mb-5 italic tracking-tight flex items-center gap-3">
                            <span className="w-6 h-1 bg-brand-default rounded-full" />
                            {domToReact(domNode.children as any, options)}
                        </h2>
                    );
                }

                // 3. Responsive Table Wrapper (Fixes Mobile Overflow & Header Shift)
                if (domNode.name === 'table') {
                    return (
                        <div className="w-full overflow-x-auto my-8 rounded-2xl border border-gray-100 scrollbar-hide shadow-inner bg-white/50">
                            <table className="min-w-full divide-y divide-gray-100 table-auto">
                                {domToReact(domNode.children as any, options)}
                            </table>
                        </div>
                    );
                }
            }
        }
    };

    return (
        <>
            <div className={cn("rich-content-wrapper", className)}>
                {parse(content, options)}
            </div>

            {/* Custom Lightbox - Zero Dependency & Ultra Performance */}
            {lightboxSrc && typeof document !== 'undefined' && createPortal(
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-md animate-fade-in p-4 sm:p-10 cursor-zoom-out"
                    onClick={() => setLightboxSrc(null)}
                >
                    <button
                        className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all z-50 group"
                        onClick={(e) => { e.stopPropagation(); setLightboxSrc(null); }}
                    >
                        <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                    </button>

                    <div
                        className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center animate-scale-up"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={lightboxSrc}
                            alt="Büyütülmüş Görsel"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
