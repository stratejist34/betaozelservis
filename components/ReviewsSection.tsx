'use client';

import { Star, Quote } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const reviews = [
    {
        name: 'Yusuf Yenil',
        role: 'Google Yorumu',
        date: '2 hafta önce',
        rating: 5,
        content: 'İçmeler tuzla da bulunan oto sanayideki beta otomativ Murat usta Arabamın mekatronik arızanın giderdi. Gönül rahatlığı ile herkese tavsiye ediyorum.',
        isNew: true
    },
    {
        name: 'Ömer Selçok',
        role: '4 Yorum',
        date: '2 ay önce',
        rating: 5,
        content: 'Mercedes A180, Audi A3 ve Volvo XC40 araçlarım için farklı zamanlarda hizmet aldım. Her seferinde son derece memnun kaldım. İşlerini çok özenli yapıyorlar, hem teknik olarak çok iyi hem de güvenilir insanlar.'
    },
    {
        name: 'Dr Haluk Göğüş',
        role: 'Yerel Rehber',
        date: '3 ay önce',
        rating: 5,
        content: 'Aracım yolda kalmıştı. İnternetten servis aradım ve Beta Servis\'te karar kıldım. Turbo hortumu yarılmıştı, Osman ve Murat usta 15 dakikada geldiler. Dürüst insanlar oldukça geleceğe umutla bakmaya ve insanlara güvenmeye devam.'
    },
    {
        name: 'Taha İLEK',
        role: 'Yerel Rehber',
        date: '5 ay önce',
        rating: 5,
        content: 'Aracımın bakım-onarımı için randevulaşıp götürüyorum. İlgili ve profesyonel bir servis. Teşekkür ederim, hayırlı işleriniz olsun.'
    },
    {
        name: 'Engin Uza',
        role: 'Yerel Rehber',
        date: '1 yıl önce',
        rating: 5,
        content: 'Motor açılması gerekiyor denilen birçok tamirci’den sonra şans eseri tanıştığımız Osman Usta, cüzi bir ücret ile kablo sensör hatası ile konuyu çözdü. Düzgün ve dürüst bir esnaf. Teşekkürler.'
    },
    {
        name: 'Atakan Öncel',
        role: '3 Yorum',
        date: '4 yıl önce',
        rating: 5,
        content: 'Her bakımdan gözünüz kapalı aracınızı teslim edeceğiniz, güven veren, profesyonel bir Servis, 7 yıldır müşterisi olmaktan gurur duyuyorum.'
    }
];

export default function ReviewsSection() {
    const revealRef = useScrollReveal();

    return (
        // DEĞİŞİKLİK 1: Arka plan 'bg-charcoal-950' (Siyah) yerine Hizmetler bölümünle uyumlu Antrasit yapıldı.
        // Eğer 'bg-zinc-900' tonu hizmetler bölümünden farklıysa, oradaki class'ı buraya kopyala.
        <section className="py-32 bg-charcoal-600 relative overflow-hidden border-t border-white/5">

            {/* Top Boundary Line - Technical Divider */}
            <div className="absolute top-0 left-0 w-full h-px bg-white/5" />

            {/* Arka plan gradiyeni biraz kısıldı ki gri zemin baskın olsun */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(191,194,201,0.08)_0%,_transparent_60%)]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header with Social Proof */}
                <div ref={revealRef as any} className="text-center mb-20 reveal">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-default/10 border border-brand-default/20 mb-8 font-mono">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-brand-default text-brand-default" />
                            ))}
                        </div>
                        <span className="text-[10px] font-bold text-charcoal-300 tracking-[0.2em] uppercase">50+ Yorum // 4.5 Yıldız</span>
                    </div>

                    <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tighter mb-6 uppercase">
                        Gerçek <span className="text-brand-default">Müşteri</span> Deneyimleri
                    </h2>
                    <span className="block text-charcoal-400 text-xs font-bold uppercase tracking-[0.15em] mb-6 max-w-lg mx-auto leading-relaxed opacity-80">
                        Bu yorumlar, ölçüm, raporlama ve test süreci tamamlanan servis deneyimlerinden alınmıştır.
                    </span>

                </div>

                {/* Reviews Grid / Mobile Slider */}
                <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 lg:gap-8 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory scrollbar-hide pb-8 lg:pb-0">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            // TASARIM NOTU: Kullanıcı tercihi olan koyu kart stiline dönüldü, performans için blur optimize edildi.
                            className="flex-shrink-0 w-[85vw] md:w-full lg:w-auto snap-center group relative p-8 rounded-[2.5rem] bg-black/50 backdrop-blur-[6px] sm:backdrop-blur-md border border-white/5 shadow-2xl hover:bg-black/60 hover:border-brand-default/30 transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden"
                        >
                            <Quote className="absolute top-6 right-8 w-12 h-12 text-white/5 group-hover:text-brand-default/10 transition-colors" />

                            {/* Card Glow Effect - Optimized for Mobile Performance */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-default/10 blur-[40px] sm:blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="flex items-center gap-4 mb-6">
                                {/* Avatar Kutusu da koyu zemine uyumlu hale getirildi */}
                                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white font-black text-lg border border-white/10 group-hover:border-brand-default/20 transition-all duration-500">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-white font-bold text-base flex items-center gap-2">
                                        {review.name}
                                        {review.isNew && (
                                            <span className="text-[8px] bg-brand-default px-2 py-0.5 rounded text-white uppercase font-black">YENİ</span>
                                        )}
                                    </div>
                                    <div className="text-charcoal-400 text-[10px] font-bold uppercase tracking-wider">{review.role} • {review.date}</div>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-brand-default text-brand-default" />
                                ))}
                            </div>

                            <p className="text-charcoal-200 leading-relaxed text-sm flex-grow relative z-10">
                                "{review.content}"
                            </p>

                            {/* Technical Accent Line */}
                            <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-brand-default/40 transition-all duration-700" />
                        </div>
                    ))}
                </div>

                {/* Google Branding - Button da koyu zemine uyumlu hale getirildi */}
                <div className="mt-20 text-center">
                    <a
                        href="https://www.google.com/search?q=beta+özel+servis+tuzla#lrd=0x14cad9387413643d:0xb84b80b2d6a5c18e,1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-4 bg-black/30 hover:bg-brand-default/10 border border-white/10 px-8 py-4 rounded-full transition-all duration-500 shadow-xl backdrop-blur-sm"
                    >
                        <span className="text-[10px] font-black text-charcoal-400 group-hover:text-white tracking-[0.3em] uppercase">Tüm Google Yorumlarını Görüntüle</span>
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white text-xs group-hover:bg-brand-default group-hover:scale-110 transition-all duration-500">↗</div>
                    </a>
                </div>
            </div>
        </section>
    );
}