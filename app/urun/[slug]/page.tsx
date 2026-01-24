import { getProductBySlug, getProducts } from '@/lib/data';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScientificCTA from '@/components/ScientificCTA';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { MessageCircle, CheckCircle2, ShieldCheck, Truck, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const products = await getProducts();
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);
    if (!product) return {};

    return {
        title: `${product.name} | Beta Özel Servis`,
        description: product.description || `${product.name} özellikleri ve servis detayları.`,
        alternates: {
            canonical: `https://betaozelservis.com/urun/${slug}/`,
        },
        openGraph: {
            title: product.name,
            description: product.description,
            url: `https://betaozelservis.com/urun/${slug}/`,
            type: 'website',
        },
    };
}

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    const product = await getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen flex flex-col pt-16 sm:pt-20 bg-[#F5F6F7]">
            <Header isLightPage={true} />

            <div className="flex-grow py-8 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb / Back Link */}
                    <Link
                        href="/akuler"
                        className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-brand-default transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Aküler Sayfasına Dön
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                        {/* Product Image Gallery */}
                        <div className="relative aspect-square bg-white rounded-[2.5rem] border border-gray-100 shadow-premium overflow-hidden group p-12">
                            <Image
                                src={(product.images && product.images[0]) || '/wp-content/uploads/2024/12/Varta-N60-60-AH-EFB-300x300.jpg'}
                                alt={product.name}
                                fill
                                className="object-contain p-12 group-hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>

                        {/* Product Info */}
                        <div className="flex flex-col">
                            <div className="mb-8">
                                <span className="inline-block bg-brand-default/10 text-brand-default text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-[0.2em] mb-4 border border-brand-default/20">
                                    {product.brand} Profesyonel Serİ
                                </span>
                                <h1 className="text-3xl sm:text-5xl font-black text-gray-900 leading-tight uppercase tracking-tight italic mb-6">
                                    {product.name}
                                </h1>
                                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                                    {product.description}
                                </p>
                            </div>

                            {/* Price / Info Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                <div className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm">
                                    <span className="block text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Başlangıç Fiyatı</span>
                                    <span className="text-3xl font-black text-gray-900 tracking-tighter">
                                        {product.price ? `${new Intl.NumberFormat('tr-TR').format(Number(product.price))} ₺` : 'Teklif Alın'}
                                    </span>
                                </div>
                                <div className="p-6 bg-emerald-500/5 rounded-3xl border border-emerald-500/10 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <span className="block text-xs font-black text-emerald-900 uppercase">Stokta Var</span>
                                        <span className="block text-[10px] font-bold text-emerald-700">Aynı Gün Montaj</span>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="space-y-4 mb-12">
                                {[
                                    { icon: ShieldCheck, text: "2 YIL RESMİ VARTA GARANTİSİ" },
                                    { icon: Truck, text: "ÜCRETSİZ YERİNDE MONTAJ DESTEĞİ" },
                                    { icon: CheckCircle2, text: "BMS / OIS KODLAMA HİZMETİ DAHİL" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 text-[11px] font-black text-gray-400 uppercase tracking-widest">
                                        <item.icon className="w-5 h-5 text-brand-default" />
                                        {item.text}
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={`https://wa.me/905332081400?text=${encodeURIComponent(`${product.name} hakkında detaylı bilgi ve montaj randevusu almak istiyorum.`)}`}
                                    className="flex-grow flex items-center justify-center gap-3 py-5 bg-brand-default hover:bg-brand-hover text-white rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-brand-default/20 transform hover:-translate-y-1"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp İle Sipariş
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Technical Details / CTA Section */}
                    <div className="mt-24 pt-24 border-t border-gray-200">
                        <ScientificCTA variant="inline" />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
