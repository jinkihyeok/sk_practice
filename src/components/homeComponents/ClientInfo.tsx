import SectionHeader from "../common/SectionHeader";
import {useContext, useState} from "react";
import { GlobalStateContext } from "../../contexts/GlobalStateContext";
import {clientInfoTableHeaders} from "../../libs/constants";
import {ConsultationInfo} from "../../types";
import {GenerateEmptyArray} from "../../utils/GenerateEmptyArray";

export default function ClientInfo() {
    const { state } = useContext(GlobalStateContext);
    const consultationInfoList = state.selectedConsultationInfo;
    const [checkedInfo, setCheckedInfo] = useState<ConsultationInfo>();

    const handleCheckChange = (consultationInfo: ConsultationInfo) => {
        setCheckedInfo(consultationInfo);
    }

    return (
        <div className="section-style">
            <SectionHeader title="고객상담 정보" />
            <div className="overflow-y-auto" style={{ maxHeight: "200px" }}>
                <table className="table-auto w-full">
                    <thead>
                    <tr className="table-header-style">
                        {clientInfoTableHeaders.map((header, index) => (
                            <th key={index} className="border-x">{header}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody className="text-gray-600 text-center">
                    {consultationInfoList.map((consultationInfo, index) => (
                        <tr
                            key={index}
                            className={`border-b border-gray-200 cursor-pointer ${
                                checkedInfo?.serviceNumber === consultationInfo.serviceNumber || (index === 0 && !checkedInfo)
                                    ? "text-white bg-neutral-500"
                                    : index % 2 === 0
                                        ? "bg-white"
                                        : "bg-gray-50"
                            }`}
                            onClick={() => handleCheckChange(consultationInfo)}
                        >
                            <td className="px-1">
                                <input
                                    type="checkbox"
                                    checked={checkedInfo?.serviceNumber === consultationInfo.serviceNumber || (index === 0 && !checkedInfo)}
                                    readOnly
                                />
                            </td>
                            <td>{consultationInfo.accountNumber}</td>
                            <td>{consultationInfo.serviceType}</td>
                            <td>{consultationInfo.serviceNumber}</td>
                            <td>{consultationInfo.serviceStatus}</td>
                            <td>{consultationInfo.ratePlan}</td>
                            <td>{consultationInfo.device}</td>
                            <td>{consultationInfo.businessNumber}</td>
                            <td>{consultationInfo.businessName}</td>
                        </tr>
                    ))}
                    <GenerateEmptyArray arrayLength={4} dataLength={consultationInfoList.length} columnLength={9} />
                    </tbody>
                </table>
            </div>
        </div>
    );
}