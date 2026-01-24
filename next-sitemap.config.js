/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://betaozelservis.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    trailingSlash: true,
    exclude: ['/server-sitemap.xml'], // Örnek olarak eklenmiştir
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://betaozelservis.com/server-sitemap.xml', // Eğer gelecekte server-side sitemap gerekirse
        ],
    },
}
