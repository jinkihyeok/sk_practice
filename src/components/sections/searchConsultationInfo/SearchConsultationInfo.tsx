import SectionHeader from "../../common/SectionHeader";
import React, {useContext, useState} from "react";
import {firstNumberOptions, serviceNumberOptions} from "../../../constants";
import {RightArrowIcon} from "../../ui/Icons";
import SearchModal from "./SearchModal";
import {PhoneNumber} from "../../../types";
import {ServiceAccountContext} from "../../../context/ServiceAccountContext";

export default function SearchConsultationInfo() {

    const [selectedOption, setSelectedOption] = useState<{value: string, label: string } | undefined>(serviceNumberOptions.find(option => option.isDefault));
    const [phoneNumber, setPhoneNumber] = useState<PhoneNumber>({firstNumber: firstNumberOptions[0].value, secondNumber: '', thirdNumber: ''});
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const {selectedServiceAccount} = useContext(ServiceAccountContext);

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        const selectedOption = serviceNumberOptions.find(option => option.value === selectedValue);
        if (selectedOption) {
            setSelectedOption(selectedOption);
        }
    };

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const {name, value} = e.target;
        setPhoneNumber(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="section-style my-2">
                <SectionHeader title="고객상담관리 조회"/>
                <div className="flex flex-row w-full items-center border-2 py-2 text-neutral-500 text-xs">
                    <form className="flex flex-row justify-between items-center w-full ml-5 mr-3">
                        <div className="flex flex-row items-center gap-2 flex-grow">
                            <h3 className="whitespace-nowrap">조회구분</h3>
                            <div className="flex flex-grow">
                                <select className="flex-grow border border-gray-300 bg-purple-100 outline-none"
                                        value={selectedOption?.value}
                                        onChange={handleSelectChange}>
                                    {serviceNumberOptions.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                <select className="w-1/6 border border-gray-300 bg-purple-100 outline-none"
                                        name="firstNumber"
                                        value={phoneNumber.firstNumber}
                                        onChange={handlePhoneNumberChange}>
                                    {firstNumberOptions.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="text"
                                    name="secondNumber"
                                    className="w-1/6 border border-gray-300 bg-purple-100 outline-none"
                                    value={phoneNumber.secondNumber}
                                    onChange={handlePhoneNumberChange}
                                    maxLength={4}
                                />
                                <input
                                    type="text"
                                    name="thirdNumber"
                                    className="w-1/6 border border-gray-300 bg-purple-100 outline-none"
                                    value={phoneNumber.thirdNumber}
                                    onChange={handlePhoneNumberChange}
                                    maxLength={4}
                                />
                                <button
                                    onClick={(e) => handleSearch(e)}
                                    className="border p-1 bg-gray-100 rounded">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5"
                                         stroke="currentColor" className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-row flex-grow items-center gap-2 ml-3">
                            <h3 className="whitespace-nowrap">고객명</h3>
                            <div className="flex flex-row flex-grow">
                                <input
                                    type="text"
                                    className="flex-grow input-style"
                                    value={selectedServiceAccount?.customerName}
                                    disabled
                                />
                                <input
                                    type="text"
                                    className="w-8 input-style"
                                    value={selectedServiceAccount?.gender}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="flex flex-row flex-grow items-center gap-2 ml-1">
                            <h3 className="whitespace-nowrap">생년/법인/사업자 번호</h3>
                            <input
                                type="text"
                                className="flex-grow input-style"
                                value={selectedServiceAccount?.customerNumber.replace(/\d/g, '*')}
                                disabled
                            />
                            <button
                                disabled className="border px-2 text-gray-400 bg-amber-900 rounded whitespace-nowrap">
                                고객인증
                            </button>
                        </div>
                        <button
                            onClick={(e) => handleSearch(e)}
                            className="flex flex-row items-center justify-between text-sm bg-amber-900 text-gray-300 px-2 rounded ml-5">
                            <span className="whitespace-nowrap font-light">조회</span>
                            <RightArrowIcon/>
                        </button>
                    </form>
                </div>
            </div>
            {isModalOpen && <SearchModal setIsModalOpen={setIsModalOpen} selectedOption={selectedOption}
                                         setSelectedOption={setSelectedOption} phoneNumber={phoneNumber}
                                         setPhoneNumber={setPhoneNumber}
            />}
        </>
    );
}