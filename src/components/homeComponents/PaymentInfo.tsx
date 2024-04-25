import React, {useContext} from "react";
import SectionHeader from "../common/SectionHeader";
import {GlobalStateContext} from "../../contexts/GlobalStateContext";

export default function PaymentInfo() {
    const {state} = useContext(GlobalStateContext);
    const paymentInfo = state.selectedPaymentInfo;

    return (
        <div className="section-style col-span-2">
            <SectionHeader title="납부정보"/>
            <div className="flex flex-col items-center justify-start w-full p-2 bg-gray-200">
                <div className="flex flex-col w-full">
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/5 input-title">청구서발행유형</h3>
                        <div className="flex flex-row w-4/5">
                            <input
                                className="disabled-input-style text-center w-1/3"
                                type="text"
                                value={paymentInfo?.billingType}
                                readOnly
                            />
                            <input
                                className="disabled-input-style text-center w-2/3"
                                type="text"
                                value={paymentInfo?.billingName}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/5 input-title">청구주소</h3>
                        <div className="flex flex-col w-4/5">
                            <div className="flex flex-row">
                                <input
                                    className="disabled-input-style w-1/5"
                                    type="text"
                                    value={paymentInfo?.AddressNumber}
                                    readOnly
                                />
                                <input
                                    className="disabled-input-style w-4/5"
                                    type="text"
                                    value={paymentInfo?.billingAddress}
                                    readOnly
                                />
                            </div>
                            <div className="flex flex-row gap-1">
                                <input
                                    className="disabled-input-style flex-grow"
                                    type="text"
                                    value={paymentInfo?.addressDetail}
                                    readOnly
                                />
                                <h3 className="input-title">세금계산서발행</h3>
                                <input
                                    className="disabled-input-style text-center w-1/12"
                                    type="text"
                                    value={paymentInfo?.issueTaxInvoice}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/5 input-title">납부방법</h3>
                        <div className="flex flex-row w-4/5">
                            <input
                                className="disabled-input-style text-center w-1/3"
                                type="text"
                                value={paymentInfo?.paymentMethod}
                            />
                            <input
                                className="disabled-input-style text-center w-1/3"
                                type="text"
                                value={paymentInfo?.paymentDate}
                            />
                            <input
                                className="disabled-input-style w-1/3"
                                type="text"
                                value={paymentInfo?.paymentMethodDetail}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/5 input-title">은행/카드사</h3>
                        <div className="w-4/5 flex flex-row gap-1">
                            <input
                                className="disabled-input-style text-center w-1/3"
                                type="text"
                                value={paymentInfo?.bankOrCardCompany}
                            />
                        <h3 className="w-1/3 input-title">카드/계좌번호</h3>
                        <input
                            className="disabled-input-style text-center w-1/3"
                            type="text"
                            value={paymentInfo?.accountOrCardNumber}
                        />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-1 py-1">
                    <div className="flex flex-row justify-end gap-1">
                        <button disabled={!paymentInfo} className="btn-style-paymentSection">
                            자납변경
                        </button>
                        <button disabled={!paymentInfo} className="btn-style-paymentSection">
                            인출일정
                        </button>
                        <button disabled={!paymentInfo} className="btn-style-paymentSection">
                            청구정보관리
                        </button>
                        <button disabled={!paymentInfo} className="btn-style-paymentSection">
                            기본약정/할부지원
                        </button>
                    </div>
                    <div className="flex flex-row justify-end gap-1">
                        <button disabled={!paymentInfo} className="btn-style-paymentSection">
                            입금전용계좌
                        </button>
                        <button
                            disabled
                            className="btn-style-paymentSection">청구서 반송내역</button>
                    </div>
                </div>
            </div>
        </div>
    )
}