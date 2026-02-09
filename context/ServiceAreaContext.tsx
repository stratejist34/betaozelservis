'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import ServiceAreaSheet from '@/components/ServiceAreaSheet';
import { trackPhoneClick } from '@/lib/analytics';

interface ServiceAreaContextType {
    verifyAndAction: (action: () => void) => void;
}

const ServiceAreaContext = createContext<ServiceAreaContextType | undefined>(undefined);

export function ServiceAreaProvider({ children }: { children: ReactNode }) {
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [hasConfirmedArea, setHasConfirmedArea] = useState(false);
    const [pendingAction, setPendingAction] = useState<(() => void) | null>(null);

    useEffect(() => {
        const confirmed = localStorage.getItem('service_area_confirmed');
        if (confirmed) {
            setHasConfirmedArea(true);
        }
    }, []);

    const verifyAndAction = (action: () => void) => {
        if (hasConfirmedArea) {
            action();
        } else {
            setPendingAction(() => action);
            setIsSheetOpen(true);
        }
    };

    const handleConfirm = () => {
        localStorage.setItem('service_area_confirmed', 'true');
        setHasConfirmedArea(true);
        setIsSheetOpen(false);
        trackPhoneClick({ source: 'global_modal', confirm: true }); // General confirm tracking

        if (pendingAction) {
            pendingAction();
            setPendingAction(null);
        }
    };

    const handleClose = () => {
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
