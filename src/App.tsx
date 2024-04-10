import React from 'react';
import Header from "./components/sections/Header";
import ClientInfo from "./components/sections/ClientInfo";
import BillingInfo from "./components/sections/BillingInfo";
import PaymentInfo from "./components/sections/PaymentInfo";
import SaveConsultation from "./components/sections/SaveConsultation";
import ConsultationHistory from "./components/sections/ConsultationHistory";

const App: React.FC = () => {
    return (
        <div className="mx-auto">
            <Header title="고객상담"/>
            <ClientInfo/>
            <BillingInfo/>
            <div className="grid grid-cols-5 gap-4 my-4">
                <PaymentInfo/>
                <SaveConsultation/>
            </div>
            <ConsultationHistory/>
        </div>
    );
};

export default App;