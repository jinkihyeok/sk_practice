import React from "react";
import SectionHeader from "../common/SectionHeader";
import {RightArrowIcon} from "../ui/Icons";

export default function SaveConsultation() {
    return (
        <div className="section-style col-span-3">
            <SectionHeader title="상담이력저장"/>
            <div className="flex flex-col w-full h-full text-xs">
                <div className="flex flex-row h-2/3">
                    <div className="flex flex-col gap-1 w-2/5 m-1">
                        <div className="flex flex-row gap-1">
                            <h3 className="w-1/6 text-end whitespace-nowrap">검색</h3>
                            <div className="flex flex-row gap-1 w-5/6">
                                <input className="input-style !bg-white flex-grow"/>
                                <button className="btn-style px-2">조회</button>
                            </div>
                        </div>
                        <div className="flex flex-row gap-1 flex-grow">
                            <h3 className="w-1/6 text-end whitespace-nowrap">메모</h3>
                            <textarea
                                className="w-5/6 border resize-none scrollbar p-1 outline-none" />
                        </div>
                    </div>
                    <div className="flex flex-col w-3/5 m-1 bg-blue-50">
                        <textarea className="flex-grow border resize-none scrollbar p-1 outline-none"/>
                    </div>
                </div>
                <div className="flex flex-row w-full justify-between items-center gap-1">
                    <h3 className="whitespace-nowrap">통화자명</h3>
                    <input className="input-style !bg-purple-100"/>
                    <h3 className="whitespace-nowrap">연락처</h3>
                    <input className="input-style !bg-purple-100"/>
                    <h3 className="whitespace-nowrap">접촉구분</h3>
                    <select className="input-style !bg-purple-100 flex-grow"/>
                    <h3 className="whitespace-nowrap">관계</h3>
                    <select className="input-style !bg-purple-100 flex-grow"/>
                    <button className="btn-style px-2 h-full flex flex-row items-center">
                        <h3>저장</h3>
                        <RightArrowIcon/>
                    </button>
                </div>
            </div>
        </div>
    )
}