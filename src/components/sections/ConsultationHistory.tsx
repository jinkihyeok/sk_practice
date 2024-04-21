import React, {useState} from "react";
import {consultationHistoryTableHeaders, consultationHistoryTabs} from "../../constants";

export default function ConsultationHistory() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="mt-4 text-xs">
            <div className="flex justify-between">
                <div className="flex flex-row items-center">
                {consultationHistoryTabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`px-2 cursor-pointer border bg-gray-100 ${
                            activeTab === index
                                ? "font-semibold border-2"
                                : "text-gray-700"
                        }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.title}
                    </div>
                ))}
                </div>
                <div className="flex flex-row gap-3 mb-2">
                    <button className="btn-style px-3 !text-gray-400">번호관리 이력조회</button>
                    <button className="btn-style px-3 !text-gray-400">고객접촉이력</button>
                    <button className="btn-style px-3 !text-gray-400">고객정보현행화</button>
                    <button className="btn-style px-3 !text-gray-400">SMS발송</button>
                </div>
            </div>
            <table className="table-auto w-full">
                <thead>
                <tr className="table-header-style">
                    {consultationHistoryTableHeaders[activeTab].map((header, index) => (
                        <th key={index}>
                            {header}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {Array(5)
                    .fill(null)
                    .map((_, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}
                        >
                            {consultationHistoryTableHeaders[activeTab].map((_, cellIndex) => (
                                <td key={cellIndex} className="border text-center">
                                    데이터 {rowIndex + 1}-{cellIndex + 1}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}