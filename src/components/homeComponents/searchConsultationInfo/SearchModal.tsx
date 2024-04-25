import React, {useContext, useEffect, useState} from 'react';
import SectionHeader from "../../common/SectionHeader";
import {searchModalTableHeaders, serviceNumberOptions} from "../../../libs/constants";
import {RightArrowIcon} from "../../ui/Icons";
import {PhoneNumber, ServiceAccount} from "../../../types";
import {serviceAccountData} from "../../../dummyData/ServiceAccountData";
import {GlobalStateContext} from "../../../contexts/GlobalStateContext";
import {ConsultationInfoData} from "../../../dummyData/ConsultationInfoData";
import {ConsultationDetailData} from "../../../dummyData/ConsultationDetailData";
import {BillingInfoData} from "../../../dummyData/BillingInfoData";
import {PaymentInfoData} from "../../../dummyData/PaymentInfoData";
import {GenerateEmptyArray} from "../../../utils/GenerateEmptyArray";

interface SearchModalProps {
    setIsModalOpen: (isOpen: boolean) => void;
    isModalOpen: boolean;
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
                                        isModalOpen,
                                        setSelectedOption,
                                        selectedOption,
                                        phoneNumber,
                                        setPhoneNumber,
                                    }: SearchModalProps) {

    const [searchedServiceAccounts, setSearchedServiceAccounts] = useState<ServiceAccount[]>([]);
    const [inputNumber, setInputNumber] = useState('');
    const [checkedAccount, setCheckedAccount] = useState<ServiceAccount | null>(null);
    const {setState} = useContext(GlobalStateContext);

    useEffect(() => {
        setInputNumber(`${phoneNumber.firstNumber}${phoneNumber.secondNumber}${phoneNumber.thirdNumber}`);
    }, [phoneNumber]);

    useEffect(() => {
        if (isModalOpen) {
            handleSearch();
        }
    }, [isModalOpen, inputNumber]);

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

    const handleInputNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = e.target;
        setInputNumber(value.replace(/[^0-9]/g, ''));
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

    const applySelectedAccount = (account: ServiceAccount) => {
        setState((prevState) => ({
            ...prevState,
            selectedServiceAccount: account,
            selectedConsultationInfo: ConsultationInfoData.filter(
                (info) => info.serviceNumber === account.serviceNumber
            ),
            selectedConsultationDetail: ConsultationDetailData.find(
                (detail) => detail.serviceNumber === account.serviceNumber
            ) || null,
            selectedBillingInfo: BillingInfoData.filter(
                (info) => info.serviceNumber === account.serviceNumber
            ),
            selectedPaymentInfo: PaymentInfoData.find(
                (info) => info.serviceNumber === account.serviceNumber
            ) || null,
        }));

        setPhoneNumber({
            firstNumber: account.serviceNumber.slice(0, 3),
            secondNumber: account.serviceNumber.slice(3, 7),
            thirdNumber: account.serviceNumber.slice(7),
        });

        closeModal();
    };

    const handleApply = () => {
        if (!checkedAccount) {
            alert("선택된 정보가 없습니다.");
            return;
        }

        applySelectedAccount(checkedAccount);
    };

    const handleDoubleClick = (account: ServiceAccount) => {
        setCheckedAccount(account);
        applySelectedAccount(account);
    };

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
                                    className="disabled-input-style w-2/3"
                                    type="text"
                                    value={inputNumber}
                                    onChange={handleInputNumberChange}
                                    maxLength={11}
                                />
                            </div>
                            <div className="flex flex-row w-2/5 justify-end">
                                <button
                                    type="button"
                                    onClick={handleSearch}
                                    className="btn-style flex flex-row px-2 items-center">
                                    <h3>검색</h3>
                                    <RightArrowIcon size={3}/>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow">
                            <SectionHeader title="결과"/>
                            <div className="overflow-x-auto flex flex-col flex-grow">
                                <table className="table-auto border-collapse w-full">
                                    <thead>
                                    <tr className="table-header-style whitespace-nowrap">
                                        {searchModalTableHeaders.map((header, index) => (
                                            <th key={index} className="border text-center">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                    </thead>
                                    <tbody className="text-center">
                                    {searchedServiceAccounts.map((account, index) => (
                                        <tr
                                            key={index}
                                            onClick={() => handleCheckboxChange(account)}
                                            onDoubleClick={() => {
                                                handleDoubleClick(account);
                                            }}
                                            className={`whitespace-nowrap cursor-pointer ${
                                                checkedAccount?.serviceNumber === account.serviceNumber
                                                    ? "text-white bg-neutral-500"
                                                    : index % 2 === 1
                                                        ? "bg-gray-100"
                                                        : ""
                                            }`}
                                        >
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    checked={checkedAccount?.serviceNumber === account.serviceNumber}
                                                    onChange={() => handleCheckboxChange(account)}
                                                />
                                            </td>
                                            <td>{account.customerNumber}</td>
                                            <td>{account.customerName}</td>
                                            <td>{account.billingAccountNumber}</td>
                                            <td>{account.billingCustomerNumber}</td>
                                            <td>{account.billingCustomerName}</td>
                                            <td>{account.serviceAccountNumber}</td>
                                            <td>{account.paymentInfo}</td>
                                            <td>{account.billingInfo}</td>
                                        </tr>
                                    ))}
                                    <GenerateEmptyArray arrayLength={12} dataLength={searchedServiceAccounts.length} columnLength={9}/>
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
                        <RightArrowIcon size={3}/>
                    </button>
                    <button
                        type="button"
                        onClick={closeModal}
                        className="btn-style flex flex-row p-1">
                        <h3>닫기</h3>
                        <RightArrowIcon size={3}/>
                    </button>
                </div>
            </div>
        </div>
    );
}