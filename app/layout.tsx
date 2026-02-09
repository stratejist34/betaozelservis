import type { Metadata, Viewport } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import GlobalStickyBar from "@/components/GlobalStickyBar";
import { ServiceAreaProvider } from "@/context/ServiceAreaContext";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-bai-jamjuree",
  display: "swap",
  fallback: ["sans-serif"],
});

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Beta Özel Servis | Tuzla Audi, Volkswagen, BMW, Mercedes Servisi",
  description: "Tuzla'da 15 yıllık deneyimle garantili Audi, Volkswagen, BMW ve Mercedes özel servis hizmeti. 7/24 acil yol yardım ve uzman kadro.",
  keywords: ["tuzla oto servis", "audi servis tuzla", "volkswagen servis tuzla", "bmw servis tuzla", "mercedes servis tuzla", "periyodik bakım", "s-tronic tamiri"],
  alternates: {
    canonical: "https://betaozelservis.com",
  },
  openGraph: {
    title: "Beta Özel Servis | Tuzla Oto Bakım ve Onarım",
    description: "Tuzla'da profesyonel ve garantili oto servis hizmetleri.",
    url: "https://betaozelservis.com",
    siteName: "Beta Özel Servis",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beta Özel Servis | Tuzla Oto Bakım ve Onarım",
    description: "Tuzla'da profesyonel ve garantili oto servis hizmetleri.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-GG9BNTTHBN";
  const GADS_ID = "AW-17452256740";

  return (
    <html lang="tr" className={baiJamjuree.variable}>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body className="font-sans antialiased">
        {/* GA4 and Google Ads */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
            gtag('config', '${GADS_ID}');
          `}
        </Script>

        <ServiceAreaProvider>
          {children}
          <GlobalStickyBar />
        </ServiceAreaProvider>
        <Analytics />
      </body>
    </html>
  );
}
