import React from 'react';

const assurances = [
    "Sorun tespit edilmeden parça değişimi yapılmadı.",
    "Yapılan işlemler ölçüm sonuçlarıyla birlikte raporlandı.",
    "Aracım teslim edilmeden önce test sürüşü yapıldı.",
    "Süre ve maliyet baştan netti, sonradan değişmedi."
];

export default function SilentAssurance() {
    return (
        <section className="bg-[#0F1114] pb-32 pt-16 text-center relative">
            {/* Top Separator - Very subtle gray */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-white/5" />

            <div className="container mx-auto px-4 max-w-[800px]">
                {/* Minimal Header */}
                <h2 className="text-white text-sm font-bold tracking-[0.3em] uppercase mb-3">
                    Bu yaklaşımı neden sürdürüyoruz?
                </h2>
                <h3 className="text-[#717479] text-[10px] font-bold tracking-[0.2em] uppercase mb-8 opacity-60">
                    Müşterilerimizin en çok dikkat ettiği detaylar
                </h3>

                {/* Separator - Increased spacing (mb-16) */}
                <div className="w-16 h-[1px] bg-brand-default/40 mx-auto mb-16" />

                {/* List - Increased font size and icon contrast */}
                <div className="flex flex-col gap-8 items-start pl-8 md:pl-0 md:items-center">
                    {assurances.map((text, index) => (
                        <div key={index} className="flex items-center gap-5 group">
                            {/* Minimal Marker - Boosted Contrast */}
                            <div className="w-1.5 h-1.5 bg-[#52525b] rotate-45 shrink-0 group-hover:bg-brand-default transition-all duration-500 shadow-[0_0_10px_rgba(255,255,255,0.05)]" />

                            {/* Text - font-size +1px (text-[15px] / md:text-[17px]) */}
                            <p className="text-[#CFCFCF] text-[15px] md:text-[17px] font-medium tracking-wide opacity-90 leading-relaxed text-left">
                                {text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
