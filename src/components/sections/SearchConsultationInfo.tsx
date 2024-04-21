import SectionHeader from "../common/SectionHeader";
import React, {useState} from "react";
import {firstNumberOptions, serviceNumberOptions} from "../../constants";

export default function SearchConsultationInfo() {
    const [selectedOption, setSelectedOption] = useState<{
        value: string,
        label: string
    } | undefined>(serviceNumberOptions.find(option => option.isDefault));

    const [selectedFirstNumber, setSelectedFirstNumber] = useState<{
        value: string,
        label: string
    } | undefined>(firstNumberOptions[0]);

    const [secondNumber, setSecondNumber] = useState<string>('');
    const [thirdNumber, setThirdNumber] = useState<string>('');

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        const selectedOption = serviceNumberOptions.find(option => option.value === selectedValue);
        if (selectedOption) {
            setSelectedOption(selectedOption);
        }
    };

    const handleFirstNumberChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        const selectedOption = firstNumberOptions.find(option => option.value === selectedValue);
        if (selectedOption) {
            setSelectedFirstNumber(selectedOption);
        }
    };

    const handleSecondNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSecondNumber(e.target.value);
    }

    const handleThirdNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setThirdNumber(e.target.value);
    }

    return (
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
                                    value={selectedFirstNumber?.value}
                                    onChange={handleFirstNumberChange}>
                                {firstNumberOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                className="w-1/6 border border-gray-300 bg-purple-100 outline-none"
                                value={secondNumber}
                                onChange={handleSecondNumberChange}
                            />
                            <input
                                type="text"
                                className="w-1/6 border border-gray-300 bg-purple-100 outline-none"
                                value={thirdNumber}
                                onChange={handleThirdNumberChange}
                            />
                            <button className="border p-1 bg-gray-100 rounded">
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
                            />
                            <input
                                type="text"
                                className="w-8 input-style"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row flex-grow items-center gap-2 ml-1">
                        <h3 className="whitespace-nowrap">생년/법인/사업자 번호</h3>
                        <input
                            type="text"
                            className="flex-grow input-style"
                        />
                        <button className="border px-2 text-gray-400 bg-amber-900 rounded whitespace-nowrap">
                            고객인증
                        </button>
                    </div>
                    <button
                        className="flex flex-row items-center justify-between text-sm bg-amber-900 text-gray-300 px-2 rounded ml-5">
                        <span className="whitespace-nowrap font-light">조회</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-3 h-3 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
}