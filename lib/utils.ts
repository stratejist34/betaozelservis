export const trackCTA = (action: string) => {
    // @ts-ignore
    if (typeof gtag !== 'undefined') {
        // @ts-ignore
        gtag('event', 'hero_cta_click', {
            action: action,
            event_category: 'engagement',
        });
    }
};

export function cn(...inputs: (string | undefined | null | false)[]) {
    return inputs.filter(Boolean).join(" ");
}
