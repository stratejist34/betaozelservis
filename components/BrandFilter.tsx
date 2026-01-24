'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const brands = [
    { name: 'Audi', slug: 'audi' },
    { name: 'BMW', slug: 'bmw' },
    { name: 'Porsche', slug: 'porsche' },
    { name: 'Volkswagen', slug: 'volkswagen' },
    { name: 'Mercedes', slug: 'mercedes' },
    { name: 'Seat', slug: 'seat' },
    { name: 'Skoda', slug: 'skoda' },
    { name: 'Land Rover', slug: 'land-rover' },
];

export default function BrandFilter() {
    return (
        <div className="w-full py-8 bg-charcoal-900 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(16,185,129,0.05)_0%,_transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    {brands.map((brand) => (
                        <a
                            key={brand.slug}
                            href={`/blog/marka/${brand.slug}`}
                            className="group relative px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:border-emerald-500/50 hover:bg-white/10"
                        >
                            {/* Neon Glow Hover Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-emerald-500/0 blur-xl group-hover:bg-emerald-500/10 transition-all duration-500" />

                            <span className="relative text-sm font-black uppercase tracking-widest text-slate-400 group-hover:text-emerald-400 transition-colors">
                                {brand.name}
                            </span>

                            {/* Metallic Shine */}
                            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                                <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
