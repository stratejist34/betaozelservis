import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { CheckCircle2, Award, Users, ShieldCheck } from 'lucide-react';

export const metadata = {
    title: 'Hakkımızda | Beta Özel Servis',
    description: '2006 yılından beri Tuzla\'da Audi, Volkswagen, BMW ve Mercedes araçlarınız için uzman servis hizmeti sunuyoruz.',
    alternates: {
        canonical: 'https://betaozelservis.com/hakkimizda/',
    },
    openGraph: {
        title: 'Hakkımızda | Beta Özel Servis',
        description: '2006 yılından beri Tuzla\'da Audi, Volkswagen, BMW ve Mercedes araçlarınız için uzman servis hizmeti sunuyoruz.',
        url: 'https://betaozelservis.com/hakkimizda/',
        type: 'website',
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
            <Header />

            <section className="relative h-[300px] sm:h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/wp-content/uploads/2024/12/Bmw-Audi-Mercedes-Volkswagen-Servisi-Beta-Ozel-Servis-0-1.jpg"
                        alt="Beta Özel Servis Atölye"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                </div>
                <div className="relative z-10 text-center px-4 pt-16 sm:pt-20">
                    <h1 className="text-4xl sm:text-6xl font-black text-white mb-4 uppercase tracking-tighter italic">
                        Değerlerİmİz <span className="text-glow">& Vizyonumuz</span>
                    </h1>
                </div>
            </section>

            <section className="py-12 sm:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
                                2006'dan Beri <span className="text-primary-600">Uzman Ellerdesiniz</span>
                            </h2>
                            <div className="prose prose-lg text-gray-600 max-w-none">
                                <p>
                                    Beta Özel Servis, 2006 yılında Tuzla İçmeler Oto Sanayi Sitesi'nde kurulmuştur. Kurulduğumuz günden bu yana, dünya devi otomobil markaları olan Audi, Volkswagen, BMW ve Mercedes-Benz modellerinde uzmanlaşmış kadromuzla hizmet veriyoruz.
                                </p>
                                <p>
                                    Amacımız, yetkili servis standartlarındaki hizmet kalitesini, daha şeffaf ve ekonomik çözümlerle araç sahiplerine sunmaktır. 15 yılı aşkın tecrübemizle, her araca kendi aracımız gibi özen gösteriyor, modern arıza tespit cihazlarımızla nokta atışı çözümler üretiyoruz.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                                {[
                                    'Orijinal Parça Garantisi',
                                    'Uzman Sertifikalı Teknisyenler',
                                    'Şeffaf Fiyat Politikası',
                                    'Modern Diagnostik Ekipmanlar',
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-secondary-600 shrink-0" />
                                        <span className="font-bold text-gray-900">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-primary-600/10 rounded-3xl -rotate-2" />
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/wp-content/uploads/2024/12/Bmw-Audi-Mercedes-Volkswagen-Servisi-Beta-Ozel-Servis-15-1024x768.jpg"
                                    alt="Beta Özel Servis Ekip"
                                    width={800}
                                    height={600}
                                    className="object-cover"
                                />
                            </div>

                            {/* Badges Overlay */}
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl hidden sm:block border border-gray-100">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary-900 text-white rounded-2xl flex items-center justify-center">
                                        <Award className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black text-gray-900">15+ Yıl</div>
                                        <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Sektör Tecrübesi</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Grid */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-primary-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Müşteri Odaklılık</h3>
                            <p className="text-gray-600">Her müşterimiz bizim için özeldir. Süreç boyunca şeffaf iletişim kurarak güven inşa ediyoruz.</p>
                        </div>
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mx-auto mb-6">
                                <ShieldCheck className="w-8 h-8 text-primary-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Kalite Garantisi</h3>
                            <p className="text-gray-600">Yaptığımız tüm işlemlerde ve kullandığımız yedek parçalarda servis garantisi sunuyoruz.</p>
                        </div>
                        <div className="text-center space-y-4">
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center mx-auto mb-6">
                                <Award className="w-8 h-8 text-primary-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Teknik Uzmanlık</h3>
                            <p className="text-gray-600">Alman grubu araçların karmaşık teknolojileri konusunda sürekli eğitim alan uzman bir kadroya sahibiz.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
