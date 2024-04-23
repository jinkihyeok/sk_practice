import React, { createContext, useState } from 'react';
import {ServiceAccount, ConsultationInfo, ConsultationDetail, BillingInfo, PaymentInfo} from "../types";

interface GlobalState {
    selectedServiceAccount: ServiceAccount | null;
    selectedConsultationInfo: ConsultationInfo[] | [];
    selectedConsultationDetail: ConsultationDetail | null;
    selectedBillingInfo: BillingInfo[] | [];
    selectedPaymentInfo: PaymentInfo | null;
}

interface GlobalStateContextProps {
    state: GlobalState;
    setState: React.Dispatch<React.SetStateAction<GlobalState>>;
}

const initialState: GlobalState = {
    selectedServiceAccount: null,
    selectedConsultationInfo: [],
    selectedConsultationDetail: null,
    selectedBillingInfo: [],
    selectedPaymentInfo: null,
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