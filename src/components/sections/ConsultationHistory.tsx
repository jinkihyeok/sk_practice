import React, {useState} from "react";
import {consultationHistoryTableHeaders, consultationHistoryTabs} from "../../constants";
import Pagination from "../../utils/Pagination";
import consultationHistoryData from '../../dummyData/ConsultationHistoryData.json';
import {ConsultationHistoryType} from "../../types";

const consultationHistory: ConsultationHistoryType[] = consultationHistoryData as ConsultationHistoryType[];

export default function ConsultationHistory() {
    const [activeTab, setActiveTab] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = consultationHistory.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


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
                {currentItems.map((item, index) => (
                    <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
                    >
                        <td className="border text-center">{item.consultationDate}</td>
                        <td className="border text-center">{item.consultationTime}</td>
                        <td className="border text-center">{item.phoneNumber}</td>
                        <td className="border text-center">{item.consultationType}</td>
                        <td className="border text-center">{item.memo}</td>
                        <td className="border text-center">{item.status}</td>
                        <td className="border text-center">{item.consultant}</td>
                        <td className="border text-center">{item.contactType}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <Pagination
                itemsPerPage={itemsPerPage}
                totalItems={consultationHistory.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
    );
}