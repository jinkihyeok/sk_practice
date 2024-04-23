import React from 'react';
import MainHeader from "../components/common/MainHeader";
import ProfileImageSection from "../components/additionalComponents/sections/ProfileImageSection";
import GraphSection from "../components/additionalComponents/sections/graphSecton/GraphSection";
import SearchBarSection from "../components/additionalComponents/sections/SearchBarSection";
import ImageSlideSection from "../components/additionalComponents/sections/ImageSlideSection";
import AccordionSection from "../components/additionalComponents/sections/AccordionSection";

const Additional: React.FC = () => {
    return (
        <div className="mx-auto w-full flex flex-col">
            <MainHeader title="추가 페이지" linkTitle="돌아가기" linkPath="/"/>
            <div className="flex flex-col items-end max-w-[1024px] mx-auto py-10">
                    <SearchBarSection/>
                <div className="grid grid-cols-4 gap-24 my-2 w-full">
                    <ProfileImageSection/>
                    <GraphSection/>
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