import SectionHeader from "../common/SectionHeader";
import {useContext} from "react";
import {GlobalStateContext} from "../../context/GlobalStateContext";

export default function ConsultDetailInfo() {
    const {state} = useContext(GlobalStateContext);
    const consultationDetail = state.selectedConsultationDetail;

    return (
        <div className="section-style col-span-1">
            <SectionHeader title="고객상담 상세정보"/>
            <div className="flex justify-center items-start p-2 text-xs bg-gray-200">
                <div className="flex flex-col gap-1 w-1/2">
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">소속법인명</h3>
                        <input
                            type="text"
                            className="input-style w-2/3"
                            value={consultationDetail?.corporateName}
                            readOnly
                        />
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">가입/해지일</h3>
                        <div className="w-2/3">
                            <input
                                type="text"
                                className="input-style w-1/2"
                                value={consultationDetail?.subscriptionDate}
                                readOnly
                            />
                            <input type="text" className="input-style w-1/2" value={consultationDetail?.cancellationDate} readOnly />
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">서비스상태</h3>
                        <div className="flex flex-col w-2/3">
                            <input type="text" className="input-style text-center" value={consultationDetail?.serviceStatus} readOnly />
                            <input type="text" className="input-style" value={consultationDetail?.subscriptionType} readOnly />
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">제조사/OS</h3>
                        <div className="w-2/3">
                            <input type="text" className="input-style w-1/2" value={consultationDetail?.manufacturer} readOnly />
                            <input type="text" className="input-style w-1/2" value={consultationDetail?.os} readOnly />
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">일련/사용일</h3>
                        <div className="w-2/3">
                            <input type="text" className="input-style w-1/3" value={consultationDetail?.serialNumber} readOnly />
                            <input type="text" className="input-style w-1/3" value="" readOnly />
                            <input type="text" className="input-style w-1/3" value="" readOnly />
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">방식</h3>
                        <div className="w-2/3">
                            <input type="text" className="input-style w-1/2" value={consultationDetail?.networkType} readOnly />
                            <input type="text" className="input-style w-1/2" value="" readOnly />
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">번호이동</h3>
                        <div className="w-2/3">
                            <input type="text" className="input-style w-2/3" value={consultationDetail?.numberPortability} readOnly />
                            <input type="text" className="input-style w-1/3" value="" readOnly />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-1 w-1/2">
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">복지할인</h3>
                        <div className="flex flex-row gap-1 w-2/3">
                            <input type="text" className="input-style w-4/5" value={consultationDetail?.welfareDiscount} readOnly />
                            <button
                                disabled
                                className="btn-style w-1/5">상세</button>
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">요금제</h3>
                        <input type="text" className="input-style w-2/3" value={consultationDetail?.planName} readOnly />
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">이용종류</h3>
                        <input type="text" className="input-style text-center w-2/3" value={consultationDetail?.usageType} readOnly />
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">SIM유형</h3>
                        <div className="w-2/3 flex flex-row">
                            <input type="text" className="input-style w-1/5" value={consultationDetail?.simType} readOnly />
                            <input type="text" className="input-style w-1/5" value={consultationDetail?.simName} readOnly />
                            <input type="text" className="input-style w-1/5" value={consultationDetail?.simFirstNumber} readOnly />
                            <input type="text" className="input-style w-2/5" value={consultationDetail?.simSecondNumber} readOnly />
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">단말기애칭</h3>
                        <div className="w-2/3">
                            <input type="text" className="input-style w-1/2" value={consultationDetail?.deviceNickname} readOnly />
                            <input type="text" className="input-style w-1/2" value={consultationDetail?.deviceType} readOnly />
                        </div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">미성년자</h3>
                        <input type="text" className="input-style text-center w-2/3" value={consultationDetail?.isMinor} readOnly />
                    </div>
                    <div className="flex flex-row gap-1">
                        <h3 className="w-1/3 text-end">법정대리인</h3>
                        <input type="text" className="input-style w-2/3" value={consultationDetail?.legalGuardian} readOnly />
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