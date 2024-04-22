import React, {useContext} from "react";
import SectionHeader from "../common/SectionHeader";
import {GlobalStateContext} from "../../context/GlobalStateContext";
import {billingInfoTableHeaders} from "../../constants";

export default function BillingInfo() {
    const {state} = useContext(GlobalStateContext);
    const billingInfo = state.selectedBillingInfo;

    return (
        <div className="section-style col-span-1 flex flex-col text-xs">
            <SectionHeader title="청구정보"/>
            <div className="flex flex-col w-full flex-grow">
                <div className="overflow-y-auto max-h-[130px]">
                    <table className="table-auto w-full">
                        <thead>
                        <tr className="table-header-style">
                            {billingInfoTableHeaders.map((header, index) => (
                                <th key={index} className="px-1 border">{header}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody className="text-gray-600 text-center">
                        {billingInfo.map((info, index) => (
                            <tr
                                key={index}
                                className={`border-b border-gray-200 hover:bg-gray-100 h-5 ${
                                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                }`}
                            >
                                <td className="px-1 border">{info.billingDate}</td>
                                <td className="px-1 border">{info.billingAmount}</td>
                                <td className="px-1 border">{info.unpaidBalance || "0"}</td>
                                <td className="px-1 border">{info.serviceCount}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col flex-grow justify-center gap-2 text-xs p-1 bg-gray-200">
                    <div className="flex flex-row w-full gap-1">
                        <div className="flex flex-row gap-1 items-center w-1/3">
                            <h3 className="whitespace-nowrap text-end w-1/3">미납월수</h3>
                            <input className="input-style w-2/3" type="text"/>
                        </div>
                        <div className="flex flex-row gap-1 items-center w-1/3">
                            <h3 className="whitespace-nowrap text-end w-1/3">미납금액</h3>
                            <input className="input-style w-2/3" type="text"/>
                        </div>
                        <div className="flex flex-row gap-2 w-1/3">
                            <button
                                disabled
                                className="btn-style px-2">서비스별
                            </button>
                            <button
                                disabled
                                className="btn-style px-1 flex-grow">수납이력
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-row w-full gap-1">
                        <div className="flex flex-row gap-1 items-center w-1/3">
                            <h3 className="whitespace-nowrap text-end w-1/3">당월청구</h3>
                            <input className="input-style w-2/3" type="text"/>
                        </div>
                        <div className="flex flex-row gap-1 items-center w-1/3">
                            <h3 className="whitespace-nowrap text-end w-1/3">후청구금액</h3>
                            <input className="input-style w-2/3" type="text"/>
                        </div>
                        <div className="flex flex-row gap-2 w-1/3">
                            <button
                                disabled
                                className="btn-style px-2">청구서별
                            </button>
                            <button
                                disabled
                                className="btn-style px-1 flex-grow">당월사용요금
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}