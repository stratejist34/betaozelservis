'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { trackPhoneClick, trackWhatsappClick } from '@/lib/analytics';

import { useServiceArea } from '@/context/ServiceAreaContext';

export default function MidContentCTA() {
    const { verifyAndAction } = useServiceArea();

    const handlePhoneClick = () => {
        verifyAndAction(() => {
            trackPhoneClick({ source: 'blog_mid', page_type: 'blog' });
            window.location.href = 'tel:+905332081400';
        });
    };

    const handleWhatsappClick = () => {
        verifyAndAction(() => {
            trackWhatsappClick({ source: 'blog_mid', page_type: 'blog' });
            window.open('https://wa.me/905332081400?text=Merhaba,%20blog%20yazınızı%20okudum,%20fiyat%20almak%20istiyorum.', '_blank');
        });
    };

    return (
        <div className="my-10 p-8 rounded-3xl bg-charcoal-900 border border-white/10 shadow-2xl relative overflow-hidden group">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-default/10 to-transparent opacity-50" />
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-default/20 blur-[50px] rounded-full group-hover:bg-brand-default/30 transition-colors duration-700" />

            <div className="relative z-10 flex flex-col items-center text-center">
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-2">
                    Aracınıza Özel <span className="text-brand-default">Net Fiyat</span> İster misiniz?
                </h3>
                <p className="text-charcoal-300 text-sm font-bold mb-8 max-w-md">
                    Araç şasi numaranızla kontrol edip, %100 uyumlu parça ve işçilik garantili fiyatı hemen verelim.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <button
                        onClick={handlePhoneClick}
                        className="flex-1 bg-[#C4122F] hover:bg-[#a50f27] text-white px-8 py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-red-900/20 flex items-center justify-center gap-3"
                    >
                        <Phone className="w-5 h-5 fill-current" />
                        HEMEN ARA
                    </button>
                    <button
                        onClick={handleWhatsappClick}
                        className="flex-1 bg-[#0EA76B] hover:bg-[#0c8e5b] text-white px-8 py-4 rounded-xl text-sm font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-3"
                    >
                        <MessageCircle className="w-5 h-5" />
                        WHATSAPP
                    </button>
                </div>

                <p className="mt-4 text-[10px] text-charcoal-400 font-bold uppercase tracking-widest opacity-60">
                    Kısa bir görüşme ile netleştirelim.
                </p>
            </div>
        </div>
    );
}
