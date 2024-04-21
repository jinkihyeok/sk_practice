import React from 'react';
import Header from "./components/common/Header";
import ClientInfo from "./components/sections/ClientInfo";
import BillingInfo from "./components/sections/BillingInfo";
import PaymentInfo from "./components/sections/PaymentInfo";
import SaveConsultation from "./components/sections/SaveConsultation";
import ConsultationHistory from "./components/sections/ConsultationHistory";
import SearchConsultationInfo from "./components/sections/SearchConsultationInfo";
import ConsultDetailInfo from "./components/sections/ConsultDetailInfo";

const App: React.FC = () => {
    return (
        <div className="mx-auto">
            <Header title="고객상담"/>
            <SearchConsultationInfo/>
            <ClientInfo/>
            <div className="grid grid-cols-2 gap-3 my-2">
                <ConsultDetailInfo/>
                <BillingInfo/>
            </div>
            <div className="grid grid-cols-5 gap-3 my-2">
                <PaymentInfo/>
                <SaveConsultation/>
            </div>
            <ConsultationHistory/>
        </div>
    );
};

export default App;