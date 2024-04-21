import React, {useContext, useEffect, useState} from 'react';
import SectionHeader from "../../common/SectionHeader";
import {serviceNumberOptions} from "../../../constants";
import {RightArrowIcon} from "../../ui/Icons";
import {PhoneNumber, ServiceAccount} from "../../../types";
import {serviceAccountData} from "../../../dummyData/ServiceAccount";
import {ServiceAccountContext} from "../../../context/ServiceAccountContext";

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
    phoneNumber: PhoneNumber;
    setPhoneNumber: (phoneNumber: PhoneNumber) => void;
}

export default function SearchModal({
                                        setIsModalOpen,
                                        setSelectedOption,
                                        selectedOption,
                                        phoneNumber,
                                        setPhoneNumber,
                                    }: SearchModalProps) {

    const [searchedServiceAccounts, setSearchedServiceAccounts] = useState<ServiceAccount[]>([]);
    const [inputNumber, setInputNumber] = useState('');
    const [checkedAccount, setCheckedAccount] = useState<ServiceAccount | null>(null);
    const { selectedServiceAccount, setSelectedServiceAccount } = useContext(ServiceAccountContext);

    useEffect(() => {
        setInputNumber(`${phoneNumber.firstNumber}${phoneNumber.secondNumber}${phoneNumber.thirdNumber}`);
    }, [phoneNumber]);

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

    const handleCheckboxChange = (account: ServiceAccount) => {
        if (checkedAccount?.serviceNumber === account.serviceNumber) {
            setCheckedAccount(null);
        } else {
            setCheckedAccount(account);
        }
    };

    const handleSearch = () => {
        const foundAccounts = serviceAccountData.filter(
            (account) => account.serviceNumber === inputNumber
        );

        setSearchedServiceAccounts(foundAccounts);
    };

    const handleApply = () => {
        if (checkedAccount) {
            setSelectedServiceAccount(checkedAccount);
        }
        const firstNumber = inputNumber.slice(0, 3);
        const secondNumber = inputNumber.slice(3, 7);
        const thirdNumber = inputNumber.slice(7);
        setPhoneNumber({
            firstNumber,
            secondNumber,
            thirdNumber
        });
        console.log('selectedServiceAccount:', selectedServiceAccount);
        console.log('phoneNumber:', phoneNumber);
        closeModal();
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                onClick={handleBackgroundClick}
                className="fixed inset-0 bg-black opacity-50">
            </div>
            <div className="bg-white w-2/3 h-[460px] p-4 rounded shadow-lg z-10 relative text-xs flex flex-col">
                <button
                    className="absolute top-2 right-4 text-gray-500 hover:text-gray-800"
                    onClick={closeModal}>
                    <span className="text-2xl">&times;</span>
                </button>
                <div className="modal-header">
                    <h2 className="text-sm mb-4">고객청구서비스정보조회</h2>
                </div>
                <div className="section-style flex-grow flex-flex-col">
                    <SectionHeader title="검색"/>
                    <div className="flex flex-col gap-3 h-full">
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
                                <input
                                    className="input-style w-2/3"
                                    type="text"
                                    value={inputNumber}
                                    onChange={(e) => setInputNumber(e.target.value)}
                                    maxLength={11}
                                />
                            </div>
                            <div className="flex flex-row w-2/5 justify-end">
                                <button
                                    type="button"
                                    onClick={handleSearch}
                                    className="btn-style flex flex-row px-2 items-center">
                                    <h3>검색</h3>
                                    <RightArrowIcon/>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow">
                            <SectionHeader title="결과"/>
                            <div className="overflow-x-auto flex flex-col flex-grow">
                                <table className="table-auto border-collapse w-full">
                                    <thead>
                                    <tr className="table-header-style whitespace-nowrap">
                                        <th className="border">선택</th>
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
                                    {searchedServiceAccounts.map((account, index) => (
                                        <tr
                                            key={index}
                                            className={`whitespace-nowrap ${
                                                index % 2 === 1 ? 'bg-gray-100' : ''
                                            }`}
                                        >
                                            <td className="border text-center">
                                                <input
                                                    type="checkbox"
                                                    checked={checkedAccount?.serviceNumber === account.serviceNumber}
                                                    onChange={() => handleCheckboxChange(account)}
                                                />
                                            </td>
                                            <td className="border text-center">{account.customerNumber}</td>
                                            <td className="border text-center">{account.customerName}</td>
                                            <td className="border text-center">{account.billingAccountNumber}</td>
                                            <td className="border text-center">{account.billingCustomerNumber}</td>
                                            <td className="border text-center">{account.billingCustomerName}</td>
                                            <td className="border text-center">{account.serviceAccountNumber}</td>
                                            <td className="border text-center">{account.paymentInfo}</td>
                                            <td className="border text-center">{account.billingInfo}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row w-full justify-center items-end gap-1 mt-auto">
                    <button
                        type="button"
                        onClick={handleApply}
                        className="btn-style flex flex-row p-1">
                        <h3>적용</h3>
                        <RightArrowIcon/>
                    </button>
                    <button
                        type="button"
                        onClick={closeModal}
                        className="btn-style flex flex-row p-1">
                        <h3>닫기</h3>
                        <RightArrowIcon/>
                    </button>
                </div>
            </div>
        </div>
    );
}