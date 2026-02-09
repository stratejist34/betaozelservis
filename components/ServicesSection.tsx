'use client';

import { Wrench, Shield, Cog, Cpu, Zap, Snowflake, Phone, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
    {
        title: 'Periyodik Bakım',
        description: 'Aracınızın ömrünü uzatan, performansını koruyan uzman periyodik bakım hizmetleri.',
        icon: Wrench,
        href: '/periyodik-bakimlar',
        color: 'text-brand-default',
        badge: 'OEM STANDART',
        ctaText: 'Bakım Paketlerini Gör',
    },
    {
        title: 'Fren Sistemleri',
        description: 'Güvenliğiniz için disk, balata ve hidrolik sistemlerinin hassas kontrolü ve değişimi.',
        icon: Shield,
        href: '/fren-sistemi-bakimi',
        color: 'text-brand-default',
        badge: 'GÜVENLİK ODAKLI',
        ctaText: 'Güvenlik Kontrolü',
    },
    {
        title: 'Şanzıman Tamiri',
        description: 'S-Tronic, DSG ve tüm otomatik şanzımanlarda uzman arıza tespiti ve onarımı.',
        icon: Cog,
        href: '/otomatik-sanziman-tamiri',
        color: 'text-brand-default',
        badge: 'TEKNİK UZMANLIK',
        ctaText: 'Usta ile Görüş',
    },
    {
        title: 'Motor Revizyonu',
        description: 'Motor performansını fabrika ayarlarına döndüren kapsamlı yenileme işlemleri.',
        icon: Cpu,
        href: '/motor-revizyonu',
        color: 'text-brand-default',
        badge: 'HASSAS ONARIM',
        ctaText: 'Sorunu Netleştir',
    },
    {
        title: 'DSG ŞANZIMAN',
        description: 'DSG ve S-Tronic şanzımanlarda mekatronik ve kavrama üzerine uzmanlaşmış teknik servis.',
        icon: Zap,
        href: '/dsg-sanziman-tamiri',
        color: 'text-brand-default',
        badge: 'DİGİTAL DİAGNOZ',
        ctaText: 'Hata Kodunu Anla',
    },
    {
        title: 'Klima Servisi',
        description: 'Gaz dolumu, dezenfeksiyon ve klima kompresör tamiri ile konforlu sürüş.',
        icon: Snowflake,
        href: '/klima-gazi-dolumu-tuzla-gebze',
        color: 'text-brand-default',
        badge: 'KONFOR SERVİSİ',
        ctaText: 'Randevu Al',
    },
];

import { trackWhatsappClick } from '@/lib/analytics';
import { useServiceArea } from '@/context/ServiceAreaContext';

function ServiceCard({ service }: { service: any }) {
    const revealRef = useScrollReveal();
    const { verifyAndAction } = useServiceArea();

    const handleWhatsappClick = () => {
        verifyAndAction('whatsapp', () => {
            trackWhatsappClick({ source: 'services_section', page_type: 'home' });
            window.open(`https://wa.me/905332081400?text=${encodeURIComponent(`${service.title} hakkında randevu almak istiyorum.`)}`, '_blank');
        });
    };

    return (
        <div
            ref={revealRef as any}
            className="group relative p-8 bg-gradient-to-br from-charcoal-600 to-charcoal-700 border border-charcoal-500 rounded-[2.5rem] hover:to-charcoal-600 overflow-hidden flex flex-col reveal transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:border-charcoal-400"
        >
            {/* Dark Tech Grid Background - Minimal */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'var(--tech-grid-dark)', backgroundSize: '32px 32px' }} />

            <div className="flex justify-between items-start mb-10 relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-charcoal-900 border border-charcoal-700 transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-default/10 ${service.color}`}>
                    <service.icon className="w-7 h-7" />
                </div>
                <span className="text-[9px] font-black tracking-[0.2em] text-charcoal-400 border border-charcoal-800 px-3 py-1.5 rounded-full bg-charcoal-900 group-hover:text-brand-default group-hover:border-brand-default/30 transition-colors">
                    {service.badge}
                </span>
            </div>

            <h3 className="relative z-10 text-xl font-black text-charcoal-50 mb-4 transition-colors">
                {service.title}
            </h3>
            <p className="relative z-10 text-charcoal-300 leading-relaxed mb-8 flex-grow text-sm group-hover:text-charcoal-100 transition-colors">
                {service.description}
            </p>

            <div className="relative z-10 mt-auto flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <button
                        onClick={handleWhatsappClick}
                        className="bg-charcoal-800/50 hover:bg-brand-default border border-charcoal-500 hover:border-brand-default flex items-center justify-center gap-2 py-4 text-white rounded-xl text-sm font-black uppercase tracking-widest transition-all transform hover:scale-[1.02] active:scale-[0.98] w-full group/btn"
                    >
                        <MessageCircle className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                        {service.ctaText}
                    </button>
                </div>
                <Link
                    href={service.href}
                    className="flex items-center justify-center text-[10px] font-black text-charcoal-500 hover:text-charcoal-300 transition-colors uppercase tracking-[0.2em]"
                >
                    Teknik Detayları İncele
                    <svg className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
}

export default function ServicesSection() {
    return (
        <section className="py-32 bg-charcoal-600 relative z-10 overflow-hidden">
            {/* Top Boundary Line - Sınır Çizgisi */}
            <div className="absolute top-0 left-0 w-full h-px bg-charcoal-600" />

            {/* High-Performance Metal Glow - Fixed Shadow Hygiene */}
            <div className="absolute inset-x-0 -top-20 h-96 bg-[radial-gradient(circle_at_50%_0%,_rgba(191,194,201,0.15)_0%,_transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <h2 className="text-[10px] font-black text-brand-default tracking-[0.5em] uppercase decoration-brand-default/20 underline underline-offset-8 decoration-2">// PREMIUM HİZMETLERİMİZ</h2>
                    <p className="text-4xl sm:text-6xl font-black text-charcoal-50 tracking-tighter">
                        Yüksek Performans Onarım
                    </p>
                    <p className="text-lg text-charcoal-100 leading-relaxed font-bold">
                        Modern ekipmanlarımız ve 20 yıllık uzmanlığımızla, aracınızın genetik koduna sadık kalarak hizmet veriyoruz.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard key={service.title} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
