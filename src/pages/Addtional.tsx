import React from 'react';
import MainHeader from "../components/common/MainHeader";
import ProfileImageSection from "../components/additionalComponents/sections/ProfileImageSection";
import ChartSection from "../components/additionalComponents/sections/chartSecton/ChartSection";
import SearchBarSection from "../components/additionalComponents/sections/SearchBarSection";
import ImageSlideSection from "../components/additionalComponents/sections/ImageSlideSection";
import AccordionSection from "../components/additionalComponents/sections/AccordionSection";

const Additional: React.FC = () => {
    return (
        <div className="mx-auto w-full flex flex-col text-sm">
            <MainHeader title="추가 페이지" linkTitle="돌아가기" linkPath="/"/>
            <div className="flex flex-col gap-3 py-10">
                <SearchBarSection/>
                <div className="flex flex-row gap-3 w-full">
                    <ProfileImageSection/>
                    <ChartSection/>
                </div>
                <div className="flex flex-col gap-3 w-full">
                    <ImageSlideSection/>
                    <AccordionSection/>
                </div>
            </div>
        </div>
    );
};

export default Additional;