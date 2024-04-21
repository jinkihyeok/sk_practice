import SectionHeader from "../common/SectionHeader";
import { useContext } from "react";
import { GlobalStateContext } from "../../context/GlobalStateContext";

export default function ClientInfo() {
    const { state } = useContext(GlobalStateContext);
    const consultationInfoList = state.selectedConsultationInfo;

    return (
        <div className="section-style">
            <SectionHeader title="고객상담 정보" />
            <div className="overflow-y-auto text-xs" style={{ maxHeight: "200px" }}>
                <table className="table-auto w-full">
                    <thead>
                    <tr className="table-header-style">
                        <th className="text-center">선택</th>
                        <th className="text-center">서비스계정번호</th>
                        <th className="text-center">서비스구분</th>
                        <th className="text-center">서비스번호</th>
                        <th className="text-center">서비스상태</th>
                        <th className="text-center">요금제</th>
                        <th className="text-center">단말기</th>
                        <th className="text-center">사업자번호</th>
                        <th className="text-center">사업자명</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-600 text-center">
                    {consultationInfoList.map((consultationInfo, index) => (
                        <tr
                            key={index}
                            className={`border-b border-gray-200 hover:bg-gray-100 ${
                                index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }`}
                        >
                            <td className="px-1">
                                <input type="checkbox" />
                            </td>
                            <td className="px-1 border">{consultationInfo.accountNumber}</td>
                            <td className="px-1 border">{consultationInfo.serviceType}</td>
                            <td className="px-1 border">{consultationInfo.serviceNumber}</td>
                            <td className="px-1 border">{consultationInfo.serviceStatus}</td>
                            <td className="px-1 border">{consultationInfo.ratePlan}</td>
                            <td className="px-1 border">{consultationInfo.device}</td>
                            <td className="px-1 border">{consultationInfo.businessNumber}</td>
                            <td className="px-1 border">{consultationInfo.businessName}</td>
                        </tr>
                    ))}
                    {Array(4 - consultationInfoList.length)
                        .fill(null)
                        .map((_, index) => (
                            <tr
                                key={`empty-${index}`}
                                className={`border-b border-gray-200 h-5 ${
                                    (consultationInfoList.length + index) % 2 === 0 ? "bg-white" : "bg-gray-50"
                                }`}
                            >
                                <td className="px-1"></td>
                                <td className="px-1 border"></td>
                                <td className="px-1 border"></td>
                                <td className="px-1 border"></td>
                                <td className="px-1 border"></td>
                                <td className="px-1 border"></td>
                                <td className="px-1 border"></td>
                                <td className="px-1 border"></td>
                                <td className="px-1 border"></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}