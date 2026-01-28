import ContactContent from '@/components/ContactContent';

export const metadata = {
    title: 'İletişim | Beta Özel Servis',
    description: 'Tuzla İçmeler Oto Sanayi Sitesi\'ndeki servisimize ulaşın. 7/24 acil servis ve ranzevu için iletişim bilgilerimiz.',
    alternates: {
        canonical: 'https://betaozelservis.com/iletisim/',
    },
    openGraph: {
        title: 'İletişim | Beta Özel Servis',
        description: 'Tuzla İçmeler Oto Sanayi Sitesi\'ndeki servisimize ulaşın.',
        url: 'https://betaozelservis.com/iletisim/',
        type: 'website',
    },
};

export default function ContactPage() {
    return <ContactContent />;
}
