import SectionHeader from "../../common/SectionHeader";
import React, {useContext, useState} from "react";
import {firstNumberOptions, serviceNumberOptions} from "../../../libs/constants";
import {RightArrowIcon} from "../../ui/Icons";
import SearchModal from "./SearchModal";
import {PhoneNumber, SelectOptionType} from "../../../types";
import {GlobalStateContext} from "../../../contexts/GlobalStateContext";

export default function SearchConsultationInfo() {

    const [selectedOption, setSelectedOption] = useState<SelectOptionType | undefined>(serviceNumberOptions.find(option => option.isDefault));
    const [phoneNumber, setPhoneNumber] = useState<PhoneNumber>({firstNumber: firstNumberOptions[0].value, secondNumber: '', thirdNumber: ''});
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const {state} = useContext(GlobalStateContext);

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
            [name]: value.replace(/[^0-9]/g, ''),
        }));
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (
            !/[0-9]/.test(event.key) &&
            event.key !== 'Backspace' &&
            event.key !== 'Tab' &&
            event.key !== 'Shift'
        ) {
            event.preventDefault();
        }
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
                                <select className="w-1/6 border border-gray-300 bg-purple-100 outline-none text-center"
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
                                    className="w-1/6 border border-gray-300 bg-purple-100 outline-none text-center"
                                    value={phoneNumber.secondNumber}
                                    onChange={handlePhoneNumberChange}
                                    maxLength={4}
                                    onKeyDown={handleKeyDown}
                                />
                                <input
                                    type="text"
                                    name="thirdNumber"
                                    className="w-1/6 border border-gray-300 bg-purple-100 outline-none text-center"
                                    value={phoneNumber.thirdNumber}
                                    onChange={handlePhoneNumberChange}
                                    maxLength={4}
                                    onKeyDown={handleKeyDown}
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
                                    value={state.selectedServiceAccount?.customerName}
                                    disabled
                                />
                                <input
                                    type="text"
                                    className="w-8 input-style"
                                    value={state.selectedServiceAccount?.gender}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="flex flex-row flex-grow items-center gap-2 ml-1">
                            <h3 className="whitespace-nowrap">생년/법인/사업자 번호</h3>
                            <input
                                type="text"
                                className="flex-grow input-style"
                                value={state.selectedServiceAccount?.customerNumber.replace(/\d/g, '*')}
                                disabled
                            />
                            <button
                                disabled className="btn-style px-2 !text-gray-400">
                                고객인증
                            </button>
                        </div>
                        <button
                            onClick={(e) => handleSearch(e)}
                            className="flex flex-row items-center justify-between text-sm bg-neutral-700 text-gray-300 px-2 rounded ml-5">
                            <span className="whitespace-nowrap font-light">조회</span>
                            <RightArrowIcon/>
                        </button>
                    </form>
                </div>
            </div>
            {isModalOpen && <SearchModal setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} selectedOption={selectedOption}
                                         setSelectedOption={setSelectedOption} phoneNumber={phoneNumber}
                                         setPhoneNumber={setPhoneNumber}
            />}
        </>
    );
}