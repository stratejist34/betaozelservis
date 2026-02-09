'use client';

import { useState, useEffect } from 'react';
import { Phone, X, MapPin } from 'lucide-react';
import { trackPhoneClick } from '@/lib/analytics';

interface ServiceAreaSheetProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

export default function ServiceAreaSheet({ isOpen, onClose, onConfirm }: ServiceAreaSheetProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300); // Wait for animation
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return (
        <div className={`fixed inset-0 z-[10000] flex items-end justify-center sm:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Sheet */}
            <div
                className={`relative w-full bg-[#111214] rounded-t-[24px] p-6 pb-10 shadow-2xl transition-transform duration-300 ease-out transform ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
            >
                {/* Handle Bar */}
                <div className="w-12 h-1 bg-white/10 rounded-full mx-auto mb-6" />

                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="p-6 pt-0">
                    <div className="flex flex-col items-center text-center gap-4">
                        <div className="w-16 h-16 bg-brand-default/10 rounded-full flex items-center justify-center mb-2">
                            <MapPin className="w-8 h-8 text-brand-default" />
                        </div>

                        <h3 className="text-xl font-bold text-white">
                            Önemli Bilgilendirme
                        </h3>

                        <div className="text-charcoal-200 text-[15px] leading-relaxed max-w-[290px] space-y-3">
                            <p>
                                Hizmet bölgemiz sadece <span className="font-bold text-white">Tuzla - Gebze - Pendik</span> ve çevresidir.
                            </p>
                            <p className="border border-white/10 bg-white/5 rounded-lg p-2.5">
                                İşletmemiz markadan bağımsız
                                <span className="block font-black text-brand-default text-lg tracking-wide mt-0.5">ÖZEL SERVİSTİR</span>
                                <span className="block text-[11px] text-white/50 font-medium">(Yetkili Servis Değildir)</span>
                            </p>
                        </div>

                        <div className="w-full flex flex-col gap-3 mt-4">
                            <button
                                onClick={() => {
                                    onConfirm();
                                    trackPhoneClick('bottom_sheet_confirm');
                                }}
                                className="w-full h-14 bg-brand-default hover:bg-brand-hover text-white rounded-xl font-bold text-[15px] shadow-lg shadow-brand-default/20 active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
                            >
                                <Phone className="w-5 h-5 fill-current" />
                                Bölgedeyim, Hemen Ara
                            </button>

                            <button
                                onClick={onClose}
                                className="w-full h-12 text-gray-400 font-medium text-sm hover:text-white transition-colors"
                            >
                                Vazgeç
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
