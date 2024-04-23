import React, { createContext, useState, useContext } from "react";

type LocaleState = "ko" | "en";

type LocaleStateContextType = {
    locale: LocaleState;
    setLocale: React.Dispatch<React.SetStateAction<LocaleState>>;
};

const LocaleStateContext = createContext<LocaleStateContextType | undefined>(undefined);

export const useLocaleState = () => {
    const context = useContext(LocaleStateContext);
    if (!context) {
        throw new Error("useLocaleState must be used within a LocaleStateProvider");
    }
    return context;
};

type LocaleStateProviderProps = {
    children: React.ReactNode;
};

export const LocaleStateProvider: React.FC<LocaleStateProviderProps> = ({ children }) => {
    const [locale, setLocale] = useState<LocaleState>("ko");

    return (
        <LocaleStateContext.Provider value={{ locale, setLocale }}>
            {children}
        </LocaleStateContext.Provider>
    );
};