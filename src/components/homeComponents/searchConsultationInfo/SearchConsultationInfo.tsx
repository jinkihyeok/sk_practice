import SectionHeader from "../../common/SectionHeader";
import React, {useContext, useState} from "react";
import {firstNumberOptions, serviceNumberOptions} from "../../../libs/constants";
import {RightArrowIcon, SearchIcon} from "../../ui/Icons";
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
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch(event);
        }
    };

    const handleSearch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="section-style my-2">
                <SectionHeader title="고객상담관리 조회"/>
                <div className="flex flex-row w-full items-center border-2 py-2 text-neutral-500">
                    <form className="flex flex-row justify-between items-center w-full ml-5 mr-3">
                        <div className="flex flex-row items-center gap-2 flex-grow">
                            <h3 className="input-title">조회구분</h3>
                            <div className="flex flex-grow">
                                <select className="enabled-input-style flex-grow"
                                        value={selectedOption?.value}
                                        onChange={handleSelectChange}>
                                    {serviceNumberOptions.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                <select className="enabled-input-style w-1/6 text-center"
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
                                    className="enabled-input-style w-1/6 text-center"
                                    value={phoneNumber.secondNumber}
                                    onChange={handlePhoneNumberChange}
                                    maxLength={4}
                                />
                                <input
                                    type="text"
                                    name="thirdNumber"
                                    className="enabled-input-style w-1/6 text-center"
                                    value={phoneNumber.thirdNumber}
                                    onChange={handlePhoneNumberChange}
                                    onKeyDown={handleKeyDown}
                                    maxLength={4}
                                />
                                <button
                                    onClick={(e) => handleSearch(e)}
                                    className="border p-1 bg-gray-100 rounded">
                                    <SearchIcon size={3}/>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-row flex-grow items-center gap-2 ml-3">
                            <h3 className="input-title">고객명</h3>
                            <div className="flex flex-row flex-grow">
                                <input
                                    type="text"
                                    className="flex-grow disabled-input-style"
                                    value={state.selectedServiceAccount?.customerName}
                                    disabled
                                />
                                <input
                                    type="text"
                                    className="w-8 disabled-input-style"
                                    value={state.selectedServiceAccount?.gender}
                                    disabled
                                />
                            </div>
                        </div>
                        <div className="flex flex-row flex-grow items-center gap-2 ml-1">
                            <h3 className="input-title">생년/법인/사업자 번호</h3>
                            <input
                                type="text"
                                className="flex-grow disabled-input-style"
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
                            className="btn-style flex flex-row items-center justify-between text-sm px-2 ml-5">
                            <span className="whitespace-nowrap font-light">조회</span>
                            <RightArrowIcon size={3}/>
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
