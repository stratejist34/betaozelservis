type PageType = 'service' | 'blog' | 'home' | 'price' | 'contact' | 'other';
type Brand = 'bmw' | 'mercedes' | 'audi' | 'volkswagen' | 'porsche' | 'land-rover' | 'mini' | 'smart' | 'subaru' | 'daihatsu' | 'skoda' | 'seat' | 'kia' | 'jeep' | 'honda' | 'mazda' | 'ford' | 'opel' | 'peugeot' | 'citroen' | 'renault' | 'fiat' | 'toyota' | 'nissan' | 'hyundai' | 'mitsubishi' | 'suzuki' | 'chevrolet' | 'dacia' | 'chery' | 'geely' | 'mg' | 'togg' | 'tesla' | 'renault' | 'fiat' | 'toyota' | 'nissan' | 'hyundai' | 'mitsubishi' | 'suzuki' | 'chevrolet' | 'dacia' | 'chery' | 'geely' | 'mg' | 'togg' | 'tesla' | string;

interface TrackingParams {
    source: string;
    page_type?: PageType;
    brand?: Brand;
    [key: string]: any;
}

export const trackPhoneClick = (params: TrackingParams | string) => {
    // Backward compatibility for string argument
    const finalParams = typeof params === 'string' ? { source: params } : params;

    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'phone_click', {
            event_category: 'Contact',
            event_label: finalParams.source,
            ...finalParams
        });
    }
};

export const trackWhatsappClick = (params: TrackingParams | string) => {
    // Backward compatibility for string argument
    const finalParams = typeof params === 'string' ? { source: params } : params;

    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'whatsapp_click', {
            event_category: 'Contact',
            event_label: finalParams.source,
            ...finalParams
        });
    }
};

