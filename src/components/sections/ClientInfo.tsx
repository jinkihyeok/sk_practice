import SectionHeader from "../common/SectionHeader";

export default function ClientInfo() {
    return (
        <div className="my-2 rounded overflow-hidden">
            <SectionHeader title="고객상담 정보" />
            <div className="overflow-y-auto" style={{ maxHeight: "200px" }}>
                <table className="table-auto w-full text-xs">
                    <thead>
                    <tr className="bg-gray-200 text-gray-600 text-xs">
                        <th className="py-2 px-4 text-center">선택</th>
                        <th className="py-2 px-4 text-center">서비스계정번호</th>
                        <th className="py-2 px-4 text-center">서비스구분</th>
                        <th className="py-2 px-4 text-center">서비스번호</th>
                        <th className="py-2 px-4 text-center">서비스상태</th>
                        <th className="py-2 px-4 text-center">요금제</th>
                        <th className="py-2 px-4 text-center">단말기</th>
                        <th className="py-2 px-4 text-center">사업자번호</th>
                        <th className="py-2 px-4 text-center">사업자명</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-600 text-xs text-center">
                    {Array(4)
                        .fill(null)
                        .map((_, index) => (
                            <tr
                                key={index}
                                className={`border-b border-gray-200 hover:bg-gray-100 ${
                                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                }`}
                            >
                                <td className="py-2 px-4">
                                    <input type="checkbox" />
                                </td>
                                <td className="py-2 px-4">1234567890</td>
                                <td className="py-2 px-4">휴대폰</td>
                                <td className="py-2 px-4">010-1234-5678</td>
                                <td className="py-2 px-4">사용중</td>
                                <td className="py-2 px-4">5G 스페셜</td>
                                <td className="py-2 px-4">Galaxy S21</td>
                                <td className="py-2 px-4">123-45-67890</td>
                                <td className="py-2 px-4">SK텔레콤</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}