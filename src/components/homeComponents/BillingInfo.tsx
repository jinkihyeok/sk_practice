import React, {useContext} from "react";
import SectionHeader from "../common/SectionHeader";
import {GlobalStateContext} from "../../contexts/GlobalStateContext";
import {billingInfoTableHeaders} from "../../libs/constants";
import {BillingInfo} from "../../types";
import {GenerateEmptyArray} from "../../utils/GenerateEmptyArray";

export default function BillingInfoSection() {
    const {state} = useContext(GlobalStateContext);
    const billingInfo: BillingInfo[] = state.selectedBillingInfo || [];

    const unpaidCount = billingInfo.reduce<number>((count: number, info: BillingInfo) => {
        return info.unpaidBalance !== 0 ? count + 1 : count;
    }, 0);

    const unpaidAmount = billingInfo.reduce<number>((total: number, info: BillingInfo) => {
        return total + info.unpaidBalance;
    }, 0);

    return (
        <div className="section-style col-span-1 flex flex-col">
            <SectionHeader title="청구정보"/>
            <div className="flex flex-col w-full flex-grow">
                <div className="overflow-y-auto max-h-[130px]">
                    <table className="table-auto w-full">
                        <thead>
                        <tr className="table-header-style sticky top-0">
                            {billingInfoTableHeaders.map((header, index) => (
                                <th key={index} className="border-x">{header}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody className="text-gray-600 text-center">
                        {billingInfo?.map((info, index) => (
                            <tr
                                key={index}
                                className={`border-b border-gray-200 hover:bg-gray-100 h-5 ${
                                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                }`}
                            >
                                <td className="">{info.billingDate}</td>
                                <td>{info.billingAmount.toLocaleString()}</td>
                                <td>{(info.unpaidBalance || 0).toLocaleString()}</td>
                                <td>{info.serviceCount}</td>
                            </tr>
                        ))}
                        {billingInfo.length <= 6 &&
                        <GenerateEmptyArray arrayLength={6} dataLength={billingInfo.length} columnLength={4}/>}
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col flex-grow justify-center gap-2 p-1 bg-gray-200">
                    <div className="flex flex-row w-full gap-1">
                        <div className="flex flex-row gap-1 items-center w-1/3">
                            <h3 className="w-1/3 input-title">미납월수</h3>
                            <input
                                className="disabled-input-style text-end w-2/3"
                                type="text"
                                value={unpaidCount.toString()}
                                readOnly
                            />
                        </div>
                        <div className="flex flex-row gap-1 items-center w-1/3">
                            <h3 className="input-title w-1/3">미납금액</h3>
                            <input
                                className="disabled-input-style text-end w-2/3"
                                type="text"
                                value={unpaidAmount.toLocaleString()}
                                readOnly
                            />
                        </div>
                        <div className="flex flex-row justify-end gap-2 w-1/3">
                            <button
                                disabled={billingInfo.length === 0} className="btn-style px-2 w-2/5">서비스별
                            </button>
                            <button
                                disabled={billingInfo.length === 0}
                                className="btn-style px-1 w-3/5">수납이력
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row w-full gap-1">
                        <div className="flex flex-row gap-1 items-center w-1/3">
                            <h3 className="input-title w-1/3">당월청구</h3>
                            <input className="disabled-input-style w-2/3" type="text"/>
                        </div>
                        <div className="flex flex-row gap-1 items-center w-1/3">
                            <h3 className="input-title w-1/3">후청구금액</h3>
                            <input className="disabled-input-style w-2/3" type="text"/>
                        </div>
                        <div className="flex flex-row justify-end gap-2 w-1/3">
                            <button
                                disabled={billingInfo.length === 0}
                                className="btn-style px-2 w-2/5">청구서별
                            </button>
                            <button
                                disabled={billingInfo.length === 0}
                                className="btn-style px-1 w-3/5">당월사용요금
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}