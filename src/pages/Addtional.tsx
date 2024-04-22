import React from 'react';
import Header from "../components/common/Header";
import ProfileImageSection from "../components/additionalComponents/sections/ProfileImageSection";
import GraphSection from "../components/additionalComponents/sections/GraphSection";
import SearchBarSection from "../components/additionalComponents/sections/SearchBarSection";
import ImageSlideSection from "../components/additionalComponents/sections/ImageSlideSection";
import AccordionSection from "../components/additionalComponents/sections/AccordionSection";

const Additional: React.FC = () => {
    return (
        <div className="mx-auto w-full flex flex-col">
            <Header title="추가 페이지" linkTitle="돌아가기" linkPath="/"/>
            <div className="flex flex-col items-end max-w-[1024px] mx-auto py-10">
                    <SearchBarSection/>
                <div className="grid grid-cols-4 gap-24 my-2 w-full">
                    <ProfileImageSection/>
                    <GraphSection/>
                </div>
                <ImageSlideSection/>
                <AccordionSection/>
            </div>
        </div>
    );
};

export default Additional;