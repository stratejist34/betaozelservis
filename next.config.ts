import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'betaozelservis.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'www.varta-automotive.com',
        pathname: '/**',
      }
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'date-fns'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      // 1. Ürünler: /product/ -> /urun/
      {
        source: '/product/:slug',
        destination: '/urun/:slug',
        permanent: true,
      },
      // 2. Kategoriler: /category/ -> /blog/marka/
      {
        source: '/category/:slug',
        destination: '/blog/marka/:slug',
        permanent: true,
      },
      // 3. Tag Yönetimi: /tag/ -> /blog (en alakasızları blog'a yönlendiriyoruz)
      {
        source: '/tag/:slug',
        destination: '/blog',
        permanent: true,
      },
      // 4. Eski WordPress Etiketleri: /Etiket/ -> /blog
      {
        source: '/Etiket/:slug',
        destination: '/blog',
        permanent: true,
      },
      // 5. Eski WordPress Kategorileri: /Kategori/ -> /blog/marka/
      {
        source: '/Kategori/:slug',
        destination: '/blog/marka/:slug',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
