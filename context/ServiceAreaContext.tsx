'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import ServiceAreaSheet from '@/components/ServiceAreaSheet';
import { trackPhoneClick, trackPhoneIntent, trackWhatsappIntent, trackPhoneAbandon, trackWhatsappAbandon } from '@/lib/analytics';

interface ServiceAreaContextType {
    verifyAndAction: (type: 'phone' | 'whatsapp', action: () => void) => void;
}

const ServiceAreaContext = createContext<ServiceAreaContextType | undefined>(undefined);

export function ServiceAreaProvider({ children }: { children: ReactNode }) {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [hasConfirmedArea, setHasConfirmedArea] = useState(false);
    const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);
    const [pendingActionType, setPendingActionType] = useState<'phone' | 'whatsapp'>('phone');

    useEffect(() => {
        // Use sessionStorage instead of localStorage for per-session confirmation
        const confirmed = sessionStorage.getItem('service_area_confirmed');
        if (confirmed) {
            setHasConfirmedArea(true);
        }
    }, []);

    const verifyAndAction = (type: 'phone' | 'whatsapp', action: () => void) => {
        // Track Intent immediately
        if (type === 'phone') {
            trackPhoneIntent({ source: 'global_intent' });
        } else {
            trackWhatsappIntent({ source: 'global_intent' });
        }

        // Always verify for now to ensure user sees the relevant modal (or check session)
        // User requested "her cta tuşlamasında", but session persistence is better UX. 
        // We will keep sessionStorage. If they want EVERY time, we can remove the check below.
        if (hasConfirmedArea) {
            action();
        } else {
            setPendingAction(() => action);
            setPendingActionType(type);
            setIsSheetOpen(true);
        }
    };

    const handleConfirm = () => {
        sessionStorage.setItem('service_area_confirmed', 'true');
        setHasConfirmedArea(true);
        setIsSheetOpen(false);
        // Note: trackPhoneClick/trackWhatsappClick (Action events) are handled by the callback (pendingAction)

        if (pendingAction) {
            pendingAction();
            setPendingAction(null);
        }
    };

    const handleClose = () => {
        // Track Abandonment
        if (pendingActionType === 'phone') {
            trackPhoneAbandon({ source: 'global_modal_abandon' });
        } else {
            trackWhatsappAbandon({ source: 'global_modal_abandon' });
        }

        setIsSheetOpen(false);
        setPendingAction(null);
    };

    return (
        <ServiceAreaContext.Provider value={{ verifyAndAction }}>
            {children}
            <ServiceAreaSheet
                isOpen={isSheetOpen}
                onClose={handleClose}
                onConfirm={handleConfirm}
                type={pendingActionType}
            />
        </ServiceAreaContext.Provider>
    );
}

export function useServiceArea() {
    const context = useContext(ServiceAreaContext);
    if (context === undefined) {
        throw new Error('useServiceArea must be used within a ServiceAreaProvider');
    }
    return context;
}
