import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import ServicesSection from '@/components/ServicesSection';
import MaintenancePackages from '@/components/MaintenancePackages';


export const metadata = {
    title: 'Hizmetlerimiz | Beta Özel Servis',
    description: 'Audi, Volkswagen, BMW ve Mercedes araçlarınız için sunduğumuz tüm profesyonel servis ve bakım hizmetleri.',
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-charcoal-900 relative overflow-hidden text-slate-100 font-sans">
            <Header />

            {/* Premium Metal Glow Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(191,194,201,0.03)_0%,_transparent_50%)] pointer-events-none" />

            {/* 1) MEVCUT HERO BÖLÜMÜ */}
            <section className="pt-24 sm:pt-40 pb-12 text-center relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-[10px] font-black text-brand-default tracking-[0.5em] uppercase mb-4 opacity-80">// TEKNİK MERKEZ</h2>
                    <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white mb-6 tracking-tighter uppercase italic drop-shadow-2xl leading-none">
                        Hizmet <span className="text-brand-default font-black">Yelpazemiz</span>
                    </h1>
                    <p className="text-sm sm:text-lg text-charcoal-200 max-w-2xl mx-auto leading-relaxed font-medium opacity-70">
                        Şeffaf süreç, teknik uzmanlık ve garantili çözümler.
                    </p>
                </div>
            </section>

            {/* 2) KARAR EKRANI: "Periyodik Bakım Paketleri" - Reusable Component */}
            <MaintenancePackages />

            {/* 6) GEÇİŞ BÖLÜMÜ (Divider + Context) */}
            <div className="relative bg-charcoal-900 border-t-2 border-charcoal-600 py-12">
                <div className="relative z-10 flex items-center justify-center gap-8">
                    <div className="h-[2px] w-12 sm:w-24 bg-charcoal-600"></div>
                    <span className="text-charcoal-300 font-black text-[10px] sm:text-[11px] tracking-[0.7em] uppercase whitespace-nowrap">
                        Teknik Servis Hizmetlerimiz
                    </span>
                    <div className="h-[2px] w-12 sm:w-24 bg-charcoal-600"></div>
                </div>
            </div>

            {/* 7) HİZMETLERİMİZ BÖLÜMÜ - Shared Component for consistency */}
            <ServicesSection />

            <Footer />
        </main>
    );
}
