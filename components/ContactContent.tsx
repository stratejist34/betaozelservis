'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, MessageCircle, MapPin, Clock, Navigation } from 'lucide-react';
import { trackPhoneClick, trackWhatsappClick } from '@/lib/analytics';

import { useServiceArea } from '@/context/ServiceAreaContext';

export default function ContactContent() {
    const { verifyAndAction } = useServiceArea();

    const handleServiceCall = () => {
        verifyAndAction(() => {
            trackPhoneClick({ source: 'contact', page_type: 'contact' });
            window.location.href = 'tel:+905332081400';
        });
    };

    const handleLandlineCall = () => {
        verifyAndAction(() => {
            trackPhoneClick({ source: 'contact', page_type: 'contact' });
            window.location.href = 'tel:+902163922259';
        });
    };

    const handleWhatsapp = () => {
        verifyAndAction(() => {
            trackWhatsappClick({ source: 'contact', page_type: 'contact' });
            window.open('https://wa.me/905332081400', '_blank');
        });
    };

    return (
        <main className="min-h-screen flex flex-col bg-[#F5F6F7]">
            <Header />

            {/* Premium Hero Section - Perfect Integration */}
            <section className="bg-charcoal-900 pt-20 sm:pt-24 pb-6 text-center relative overflow-hidden text-white/90">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(191,194,201,0.04)_0%,_transparent_70%)] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <nav className="flex justify-center items-center gap-2 text-[8px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-2">
                        MERKEZ SERVİS
                    </nav>

                    <h1 className="text-3xl sm:text-5xl font-black text-white mb-0 uppercase tracking-tighter italic leading-none">
                        Bize <span className="text-glow">Ulaşın</span>
                    </h1>
                </div>
            </section>

            <section className="py-6 sm:py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">

                        {/* Horizontal Cards - Compact */}
                        <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm relative group overflow-hidden">
                                <button onClick={handleServiceCall} className="absolute inset-0 z-10 w-full h-full cursor-pointer" aria-label="Ara" />
                                <div className="w-10 h-10 bg-red-500/5 rounded-xl flex items-center justify-center text-red-500 shrink-0 pointer-events-none">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="pointer-events-none">
                                    <h3 className="text-[8px] font-black text-red-600 uppercase tracking-widest mb-0.5">SERVİS & ACİL</h3>
                                    <span className="text-lg font-black text-gray-900 block leading-none">
                                        0533 208 14 00
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm relative group overflow-hidden">
                                <button onClick={handleLandlineCall} className="absolute inset-0 z-10 w-full h-full cursor-pointer" aria-label="Ara" />
                                <div className="w-10 h-10 bg-brand-default/5 rounded-xl flex items-center justify-center text-brand-default shrink-0 pointer-events-none">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div className="pointer-events-none">
                                    <h3 className="text-[8px] font-black text-brand-default uppercase tracking-widest mb-0.5">RANDEVU & BİLGİ</h3>
                                    <span className="text-lg font-black text-gray-900 block leading-none">
                                        0216 392 22 59
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-5 bg-charcoal-900 rounded-2xl shadow-lg overflow-hidden relative group">
                                <button onClick={handleWhatsapp} className="absolute inset-0 z-20 w-full h-full cursor-pointer" aria-label="WhatsApp" />
                                <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/10 blur-xl pointer-events-none" />
                                <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 shrink-0 relative z-10 pointer-events-none">
                                    <MessageCircle className="w-5 h-5" />
                                </div>
                                <div className="relative z-10 pointer-events-none">
                                    <h3 className="text-[8px] font-black text-emerald-500 uppercase tracking-widest mb-0.5">WHATSAPP</h3>
                                    <span className="text-lg font-black text-white block leading-none">
                                        0533 208 14 00
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Map Area - Tight */}
                        <div className="lg:col-span-8">
                            <div className="h-[300px] sm:h-[450px] rounded-3xl overflow-hidden border-4 border-white shadow-lg relative group">
                                <iframe
                                    src="https://maps.google.com/maps?q=Beta%20%C3%B6zel%20servis&t=m&z=17&output=embed&iwloc=near"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Beta Özel Servis Harita"
                                    className="grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/90 backdrop-blur-md rounded-xl border border-white/20 shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                                    <a
                                        href="https://maps.google.com/maps?q=Beta%20%C3%B6zel%20servis"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between text-brand-default font-black uppercase text-[9px] tracking-widest"
                                    >
                                        NAVİGASYONU BAŞLAT <Navigation className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Column - Tightened and Aligned */}
                        <div className="lg:col-span-4 flex flex-col gap-3">
                            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm flex-1 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-[11px] font-black text-gray-900 uppercase tracking-widest">SERVİS ADRESİ</h3>
                                </div>
                                <p className="text-gray-500 font-bold text-sm leading-relaxed mb-8">
                                    Tuzla Oto Sanayi Sitesi B/1 Blok No:105, İçmeler, Tuzla / İstanbul
                                </p>
                                <div className="flex gap-3">
                                    <a
                                        href="https://maps.google.com/maps?q=Beta%20%C3%B6zel%20servis"
                                        className="flex-grow flex items-center justify-center gap-2 py-3 bg-charcoal-900 text-white font-bold rounded-xl text-[9px] uppercase tracking-widest hover:bg-black transition-all"
                                    >
                                        YOL TARİFİ
                                    </a>
                                    <a
                                        href="mailto:betaozelservis@gmail.com"
                                        className="flex-grow flex items-center justify-center gap-2 py-3 bg-gray-50 text-gray-900 font-bold rounded-xl text-[9px] uppercase tracking-widest hover:bg-gray-100 transition-all"
                                    >
                                        E-POSTA
                                    </a>
                                </div>
                            </div>

                            <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm flex-1 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-[11px] font-black text-gray-900 uppercase tracking-widest">MESAİ SAATLERİ</h3>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-[12px] font-bold">
                                        <span className="text-gray-400 uppercase tracking-widest">Hafta İçi</span>
                                        <span className="text-gray-900">07:50 - 20:30</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[12px] font-bold">
                                        <span className="text-gray-400 uppercase tracking-widest">Cumartesi</span>
                                        <span className="text-gray-900">08:30 - 19:00</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[12px] font-bold">
                                        <span className="text-red-500 uppercase tracking-widest font-black">Pazar</span>
                                        <span className="text-red-500 font-black">KAPALI</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
