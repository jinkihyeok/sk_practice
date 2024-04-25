import React, {useContext, useState} from "react";
import SectionHeader from "../common/SectionHeader";
import {RightArrowIcon} from "../ui/Icons";
import {contactTypeOptions, relationOptions} from "../../libs/constants";
import {SelectOptionType} from "../../types";
import {GlobalStateContext} from "../../contexts/GlobalStateContext";

export default function SaveConsultation() {
    const [contactType, setContactType] = useState<SelectOptionType | undefined>(contactTypeOptions.find(option => option.isDefault));
    const [relation, setRelation] = useState<SelectOptionType | undefined>(relationOptions.find(option => option.isDefault));
    const {state} = useContext(GlobalStateContext);
    const isServiceAccount = !!state.selectedServiceAccount;

    const handleContactTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        const selectedOption = contactTypeOptions.find(option => option.value === selectedValue);
        if (selectedOption) {
            setContactType(selectedOption);
        }
    }

    const handleRelationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        const selectedOption = relationOptions.find(option => option.value === selectedValue);
        if (selectedOption) {
            setRelation(selectedOption);
        }
    }

    return (
        <div className="section-style col-span-3">
            <SectionHeader title="상담이력저장"/>
            <div className="flex flex-col w-full h-full text-xs">
                <div className="flex flex-row h-2/3">
                    <div className="flex flex-col gap-1 w-2/5 m-1">
                        <div className="flex flex-row gap-1">
                            <h3 className="w-1/6 text-end whitespace-nowrap">검색</h3>
                            <div className="flex flex-row gap-1 w-5/6">
                                <input disabled={!isServiceAccount} className="input-style !bg-white flex-grow"/>
                                <button
                                    disabled
                                    className="btn-style px-2">조회
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-row gap-1 flex-grow">
                            <h3 className="w-1/6 text-end whitespace-nowrap">메모</h3>
                            <textarea
                                disabled={!isServiceAccount}
                                className="w-5/6 border resize-none scrollbar p-1 outline-none"/>
                        </div>
                    </div>
                    <div className="flex flex-col w-3/5 m-1 bg-blue-50">
                        <textarea
                            disabled={!isServiceAccount}
                            className="flex-grow border resize-none scrollbar p-1 outline-none"/>
                    </div>
                </div>
                <div className="flex flex-row w-full justify-end items-center gap-1">
                    <div className="flex flex-row justify-end gap-1 w-1/2">
                        <h3 className="whitespace-nowrap text-end w-1/6">통화자명</h3>
                        <input disabled={!isServiceAccount} className="input-style !bg-purple-100 min-w-0 flex-grow"/>
                        <h3 className="whitespace-nowrap text-end">연락처</h3>
                        <input disabled={!isServiceAccount} className="input-style !bg-purple-100 min-w-0 flex-grow"/>
                    </div>
                    <div className="flex flex-row justify-end items-center gap-1 w-1/2">
                        <h3 className="whitespace-nowrap text-end">접촉구분</h3>
                        <select
                            disabled={!isServiceAccount}
                            className="input-style !bg-purple-100 flex-grow"
                            value={contactType?.value}
                            onChange={handleContactTypeChange}
                            name="contactType">
                            {contactTypeOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <h3 className="whitespace-nowrap">관계</h3>
                        <select
                            disabled={!isServiceAccount}
                            className="input-style !bg-purple-100 flex-grow"
                            value={relation?.value}
                            onChange={handleRelationChange}
                            name="relation">
                            {relationOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <button disabled={!isServiceAccount}
                                className="btn-style px-2 py-0.5 flex flex-row items-center">
                            <h3>저장</h3>
                            <RightArrowIcon size={3}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}