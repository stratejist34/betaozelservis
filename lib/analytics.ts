type PageType = 'service' | 'blog' | 'home' | 'price' | 'contact' | 'battery' | 'other';
type Brand = 'bmw' | 'mercedes' | 'audi' | 'volkswagen' | 'porsche' | 'land-rover' | 'mini' | 'smart' | 'subaru' | 'daihatsu' | 'skoda' | 'seat' | 'kia' | 'jeep' | 'honda' | 'mazda' | 'ford' | 'opel' | 'peugeot' | 'citroen' | 'renault' | 'fiat' | 'toyota' | 'nissan' | 'hyundai' | 'mitsubishi' | 'suzuki' | 'chevrolet' | 'dacia' | 'chery' | 'geely' | 'mg' | 'togg' | 'tesla' | 'renault' | 'fiat' | 'toyota' | 'nissan' | 'hyundai' | 'mitsubishi' | 'suzuki' | 'chevrolet' | 'dacia' | 'chery' | 'geely' | 'mg' | 'togg' | 'tesla' | string;

interface TrackingParams {
    source: string;
    page_type?: PageType;
    brand?: Brand;
    [key: string]: any;
}

export const trackPhoneIntent = (params: TrackingParams | string) => {
    // Backward compatibility for string argument
    const finalParams = typeof params === 'string' ? { source: params } : params;

    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'arama_niyeti', {
            event_category: 'Contact',
            event_label: finalParams.source,
            ...finalParams
        });
    }
};

export const trackWhatsappIntent = (params: TrackingParams | string) => {
    // Backward compatibility for string argument
    const finalParams = typeof params === 'string' ? { source: params } : params;

    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'whatsapp_niyeti', {
            event_category: 'Contact',
            event_label: finalParams.source,
            ...finalParams
        });
    }
};

export const trackPhoneAbandon = (params: TrackingParams | string) => {
    // Backward compatibility for string argument
    const finalParams = typeof params === 'string' ? { source: params } : params;

    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'arama_vazgecildi', {
            event_category: 'Contact',
            event_label: finalParams.source,
            ...finalParams
        });
    }
};

export const trackWhatsappAbandon = (params: TrackingParams | string) => {
    // Backward compatibility for string argument
    const finalParams = typeof params === 'string' ? { source: params } : params;

    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'whatsapp_vazgecildi', {
            event_category: 'Contact',
            event_label: finalParams.source,
            ...finalParams
        });
    }
};

export const trackPhoneClick = (params: TrackingParams | string) => {
    // Renamed usage conceptually to "Call Action Completed"
    // Event name updated to 'telefon_aramasi'
    const finalParams = typeof params === 'string' ? { source: params } : params;

    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'telefon_aramasi', {
            event_category: 'Contact',
            event_label: finalParams.source,
            ...finalParams
        });
    }
};

export const trackWhatsappClick = (params: TrackingParams | string) => {
    // Renamed usage conceptually to "WhatsApp Action Completed"
    // Event name updated to 'whatsapptan_yazanlar'
    const finalParams = typeof params === 'string' ? { source: params } : params;

    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'whatsapptan_yazanlar', {
            event_category: 'Contact',
            event_label: finalParams.source,
            ...finalParams
        });
    }
};

