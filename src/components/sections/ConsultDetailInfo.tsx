import SectionHeader from "../common/SectionHeader";

export default function ConsultDetailInfo() {
    return (
        <div className="section-style col-span-1">
            <SectionHeader title="고객상담 상세정보"/>
            <div className="flex justify-center items-start p-2 text-xs bg-gray-200">
                <div className="flex flex-col gap-1 w-1/2">
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">소속법인명</h3>
                        <input type="text" className="input-style w-2/3"/>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">가입/해지일</h3>
                        <div className="w-2/3">
                            <input type="text" className="input-style w-1/2"/>
                            <input type="text" className="input-style w-1/2"/>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">서비스상태</h3>
                        <div className="flex flex-col w-2/3">
                            <input type="text" className="input-style"/>
                            <input type="text" className="input-style"/>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">제조사/OS</h3>
                        <div className="w-2/3">
                            <input type="text" className="input-style w-1/2"/>
                            <input type="text" className="input-style w-1/2"/>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">일련/사용일</h3>
                        <div className="w-2/3">
                            <input type="text" className="input-style w-1/3"/>
                            <input type="text" className="input-style w-1/3"/>
                            <input type="text" className="input-style w-1/3"/>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">방식</h3>
                        <div className="w-2/3">
                            <input type="text" className="input-style w-1/2"/>
                            <input type="text" className="input-style w-1/2"/>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">번호이동</h3>
                        <div className="w-2/3">
                            <input type="text" className="input-style w-2/3"/>
                            <input type="text" className="input-style w-1/3"/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-1 w-1/2">
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">복지할인</h3>
                        <div className="flex flex-row gap-1 w-2/3">
                            <input type="text" className="input-style w-4/5"/>
                            <button className="btn-style w-1/5">상세</button>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">요금제</h3>
                        <input type="text" className="input-style w-2/3"/>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">이용종류</h3>
                        <input type="text" className="input-style w-2/3"/>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">SIM유형</h3>
                        <div className="w-2/3 flex flex-row">
                            <input type="text" className="input-style w-1/5"/>
                            <input type="text" className="input-style w-1/5"/>
                            <input type="text" className="input-style w-1/5"/>
                            <input type="text" className="input-style w-2/5"/>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">단말기애칭</h3>
                        <div className="w-2/3">
                            <input type="text" className="input-style w-1/2"/>
                            <input type="text" className="input-style w-1/2"/>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">미성년자</h3>
                        <input type="text" className="input-style w-2/3"/>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">법정대리인</h3>
                        <input type="text" className="input-style w-2/3"/>
                    </div>
                    <div className="flex flex-row justify-end gap-2 ml-12">
                        <button className="btn-style w-1/2">이동전화변경</button>
                        <button className="btn-style w-1/2">단말할부</button>
                    </div>
                </div>
            </div>
        </div>
    )
}