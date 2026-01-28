'use client';

import Link from 'next/link';
import { Phone, Mail, Facebook, Instagram, Clock, MapPin } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-charcoal-900 text-charcoal-200 relative overflow-hidden noise-overlay">
            {/* Top Border Accent - Sınır Çizgisi */}
            <div className="absolute top-0 left-0 w-full h-px bg-charcoal-600" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                {/* Tertiary CTA - Randevu Talebi Oluştur */}
                <div className="mb-20 text-center">
                    <a
                        href="https://wa.me/905332081400?text=Randevu talebi oluşturmak istiyorum."
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                            // @ts-ignore
                            if (typeof gtag !== 'undefined') {
                                // @ts-ignore
                                gtag('event', 'footer_randevu_talebi_tiklandi');
                            }
                        }}
                        className="inline-flex items-center gap-4 bg-charcoal-800/40 hover:bg-brand-default border border-charcoal-600 hover:border-brand-default px-12 py-5 rounded-2xl text-sm font-black uppercase tracking-[0.3em] text-white transition-all group scale-95 hover:scale-100"
                    >
                        Randevu Talebi Oluştur
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block group">
                            <span className="text-2xl font-black tracking-tighter text-charcoal-50 group-hover:text-white transition-colors">
                                BETA<span className="text-charcoal-400 group-hover:text-brand-default transition-colors">ÖZELSERVİS</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-charcoal-300 font-medium">
                            Tuzla'da 15 yılı aşkın deneyimimizle Audi, Volkswagen, BMW ve Mercedes araçlarınız için profesyonel, garantili ve güvenilir özel servis hizmeti sunuyoruz.
                        </p>
                        <div className="flex gap-5">
                            <a href="https://facebook.com/betaozelservis" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-brand-default text-charcoal-100 hover:text-white transition-all duration-300" aria-label="Facebook">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://instagram.com/betaozelservis" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-brand-default text-charcoal-100 hover:text-white transition-all duration-300" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-charcoal-100 text-xs font-black uppercase tracking-[0.3em] mb-8">// Kurumsal</h3>
                        <ul className="space-y-4">
                            <li><Link href="/hakkimizda" className="text-sm font-bold hover:text-brand-default transition-colors flex items-center gap-2 group"><div className="w-1 h-3 bg-brand-default/0 group-hover:bg-brand-default transition-all" />Hakkımızda</Link></li>
                            <li><Link href="/hizmetler" className="text-sm font-bold hover:text-brand-default transition-colors flex items-center gap-2 group"><div className="w-1 h-3 bg-brand-default/0 group-hover:bg-brand-default transition-all" />Hizmetlerimiz</Link></li>
                            <li><Link href="/blog" className="text-sm font-bold hover:text-brand-default transition-colors flex items-center gap-2 group"><div className="w-1 h-3 bg-brand-default/0 group-hover:bg-brand-default transition-all" />Blog</Link></li>
                            <li><Link href="/iletisim" className="text-sm font-bold hover:text-brand-default transition-colors flex items-center gap-2 group"><div className="w-1 h-3 bg-brand-default/0 group-hover:bg-brand-default transition-all" />İletişim</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-charcoal-100 text-xs font-black uppercase tracking-[0.3em] mb-8">// Popüler Hizmetler</h3>
                        <ul className="space-y-4">
                            <li><Link href="/periyodik-bakim-fiyatlari-2025" className="text-sm font-bold hover:text-brand-default transition-colors">Periyodik Bakım</Link></li>
                            <li><Link href="/dsg-mekatronik-arizasi-fiyati-2025" className="text-sm font-bold hover:text-brand-default transition-colors">DSG Mekatronik Tamiri</Link></li>
                            <li><Link href="/s-tronic-sanziman-tamiri" className="text-sm font-bold hover:text-brand-default transition-colors">S-Tronic Şanzıman Tamiri</Link></li>
                            <li><Link href="/motor-tamiri" className="text-sm font-bold hover:text-brand-default transition-colors">Motor Revizyonu</Link></li>
                            <li><Link href="/bmw-sanziman-tamiri" className="text-sm font-bold hover:text-brand-default transition-colors">BMW Şanzıman Servisi</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-charcoal-100 text-xs font-black uppercase tracking-[0.3em] mb-8">// Bize Ulaşın</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-charcoal-800 flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-charcoal-200" />
                                </div>
                                <span className="text-sm font-medium leading-relaxed text-charcoal-200">
                                    Tuzla Oto San. Sit. B/1 Blok No:105, İçmeler, Tuzla/İstanbul
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-charcoal-800 flex items-center justify-center shrink-0">
                                    <Phone className="w-5 h-5 text-brand-default" />
                                </div>
                                <div className="text-sm">
                                    <p className="text-[10px] uppercase font-black text-charcoal-500 tracking-widest">Acil Yol Yardım</p>
                                    <a href="tel:+905332081400" className="text-charcoal-50 font-black text-lg hover:text-brand-default transition-all">0533 208 14 00</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-charcoal-800 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-charcoal-200" />
                                </div>
                                <a href="mailto:betaozelservis@gmail.com" className="text-sm font-bold hover:text-brand-default transition-colors text-charcoal-200">betaozelservis@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-4 pt-2">
                                <div className="w-10 h-10 rounded-xl bg-charcoal-800 flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5 text-charcoal-200" />
                                </div>
                                <div className="text-[11px] font-bold uppercase tracking-wider space-y-1">
                                    <p className="text-charcoal-100">Pzt-Cuma: 07:50 - 20:30</p>
                                    <p className="text-charcoal-100">Cumartesi: 08:30 - 19:00</p>
                                    <p className="text-brand-default font-black">Pazar: Kapalı</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-charcoal-800 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-charcoal-600">
                    <p>© {currentYear} Beta Özel Servis. Tüm hakları saklıdır.</p>
                    <p>Design by Emrah Gümüşsoy</p>
                </div>
            </div>
        </footer>
    );
}
