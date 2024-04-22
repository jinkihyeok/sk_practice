import React, {useContext} from "react";
import SectionHeader from "../common/SectionHeader";
import {GlobalStateContext} from "../../context/GlobalStateContext";

export default function PaymentInfo() {
    const {state} = useContext(GlobalStateContext);
    const paymentInfo = state.selectedPaymentInfo;

    return (
        <div className="section-style col-span-2">
            <SectionHeader title="납부정보"/>
            <div className="flex flex-col items-center justify-start w-full p-2 text-xs bg-gray-200">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/5 whitespace-nowrap text-end">청구서발행유형</h3>
                        <div className="flex flex-row w-4/5">
                            <input
                                className="input-style text-center w-1/3"
                                type="text"
                                value={paymentInfo?.billingType}
                                readOnly
                            />
                            <input
                                className="input-style text-center w-2/3"
                                type="text"
                                value={paymentInfo?.billingName}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/5 whitespace-nowrap text-end">청구주소</h3>
                        <div className="flex flex-col w-4/5">
                            <div className="flex flex-row">
                                <input
                                    className="input-style w-1/5"
                                    type="text"
                                    value={paymentInfo?.AddressNumber}
                                    readOnly
                                />
                                <input
                                    className="input-style w-4/5"
                                    type="text"
                                    value={paymentInfo?.billingAddress}
                                    readOnly
                                />
                            </div>
                            <div className="flex flex-row gap-1">
                                <input
                                    className="input-style flex-grow"
                                    type="text"
                                    value={paymentInfo?.addressDetail}
                                    readOnly
                                />
                                <h3 className="whitespace-nowrap text-end">세금계산서발행</h3>
                                <input
                                    className="input-style text-center w-1/12"
                                    type="text"
                                    value={paymentInfo?.issueTaxInvoice}
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/5 whitespace-nowrap text-end">납부방법</h3>
                        <div className="flex flex-row w-4/5">
                            <input
                                className="input-style text-center w-1/3"
                                type="text"
                                value={paymentInfo?.paymentMethod}
                            />
                            <input
                                className="input-style text-center w-1/3"
                                type="text"
                                value={paymentInfo?.paymentDate}
                            />
                            <input
                                className="input-style w-1/3"
                                type="text"
                                value={paymentInfo?.paymentMethodDetail}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/5 whitespace-nowrap text-end">은행/카드사</h3>
                        <div className="w-4/5 flex flex-row gap-1">
                            <input
                                className="input-style text-center w-1/3"
                                type="text"
                                value={paymentInfo?.bankOrCardCompany}
                            />
                        <h3 className="whitespace-nowrap text-end w-1/3">카드/계좌번호</h3>
                        <input
                            className="input-style text-center w-1/3"
                            type="text"
                            value={paymentInfo?.accountOrCardNumber}
                        />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full gap-1 py-1">
                    <div className="flex flex-row justify-end gap-1">
                        <button className="btn-style px-1">자납변경</button>
                        <button className="btn-style px-1">인출일정</button>
                        <button className="btn-style px-1">청구정보관리</button>
                        <button className="btn-style px-1">기본약정/할부지원</button>
                    </div>
                    <div className="flex flex-row justify-end gap-1">
                        <button className="btn-style px-1">입금전용계좌</button>
                        <button
                            disabled
                            className="btn-style px-1">청구서 반송내역</button>
                    </div>
                </div>
            </div>
        </div>
    )
}