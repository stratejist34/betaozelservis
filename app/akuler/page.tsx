import { getProducts } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BatteryHero from '@/components/BatteryHero';
import BatteryQuickSelector from '@/components/BatteryQuickSelector';
import StickyBatteryCTA from '@/components/StickyBatteryCTA';
import Image from 'next/image';
import { MessageCircle, CheckCircle2, AlertCircle, ChevronDown, Phone } from 'lucide-react';
import { Suspense } from 'react';

export const metadata = {
    title: 'Varta Aküler | Beta Özel Servis',
    description: 'Aracınız için en kaliteli Varta akü modelleri. AGM, EFB ve Blue Dynamic seçenekleriyle uygun fiyatlı akü değişimi.',
    alternates: {
        canonical: 'https://betaozelservis.com/akuler/',
    },
    openGraph: {
        title: 'Varta Aküler | Beta Özel Servis',
        description: 'Aracınız için en kaliteli Varta akü modelleri. AGM, EFB ve Blue Dynamic seçenekleriyle uygun fiyatlı akü değişimi.',
        url: 'https://betaozelservis.com/akuler/',
        type: 'website',
    },
};

export default async function AkulerPage(props: {
    searchParams: Promise<{ startStop?: string }>
}) {
    const searchParams = await props.searchParams;
    const products = await getProducts();
    let batteries = products
        .filter(p => p.categories?.includes('Akü') || p.categories?.includes('Varta'))
        .slice(0, 6); // Hick's Law: Uzman seçimi için 6 ürün yeterli

    const startStopSelection = searchParams.startStop;

    if (startStopSelection === 'yes') {
        batteries = batteries.filter(p =>
            (p.name?.toUpperCase().includes('AGM')) ||
            (p.name?.toUpperCase().includes('EFB')) ||
            (p.name?.toUpperCase().includes('START STOP')) ||
            (p.name?.toUpperCase().includes('START-STOP'))
        );
    } else if (startStopSelection === 'no') {
        batteries = batteries.filter(p =>
            !(p.name?.toUpperCase().includes('AGM')) &&
            !(p.name?.toUpperCase().includes('EFB')) &&
            !(p.name?.toUpperCase().includes('START STOP')) &&
            !(p.name?.toUpperCase().includes('START-STOP'))
        );
    }

    return (
        <main className="min-h-screen flex flex-col bg-charcoal-600 relative overflow-hidden">
            <Header />

            {/* Premium Metal Glow Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(191,194,201,0.12)_0%,_transparent_50%)] pointer-events-none" />

            <div className="pt-24 sm:pt-32">
                <BatteryHero />
            </div>

            <Suspense fallback={<div className="h-32" />}>
                <BatteryQuickSelector />
            </Suspense>

            {/* Recommended Packages Section */}
            <section className="py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl sm:text-5xl font-black text-white mb-4 uppercase tracking-tighter italic">
                            {startStopSelection === 'yes' ? 'Start-Stop ' : startStopSelection === 'no' ? 'Klasik ' : 'Önerilen '}
                            <span className="text-brand-default">Uzman Paketlerİ</span>
                        </h2>
                        <p className="text-charcoal-300 font-bold uppercase tracking-widest text-xs opacity-60">
                            {startStopSelection === 'yes' ? 'Aracınızın Teknolojİsİne Uyumlu AGM ve EFB Çözümler' :
                                startStopSelection === 'no' ? 'Standart Sistemler İçin Dayanıklı Blue Dynamic SerİSİ' :
                                    'Aracınızın Teknolojİsİne Göre En Uygun Çözümler'}
                        </p>
                    </div>

                    {batteries.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {batteries.map((product) => {
                                const nameUpper = product.name?.toUpperCase() || '';
                                const isAgm = nameUpper.includes('AGM');
                                const isEfb = nameUpper.includes('EFB');
                                const isStartStopAttr = isAgm || isEfb || nameUpper.includes('START STOP') || nameUpper.includes('START-STOP');

                                return (
                                    <div
                                        key={product.id}
                                        className="group bg-black/50 backdrop-blur-md border border-white/5 rounded-[2.5rem] shadow-2xl hover:bg-black/60 hover:border-brand-default/30 transition-all duration-500 hover:-translate-y-2 flex flex-col relative overflow-hidden"
                                    >
                                        {/* Technical Accent - Minimal Glow */}
                                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-default/5 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                        <div className="relative h-48 w-full bg-white/5 p-6 border-b border-white/5">
                                            <Image
                                                src={(product.images && product.images[0] && product.images[0].length > 0) ? product.images[0] : '/wp-content/uploads/2024/12/Varta-N60-60-AH-EFB-300x300.jpg'}
                                                alt={product.name}
                                                fill
                                                className="object-contain p-8 group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            />
                                            <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                                                {isAgm ? (
                                                    <div className="bg-brand-default text-white text-[8px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-brand-default/30 shadow-lg shadow-brand-default/20">
                                                        AGM START-STOP
                                                    </div>
                                                ) : isEfb ? (
                                                    <div className="bg-charcoal-700 text-white text-[8px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/10">
                                                        EFB START-STOP
                                                    </div>
                                                ) : isStartStopAttr ? (
                                                    <div className="bg-charcoal-700 text-white text-[8px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/10">
                                                        START-STOP GÜCÜ
                                                    </div>
                                                ) : (
                                                    <div className="bg-charcoal-800 text-charcoal-300 text-[8px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-white/5">
                                                        STANDART AKÜ
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <div className="p-8 flex-grow flex flex-col">
                                            <h3 className="text-base font-black text-white mb-6 group-hover:text-brand-default transition-colors line-clamp-2 uppercase tracking-tight leading-tight">
                                                {product.name}
                                            </h3>

                                            <div className="mb-8 space-y-2">
                                                {[
                                                    isStartStopAttr ? "Start-Stop Sisteme Uyumlu" : "Klasik Sisteme Uyumlu",
                                                    "Ücretsiz Montaj Dahil",
                                                    "BMS Kodlama Teyidi",
                                                    "2 Yıl Varta Garantisi"
                                                ].map((item, idx) => (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <div className="w-1 h-1 rounded-full bg-brand-default" />
                                                        <span className="text-[10px] font-bold text-charcoal-300 uppercase tracking-wider">{item}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="mt-auto pt-4 flex flex-col gap-6">
                                                <div className="flex flex-col">
                                                    <p className="text-[9px] text-charcoal-400 font-black uppercase tracking-widest mb-1 opacity-60">Paket Başlangıç Fiyatı</p>
                                                    <span className="text-3xl font-black text-white tracking-tighter">
                                                        {product.price ? `${new Intl.NumberFormat('tr-TR').format(Number(product.price))} ₺` : 'Fiyat Sorun'}
                                                    </span>
                                                </div>

                                                <a
                                                    href={`https://wa.me/905332081400?text=${encodeURIComponent(`${product.name} akü fiyatı ve montajı hakkında bilgi almak istiyorum.`)}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-full flex items-center justify-center gap-3 py-4 bg-white/5 hover:bg-brand-default border border-white/10 hover:border-brand-default text-white rounded-xl text-xs font-black uppercase tracking-widest transition-all transform hover:scale-[1.02] active:scale-[0.98] group/btn shadow-xl"
                                                >
                                                    <MessageCircle className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                                                    Hemen Teklif Al
                                                </a>

                                                <a
                                                    href={`/urun/${product.slug}`}
                                                    className="inline-flex items-center justify-center text-[10px] font-black text-charcoal-400 hover:text-white transition-colors uppercase tracking-[0.2em] group/link"
                                                >
                                                    Teknik Detayları Gör
                                                    <ChevronDown className="w-3 h-3 ml-1 -rotate-90 group-hover/link:translate-x-1 transition-transform" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-sm">
                            <AlertCircle className="w-16 h-16 text-brand-default mx-auto mb-6 opacity-50" />
                            <h3 className="text-2xl font-black text-white mb-4 uppercase italic">Aradığınız Akü Bulunamadı</h3>
                            <p className="text-charcoal-300 mb-8 max-w-md mx-auto font-bold uppercase tracking-tight text-xs leading-relaxed">
                                Seçtiğiniz filtreye uygun ürün şu an listelenmiyor olabilir.
                                <br />Size en uygun aküyü bulmamız için ücretsiz usta desteği alabilirsiniz.
                            </p>
                            <a
                                href="tel:+905332081400"
                                className="inline-flex items-center gap-4 px-10 py-5 bg-brand-default hover:bg-brand-dark text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-brand-default/20"
                            >
                                <Phone className="w-5 h-5" />
                                Ustaya Sor (30 Saniye)
                            </a>
                        </div>
                    )}
                </div>
            </section>

            {/* Compatibility Proof / How we verify */}
            <section className="py-32 bg-black/20 border-y border-white/5 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-[10px] font-black text-brand-default tracking-[0.5em] uppercase mb-6 opacity-70">// MÜHENDİSLİK ODAKLI</h2>
                            <h3 className="text-3xl sm:text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-tight">
                                Uyumluluğu <span className="text-brand-default">Nasıl Doğruluyoruz?</span>
                            </h3>
                            <p className="text-charcoal-300 text-lg leading-relaxed mb-12 font-medium">
                                Manuel katalog kontrolleri yerine dijital servis sistemlerini kullanarak hatasız seçim yapıyoruz.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "ŞASİ NUMARASI SORGULAMA", desc: "Aracınızın fabrikasyon akü değerlerini şasi üzerinden sistemsel olarak teyit ediyoruz." },
                                    { title: "OEM STANDART KONTROLÜ", desc: "Varta'nın orijinal üretici spesifikasyonlarına göre en uygun AGM veya EFB serisini belirliyoruz." },
                                    { title: "BMS KODLAMA TEYİDİ", desc: "Yeni akünün araç beynine tanıtılması (BMS) gerekip gerekmediğini önceden belirliyoruz." }
                                ].map((step, idx) => (
                                    <div key={idx} className="flex gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl transition-colors hover:bg-white/[0.07]">
                                        <div className="w-12 h-12 rounded-2xl bg-brand-default/10 border border-brand-default/20 flex items-center justify-center text-brand-default font-black shrink-0">
                                            {idx + 1}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-black text-sm mb-2 uppercase tracking-widest">{step.title}</h4>
                                            <p className="text-charcoal-400 text-[11px] leading-relaxed font-bold">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative aspect-square sm:aspect-video lg:aspect-square bg-charcoal-800 rounded-[4rem] border border-white/10 overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-default/20 to-transparent opacity-50 transition-opacity group-hover:opacity-70" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <CheckCircle2 className="w-32 h-32 text-brand-default/20 animate-pulse" />
                            </div>
                            <div className="absolute bottom-12 left-12 right-12 p-10 bg-black/60 backdrop-blur-md border border-white/10 rounded-[2.5rem]">
                                <p className="text-white font-black text-xl mb-3 uppercase italic tracking-tighter">"Teyit Edİlmemİş Akü, Yanlış Aküdür."</p>
                                <p className="text-charcoal-300 text-xs font-bold leading-relaxed">Yanlış seçim; marş basmama, start-stop devre dışı kalması ve elektronik arızalara yol açabilir.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mini FAQ Accordion */}
            <section className="py-32 relative z-10">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-center text-3xl font-black text-white mb-20 uppercase tracking-tight italic">
                        Sıkça Sorulan <span className="text-brand-default">Teknİk Sorular</span>
                    </h2>
                    <div className="space-y-6">
                        {[
                            { q: "Kodlama (BMS Reset) şart mı?", a: "Start-Stop sistemli modern araçlarda, yeni akünün kapasitesini ve şarj döngüsünü beyne tanıtmak şarttır. Aksi halde yeni akü tam performansla şarj edilmez." },
                            { q: "AGM yerine EFB takılabilir mi?", a: "Hayır. AGM kullanan araçlarda EFB takılması akü ömrünü %60 oranında azaltır. EFB kullanan araçlara ise performans artışı için AGM takılabilir." },
                            { q: "Neden fiyatlar aralık olarak veriliyor?", a: "Akü fiyatları; hurda akü iadesi, amper büyüklüğü ve araç tipine göre değişim gösterir. En net fiyatı şasi numaranızla birlikte WhatsApp üzerinden alabilirsiniz." }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 group cursor-default">
                                <h4 className="text-white font-black text-sm mb-4 flex justify-between items-center group-hover:text-brand-default transition-colors">
                                    {faq.q}
                                    <ChevronDown className="w-4 h-4 text-charcoal-500" />
                                </h4>
                                <p className="text-charcoal-400 text-xs leading-relaxed font-bold">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <StickyBatteryCTA />
            <Footer />
        </main >
    );
}
