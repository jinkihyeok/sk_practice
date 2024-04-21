import React, { createContext, useState } from 'react';
import {ServiceAccount} from "../types";

interface ServiceAccountContextProps {
    selectedServiceAccount: ServiceAccount | null;
    setSelectedServiceAccount: (selectedServiceAccount: ServiceAccount | null) => void;
}

export const ServiceAccountContext = createContext<ServiceAccountContextProps>({
    selectedServiceAccount: null,
    setSelectedServiceAccount: () => {},
});

export const ServiceAccountProvider: React.FC<{children?: React.ReactNode}> = ({ children }) => {
    const [selectedServiceAccount, setSelectedServiceAccount] = useState<ServiceAccount | null>(null);

    return (
        <ServiceAccountContext.Provider
            value={{
                selectedServiceAccount,
                setSelectedServiceAccount,
            }}
        >
            {children}
        </ServiceAccountContext.Provider>
    );
};