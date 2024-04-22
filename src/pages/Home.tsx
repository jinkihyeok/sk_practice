import React from 'react';
import Header from "../components/common/Header";
import ClientInfo from "../components/homeComponents/sections/ClientInfo";
import BillingInfo from "../components/homeComponents/sections/BillingInfo";
import PaymentInfo from "../components/homeComponents/sections/PaymentInfo";
import SaveConsultation from "../components/homeComponents/sections/SaveConsultation";
import ConsultationHistory from "../components/homeComponents/sections/ConsultationHistory";
import SearchConsultationInfo from "../components/homeComponents/sections/searchConsultationInfo/SearchConsultationInfo";
import ConsultDetailInfo from "../components/homeComponents/sections/ConsultDetailInfo";

const Home: React.FC = () => {
    return (
        <div className="mx-auto">
            <Header title="고객상담" linkTitle="Additional Page" linkPath="/additional"/>
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

export default Home;