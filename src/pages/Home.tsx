import React from 'react';
import MainHeader from "../components/common/MainHeader";
import ClientInfo from "../components/homeComponents/ClientInfo";
import BillingInfo from "../components/homeComponents/BillingInfo";
import PaymentInfo from "../components/homeComponents/PaymentInfo";
import SaveConsultation from "../components/homeComponents/SaveConsultation";
import ConsultationHistory from "../components/homeComponents/ConsultationHistory/ConsultationHistory";
import SearchConsultationInfo from "../components/homeComponents/searchConsultationInfo/SearchConsultationInfo";
import ConsultDetailInfo from "../components/homeComponents/ConsultDetailInfo";

const Home: React.FC = () => {
    return (
        <div className="mx-auto">
            <MainHeader title="고객상담" linkTitle="Additional Page" linkPath="/additional"/>
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