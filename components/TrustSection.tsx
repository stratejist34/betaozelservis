'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const stats = [
    { label: 'Yıllık Tecrübe', value: '15+' },
    { label: 'Mutlu Müşteri', value: '2000+' },
    { label: 'Ayda Servis Edilen Araç', value: '150+' },
    { label: 'Garanti Kapsamlı Hizmet', value: '%100' },
];

export default function TrustSection() {
    const revealStatsRef = useScrollReveal();
    const revealBrandsRef = useScrollReveal();

    return (
        <section className="py-24 bg-charcoal-900 relative overflow-hidden">
            {/* Pure Metallic Depth Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal-800/20 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
                {/* Stats Grid - Shadow Hygiene Applied with Layered Grays */}
                <div ref={revealStatsRef as any} className="grid grid-cols-2 lg:grid-cols-4 gap-6 reveal pt-12 border-t border-charcoal-800">
                    {stats.map((stat, idx) => (
                        <div key={stat.label} className="group p-8 rounded-[2.5rem] border border-charcoal-800 bg-charcoal-800/20 hover:bg-charcoal-800/40 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                            <div className="text-4xl sm:text-5xl font-black text-charcoal-50 mb-3 group-hover:text-brand-default transition-colors duration-500 tracking-tighter">{stat.value}</div>
                            <div className="text-[10px] font-black text-charcoal-400 uppercase tracking-[0.2em]">{stat.label}</div>

                            {/* Technical Accent - Minimal */}
                            <div className="absolute top-0 left-0 w-1 h-0 bg-brand-default group-hover:h-full transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
