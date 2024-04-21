import React from 'react';
import SectionHeader from "../../common/SectionHeader";
import {serviceNumberOptions} from "../../../constants";
import {RightArrowIcon} from "../../ui/Icons";

interface SearchModalProps {
    setIsModalOpen: (isOpen: boolean) => void;
    selectedOption: {
        value: string,
        label: string
    } | undefined;
    setSelectedOption: (option: {
        value: string,
        label: string
    }) => void;
}

export default function SearchModal({setIsModalOpen, setSelectedOption, selectedOption}: SearchModalProps) {
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        const selectedOption = serviceNumberOptions.find(option => option.value === selectedValue);
        if (selectedOption) {
            setSelectedOption(selectedOption);
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                onClick={handleBackgroundClick}
                className="fixed inset-0 bg-black opacity-50">
            </div>
            <div className="bg-white w-2/3 h-1/3 p-4 rounded shadow-lg z-10 relative text-xs">
                <button
                    className="absolute top-2 right-4 text-gray-500 hover:text-gray-800"
                    onClick={closeModal}>
                    <span className="text-2xl">&times;</span>
                </button>
                <div className="modal-header">
                    <h2 className="text-sm mb-4">고객청구서비스정보조회</h2>
                </div>
                <div className="section-style">
                    <SectionHeader title="검색"/>
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-row w-full px-2 py-1 border">
                            <div className="flex flex-row px-2 w-3/5">
                                <select className="border border-gray-300 bg-purple-100 outline-none w-1/3"
                                        value={selectedOption?.value}
                                        onChange={handleSelectChange}>
                                    {serviceNumberOptions.map(option => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                <input className="input-style w-2/3"/>
                            </div>
                            <div className="flex flex-row w-2/5 justify-end">
                                <button className="btn-style flex flex-row px-2 items-center">
                                    <h3>검색</h3>
                                    <RightArrowIcon/>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <SectionHeader title="결과"/>
                            <div className="overflow-x-auto">
                                <table className="table-auto border-collapse w-full">
                                    <thead>
                                    <tr className="table-header-style whitespace-nowrap">
                                        <th className="border">고객번호</th>
                                        <th className="border">고객명</th>
                                        <th className="border">청구계정번호</th>
                                        <th className="border">청구고객번호</th>
                                        <th className="border">청구고객명</th>
                                        <th className="border">서비스계정번호</th>
                                        <th className="border">납부정보</th>
                                        <th className="border">청구정보</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {Array(12).fill(null).map((_, index) => (
                                        <tr key={index} className="whitespace-nowrap">
                                            <td className="border text-center">데이터 {index + 1}</td>
                                            <td className="border text-center">데이터 {index + 1}</td>
                                            <td className="border text-center">데이터 {index + 1}</td>
                                            <td className="border text-center">데이터 {index + 1}</td>
                                            <td className="border text-center">데이터 {index + 1}</td>
                                            <td className="border text-center">데이터 {index + 1}</td>
                                            <td className="border text-center">데이터 {index + 1}</td>
                                            <td className="border text-center">데이터 {index + 1}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="flex flex-row w-full justify-center items-center gap-1">
                            <button className="btn-style flex flex-row p-1">
                                <h3>적용</h3>
                                <RightArrowIcon/>
                            </button>
                            <button className="btn-style flex flex-row p-1">
                                <h3>닫기</h3>
                                <RightArrowIcon/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}