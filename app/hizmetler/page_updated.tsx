// Bu dosyayı kullanarak manuel olarak kopyalayabilirsiniz
// Satır 145'i şununla değiştirin:
                                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] italic relative z-10">"Gereksiz işlem yapılmaz"</p>

// Satır 149'u (Card 2 div açılışı) şununla değiştirin ve sonrasına background ekleyin:
                            <div className="flex flex-col items-center text-center p-12 bg-white border-[2px] border-slate-900 rounded-[4rem] lg:rounded-full aspect-square justify-center shadow-[0_40px_90px_-15px_rgba(0,0,0,0.25),0_20px_40px_-10px_rgba(198,31,58,0.15)] hover:shadow-[0_50px_110px_-15px_rgba(0,0,0,0.35),0_25px_50px_-10px_rgba(198,31,58,0.25)] relative scale-105 z-20 transition-all duration-500 overflow-hidden">
                                {/* Background Image */}
                                <div 
                                    className="absolute inset-0 bg-cover bg-center opacity-[0.12] hover:opacity-[0.15] transition-opacity duration-500 rounded-[4rem] lg:rounded-full"
                                    style={{
                                        backgroundImage: 'url(/wp-content/uploads/2019/11/Bmw-Audi-Mercedes-Volkswagen-Servisi-Beta-Ozel-Servis-15.bk.jpg)',
                                    }}
                                />
                                <div className="absolute inset-0 bg-white/50 hover:bg-white/30 transition-colors duration-500 rounded-[4rem] lg:rounded-full" />
                                
                                <span className="text-[9px] font-black text-brand-default tracking-[0.3em] mb-4 uppercase relative z-10">PAKET 02</span>

// Card 2'nin tüm içerik elementlerine relative z-10 ekleyin

// Satır 160'ı (Card 3 div açılışı) değiştirin ve background ekleyin - Card 1 ile aynı yapı
