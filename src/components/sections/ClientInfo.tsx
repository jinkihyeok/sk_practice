import SectionHeader from "../common/SectionHeader";

export default function ClientInfo() {
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
                    {Array(4)
                        .fill(null)
                        .map((_, index) => (
                            <tr
                                key={index}
                                className={`border-b border-gray-200 hover:bg-gray-100 ${
                                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                }`}
                            >
                                <td className="px-1">
                                    <input type="checkbox" />
                                </td>
                                <td className="px-1 border">1234567890</td>
                                <td className="px-1 border">휴대폰</td>
                                <td className="px-1 border">010-1234-5678</td>
                                <td className="px-1 border">사용중</td>
                                <td className="px-1 border">5G 스페셜</td>
                                <td className="px-1 border">Galaxy S21</td>
                                <td className="px-1 border">123-45-67890</td>
                                <td className="px-1 border">SK텔레콤</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}