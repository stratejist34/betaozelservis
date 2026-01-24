"use client";

import React, { useEffect, useState, useRef } from 'react';
import { cn } from "@/lib/utils";

const steps = [
    {
        id: "01",
        title: "İlk Temas",
        description: "Aracı değil, problemi dinleriz. Doğru sorularla süreci başlatırız."
    },
    {
        id: "02",
        title: "Diagnostik & Analiz",
        description: "Tahmin değil ölçüm. Gelişmiş cihazlarla net tespit."
    },
    {
        id: "03",
        title: "Net Bilgilendirme",
        description: "Yapılacak işlemler, nedenleri ve alternatifler açıkça paylaşılır."
    },
    {
        id: "04",
        title: "Uygulama",
        description: "Onaylanan işlemler, kontrol listeleriyle kayıt altına alınarak uygulanır."
    },
    {
        id: "05",
        title: "Teslim & Son Kontrol",
        description: "Araç, soru işareti bırakmadan güvenle teslim edilir."
    }
];

export default function ServiceWorkflow() {
    const [activeStep, setActiveStep] = useState(0);
    const sectionRef = useRef<HTMLElement>(null);

    const layoutRef = useRef({ offsetTop: 0, height: 0, vh: 0 });

    useEffect(() => {
        const updateLayout = () => {
            if (!sectionRef.current) return;
            layoutRef.current = {
                offsetTop: sectionRef.current.offsetTop,
                height: sectionRef.current.offsetHeight,
                vh: window.innerHeight
            };
        };

        updateLayout();
        window.addEventListener('resize', updateLayout);

        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const { offsetTop, height, vh } = layoutRef.current;
                    const scrollY = window.scrollY;
                    const viewCenter = vh / 2;

                    // scrollProgress = (viewCenter - elementTopRelToViewport) / elementHeight
                    // elementTopRelToViewport = offsetTop - scrollY
                    const elementTop = offsetTop - scrollY;
                    const scrollProgress = (viewCenter - elementTop) / height;

                    let newActiveStep = Math.floor(scrollProgress * steps.length);
                    if (newActiveStep < 0) newActiveStep = 0;
                    if (newActiveStep > steps.length - 1) newActiveStep = steps.length - 1;

                    setActiveStep(newActiveStep);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateLayout);
        };
    }, []);

    return (
        // Updated Background to #0F1114 and added top border for separation
        <section
            ref={sectionRef}
            className="bg-[#0F1114] py-24 text-white relative overflow-hidden border-t border-white/5"
            id="service-workflow"
        >
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                        Servis Sürecimiz Nasıl İşler?
                    </h2>
                    <span className="block text-slate-500 text-[11px] font-medium tracking-widest lowercase mb-4 opacity-70">
                        Bu sürecin tamamı aşağıda şeffaf şekilde açıklanır.
                    </span>
                    <p className="text-slate-400 font-medium text-sm md:text-base tracking-wide uppercase opacity-80">
                        Şeffaf, ölçülebilir ve kontrol altında.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

                    {/* Connecting Line (Mobile) - Vertical */}
                    <div className="md:hidden absolute top-0 bottom-0 left-[2.5rem] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent z-0" />

                    {steps.map((step, index) => {
                        const isActive = index === activeStep;

                        return (
                            <div key={step.id} className="relative group flex md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-0 transition-opacity duration-700">
                                {/* Circle / Number - Increased Visibility & Active State */}
                                <div className={cn(
                                    "w-20 h-20 shrink-0 rounded-full border flex items-center justify-center md:mb-8 relative z-10 transition-all duration-700 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]",
                                    isActive
                                        ? "bg-[#1a1c21] border-red-500/50 shadow-[0_0_20px_rgba(220,38,38,0.2)] scale-110"
                                        : "bg-[#131519] border-white/10"
                                )}>
                                    <span className={cn(
                                        "text-xl font-bold font-mono tracking-tighter transition-colors duration-700",
                                        isActive ? "text-red-500" : "text-white/50"
                                    )}>
                                        {step.id}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="pt-2 md:pt-0 relative">
                                    <h3 className={cn(
                                        "text-lg font-bold mb-4 tracking-wide transition-colors duration-700",
                                        isActive ? "text-white" : "text-white/70"
                                    )}>
                                        {step.title}
                                    </h3>
                                    <p className={cn(
                                        "text-sm leading-relaxed md:max-w-[220px] md:mx-auto font-medium transition-colors duration-700",
                                        isActive ? "text-slate-300" : "text-slate-500"
                                    )}>
                                        {step.description}
                                    </p>

                                    {/* Subtle Underline for Active State */}
                                    <div className={cn(
                                        "absolute -bottom-4 left-0 right-0 h-[1px] bg-red-500/50 transition-transform duration-700 ease-out origin-left md:origin-center",
                                        isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                                    )} />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
