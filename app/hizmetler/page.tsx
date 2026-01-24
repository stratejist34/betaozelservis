import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { Wrench, Gauge, Shield, Zap, CircleDot, Thermometer, Hammer, Search, Activity } from 'lucide-react';

const allServices = [
    {
        title: 'Periyodik Bakım',
        description: 'Yağ değişimi, filtre yenileme ve kapsamlı araç kontrolü.',
        icon: Gauge,
        href: '/periyodik-bakim-fiyatlari-2025',
        color: 'text-brand-default',
    },
    {
        title: 'Şanzıman Tamiri',
        description: 'S-Tronic, DSG ve Otomatik şanzıman revizyonu.',
        icon: CircleDot,
        href: '/s-tronic-sanziman-tamiri',
        color: 'text-brand-default',
    },
    {
        title: 'Fren Servisi',
        description: 'Disk ve balata değişimi, fren hidroliği kontrolü.',
        icon: Shield,
        href: '/fren-sistemi-bakimi',
        color: 'text-brand-default',
    },
    {
        title: 'Motor Revizyonu',
        description: 'Motor yenileme, rektefiye ve performans iyileştirme.',
        icon: Wrench,
        href: '/motor-tamiri',
        color: 'text-brand-default',
    },
    {
        title: 'Elektrik & Elektronik',
        description: 'Beyin tamiri, yazılım güncelleme ve elektrik arızaları.',
        icon: Zap,
        href: '/oto-elektrik',
        color: 'text-brand-default',
    },
    {
        title: 'Klima Servisi',
        description: 'Klima gaz dolumu ve dezenfeksiyon hizmetleri.',
        icon: Thermometer,
        href: '/klima-gazi-dolumu',
        color: 'text-brand-default',
    },
    {
        title: 'Arıza Tespit',
        description: 'Bilgisayarlı diagnostik cihazlar ile nokta atışı tespit.',
        icon: Search,
        href: '/bilgisayarli-ariza-tespiti',
        color: 'text-brand-default',
    },
    {
        title: 'Mekanik Onarım',
        description: 'Alt takım, direksiyon kutusu ve süspansiyon tamiri.',
        icon: Hammer,
        href: '/mekanik-onarim',
        color: 'text-brand-default',
    },
    {
        title: 'PDK Şanzıman',
        description: 'Porsche araçlar için özel PDK şanzıman servisi.',
        icon: Activity,
        href: '/porsche-pdk-sanziman-servisi',
        color: 'text-brand-default',
    },
];

export const metadata = {
    title: 'Hizmetlerimiz | Beta Özel Servis',
    description: 'Audi, Volkswagen, BMW ve Mercedes araçlarınız için sunduğumuz tüm profesyonel servis ve bakım hizmetleri.',
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-charcoal-600 relative overflow-hidden">
            <Header />

            {/* Premium Metal Glow Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(191,194,201,0.1)_0%,_transparent_50%)] pointer-events-none" />

            <section className="pt-24 sm:pt-32 pb-10 text-center relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-[9px] font-black text-brand-default tracking-[0.4em] uppercase mb-3">// PROFESYONEL ÖZEL SERVİS</h2>
                    <h1 className="text-3xl sm:text-5xl font-black text-white mb-4 tracking-tighter uppercase italic">
                        Hizmet <span className="text-brand-default font-black">Yelpazemiz</span>
                    </h1>
                    <p className="text-xs sm:text-sm text-charcoal-300 max-w-xl mx-auto leading-relaxed font-medium opacity-60">
                        Tuzla’da 20 yıllık teknik tecrübemizle çözüm üretiyoruz.
                    </p>
                </div>
            </section>

            <section className="pb-24 pt-8 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allServices.map((service, idx) => {
                            const isCritical = ['Şanzıman Tamiri', 'Elektrik & Elektronik', 'Motor Revizyonu'].includes(service.title);
                            return (
                                <Link
                                    key={service.title}
                                    href={service.href}
                                    className={`group p-10 backdrop-blur-md border rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col relative overflow-hidden ${isCritical
                                        ? 'bg-black/60 border-brand-default/20'
                                        : 'bg-black/50 border-white/5'
                                        } hover:bg-black/70 hover:border-brand-default/30`}
                                >
                                    {/* Technical Accent - Minimal Glow */}
                                    <div className={`absolute -top-24 -right-24 w-48 h-48 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${isCritical ? 'bg-brand-default/20' : 'bg-brand-default/5'
                                        }`} />

                                    <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 ${isCritical ? 'bg-brand-default/10 border-brand-default/20' : 'bg-white/5 border border-white/10'
                                        }`}>
                                        {/* Critical Service Halo */}
                                        {isCritical && (
                                            <div className="absolute inset-0 bg-brand-default/20 blur-xl rounded-full animate-pulse" />
                                        )}
                                        <service.icon className={`w-9 h-9 relative z-10 ${service.color}`} />
                                    </div>

                                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-brand-default transition-colors uppercase tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-charcoal-200 text-base leading-relaxed mb-8 flex-grow">
                                        {service.description}
                                    </p>
                                    <div className={`flex items-center text-[10px] font-black uppercase tracking-[0.2em] mt-auto transition-all ${idx < 2
                                        ? 'text-white border-b border-brand-default/30 pb-1'
                                        : 'text-charcoal-400 group-hover:text-white'
                                        }`}>
                                        Hizmet Detayını İncele
                                        <svg className="w-3 h-3 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
