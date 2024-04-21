import React, { createContext, useState } from 'react';
import { ServiceAccount, ConsultationInfo } from "../types";

interface GlobalState {
    selectedServiceAccount: ServiceAccount | null;
    selectedConsultationInfo: ConsultationInfo | null;
}

interface GlobalStateContextProps {
    state: GlobalState;
    setState: React.Dispatch<React.SetStateAction<GlobalState>>;
}

const initialState: GlobalState = {
    selectedServiceAccount: null,
    selectedConsultationInfo: null,
};

export const GlobalStateContext = createContext<GlobalStateContextProps>({
    state: initialState,
    setState: () => {},
});

export const GlobalStateProvider: React.FC<{children?: React.ReactNode}> = ({ children }) => {
    const [state, setState] = useState<GlobalState>(initialState);

    return (
        <GlobalStateContext.Provider value={{ state, setState }}>
            {children}
        </GlobalStateContext.Provider>
    );
};