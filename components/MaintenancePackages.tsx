'use client';

import Image from 'next/image';
import { Gauge, Shield, Zap, CircleDot, Activity, ArrowRight } from 'lucide-react';

export default function MaintenancePackages() {
    return (
        <section className="py-24 relative z-10 bg-beta-silver-ultra overflow-hidden">
            {/* Visual Texture Wrapper */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'var(--tech-grid)', backgroundSize: '32px 32px' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Başlık Grubu - Refined for Light Mode */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="inline-block px-4 py-1 rounded-full bg-brand-default/5 border border-brand-default/10 text-brand-default text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                        GÜVEN ODAKLI SEÇİM
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-charcoal-950 tracking-tighter uppercase mb-6 italic leading-none">
                        Periyodik <span className="text-brand-default">Bakım Paketleri</span>
                    </h2>
                    <p className="text-charcoal-600 font-bold text-lg leading-relaxed italic">
                        Aracınızın kondisyonuna ve kullanım alışkanlıklarınıza göre şeffaf, ölçülebilir ve net seçenekler.
                    </p>
                </div>

                {/* 3) MODERN DECISION CARDS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">

                    {/* Paket 1: Standart - Sade ve Net */}
                    <div className="flex flex-col p-10 bg-beta-silver-deep rounded-[3rem] border border-beta-silver-medium shadow-premium hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                        <div className="mb-8 relative z-10">
                            <span className="text-[10px] font-black text-charcoal-400 tracking-[0.2em] uppercase">PAKET // 01</span>
                            <h3 className="text-3xl font-black text-charcoal-900 mt-2 uppercase tracking-tight italic">Standart Bakım</h3>
                            <p className="text-brand-default text-xs font-black mt-2 uppercase tracking-widest italic opacity-80">Temel Koruma</p>
                        </div>

                        <div className="space-y-5 mb-12 flex-grow">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                    <CircleDot className="w-3 h-3 text-emerald-600" />
                                </div>
                                <p className="text-charcoal-700 text-sm font-bold leading-tight">Liqui Moly ya da OEM Onaylı Yağ Değişimi</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                    <CircleDot className="w-3 h-3 text-emerald-600" />
                                </div>
                                <p className="text-charcoal-700 text-sm font-bold leading-tight">Yağ, Hava ve Polen Filtresi Yenileme</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                    <CircleDot className="w-3 h-3 text-emerald-600" />
                                </div>
                                <p className="text-charcoal-700 text-sm font-bold leading-tight">32 Nokta Temel Teknik Kontrol</p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-beta-silver-ultra">
                            <p className="text-charcoal-400 text-xs font-bold leading-relaxed italic">Hiçbir gereksiz işlem yapılmaz, sadece net ihtiyaç.</p>
                        </div>
                    </div>

                    {/* Paket 2: Detaylı - ÖNERİLEN / MERKEZ */}
                    <div className="flex flex-col p-10 bg-charcoal-950 rounded-[3rem] border-2 border-brand-default shadow-2xl relative scale-105 z-20 group transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.7),0_20px_50px_-10px_rgba(198,31,58,0.3)]">
                        {/* Inner Overflow Container for Image and Gradients */}
                        <div className="absolute inset-0 z-0 overflow-hidden rounded-[2.9rem]">
                            {/* Card Watermark - Exclusive Branding */}
                            <div className="absolute inset-0 z-0 opacity-[0.14] pointer-events-none grayscale group-hover:scale-110 transition-transform duration-[3s]">
                                <Image
                                    src="/images/bakim/detayli-bakim.avif"
                                    alt="Technical Texture"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Technical Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-80 z-[1]" />
                        </div>

                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-brand-default text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-glow z-30 whitespace-nowrap">
                            EN ÇOK TERCİH EDİLEN
                        </div>

                        <div className="mb-8 relative z-10">
                            <span className="text-[10px] font-black text-charcoal-500 tracking-[0.2em] uppercase">PAKET // 02</span>
                            <h3 className="text-3xl lg:text-4xl font-black text-white mt-2 uppercase tracking-tight italic">Detaylı Bakım</h3>
                            <p className="text-brand-default text-sm font-black mt-2 uppercase tracking-widest italic">Tam Performans + Güven</p>
                        </div>

                        <div className="space-y-5 mb-12 flex-grow">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-brand-default/20 flex items-center justify-center shrink-0">
                                    <Zap className="w-3 h-3 text-brand-default" />
                                </div>
                                <p className="text-charcoal-100 text-sm lg:text-base font-bold leading-tight">Standart Bakıma Ek: Tam Diagnostik Test</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-brand-default/20 flex items-center justify-center shrink-0">
                                    <Zap className="w-3 h-3 text-brand-default" />
                                </div>
                                <p className="text-charcoal-100 text-sm lg:text-base font-bold leading-tight">Fren Sistemi ve Balata Detaylı Analizi</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-brand-default/20 flex items-center justify-center shrink-0">
                                    <Zap className="w-3 h-3 text-brand-default" />
                                </div>
                                <p className="text-charcoal-100 text-sm lg:text-base font-bold leading-tight">Sıvı Seviyeleri ve Antifriz Ölçümü</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-brand-default/20 flex items-center justify-center shrink-0">
                                    <Zap className="w-3 h-3 text-brand-default" />
                                </div>
                                <p className="text-charcoal-100 text-sm lg:text-base font-bold leading-tight">Arıza Kayıtlarının Silinmesi ve Adaptasyon</p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/5">
                            <p className="text-charcoal-400 text-xs font-bold leading-relaxed italic">Gizli arızaları gün yüzüne çıkaran tam kontrol.</p>
                        </div>
                    </div>

                    {/* Paket 3: Kapsamlı - Full Fokus */}
                    <div className="flex flex-col p-10 bg-beta-silver-deep rounded-[3rem] border border-beta-silver-medium shadow-premium hover:shadow-2xl transition-all duration-500 group relative overflow-hidden">
                        <div className="mb-8 relative z-10">
                            <span className="text-[10px] font-black text-charcoal-400 tracking-[0.2em] uppercase">PAKET // 03</span>
                            <h3 className="text-3xl font-black text-charcoal-900 mt-2 uppercase tracking-tight italic">Kapsamlı Bakım</h3>
                            <p className="text-emerald-600 text-xs font-black mt-2 uppercase tracking-widest italic opacity-80">Uzun Yol Hazırlığı</p>
                        </div>

                        <div className="space-y-5 mb-12 flex-grow">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                    <CircleDot className="w-3 h-3 text-emerald-600" />
                                </div>
                                <p className="text-charcoal-700 text-sm font-bold leading-tight">Detaylı Bakıma Ek: Yakıt Sistemi Temizliği</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                    <CircleDot className="w-3 h-3 text-emerald-600" />
                                </div>
                                <p className="text-charcoal-700 text-sm font-bold leading-tight">Alt Takım ve Süspansiyon Boşluk Kontrolü</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                    <CircleDot className="w-3 h-3 text-emerald-600" />
                                </div>
                                <p className="text-charcoal-700 text-sm font-bold leading-tight">Yol Testi ve Dinamik Sürüş Analizi</p>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-beta-silver-ultra">
                            <p className="text-charcoal-400 text-xs font-bold leading-relaxed italic">A'dan Z'ye tam kontrol ve sınırsız güven.</p>
                        </div>
                    </div>
                </div>

                {/* 5) ALT GÜVEN SİNYALLERİ - Connected Flow */}
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-16 opacity-80 decoration-brand-default/10">
                    <div className="flex items-center gap-3">
                        <Shield className="w-4 h-4 text-brand-default" />
                        <p className="text-charcoal-700 font-black text-[10px] uppercase tracking-wider italic">Onayınız olmadan parça değişmez</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Activity className="w-4 h-4 text-brand-default" />
                        <p className="text-charcoal-700 font-black text-[10px] uppercase tracking-wider italic">Eski parçalar size teslim edilir</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <Zap className="w-4 h-4 text-brand-default" />
                        <p className="text-charcoal-700 font-black text-[10px] uppercase tracking-wider italic">Fiyat baştan nettir, sürpriz yok</p>
                    </div>
                </div>

                {/* 6) FINAL CTA - The Resolution */}
                <div className="flex flex-col items-center">
                    <a
                        href={`https://wa.me/905332081400?text=${encodeURIComponent('Aracım için bakım fiyatı almak istiyorum Marka/Model: ')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                            if (typeof window !== 'undefined' && (window as any).gtag) {
                                (window as any).gtag('event', 'anasayfa_whatsp_bakim_al');
                            }
                        }}
                        className="bg-charcoal-950 hover:bg-black text-white px-12 lg:px-20 py-5 lg:py-6 rounded-full text-xl lg:text-2xl font-black shadow-2xl transition-all hover:scale-[1.05] active:scale-95 flex items-center gap-4 group/cta"
                    >
                        Net Fiyat Al <ArrowRight className="w-6 h-6 group-hover/cta:translate-x-2 transition-transform text-brand-default" />
                    </a>
                    <p className="mt-8 flex items-center gap-3 text-charcoal-600 font-bold text-xs uppercase tracking-[0.2em]">
                        <span className="w-2 h-2 rounded-full bg-brand-default animate-pulse" />
                        Telefonda ne konuştuysak, serviste de odur.
                    </p>
                </div>
            </div>
        </section>
    );
}
