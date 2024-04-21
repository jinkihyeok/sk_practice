export const serviceNumberOptions = [
    {value: 'service_number', label: '서비스번호', isDefault: true},
    {value: 'corporate_number', label: '법인번호'},
    {value: 'business_number', label: '사업자번호'},
    {value: 'foreign_registration_number', label: '외국인등록번호'},
    {value: 'passport_number', label: '여권번호'},
    {value: 'customer_account_number', label: '고객계정번호'}
];

export const firstNumberOptions = [
    {value: '010', label: '010'}
];

export const consultationHistoryTabs = [
    { title: "고객상담이력" },
    { title: "미납상담이력" },
    { title: "SMS전송이력" },
];

export const consultationHistoryTableHeaders = [
    [
        "상담일자",
        "상담시각",
        "통화번호",
        "상담유형",
        "메모",
        "처리상태",
        "상담원",
        "접촉구분",
    ],
    [
        "상담일",
        "상담시각",
        "상담조치",
        "통화유형",
        "약속일",
        "수납방법",
        "약속금액",
        "통화번호",
        "상담원",
        "센터",
        "이벤트",
    ],
    ["발송일", "발송시각", "처리상태", "발송메시지", "회선번호", "발송자사번", "발송자명"],
];

export const clientInfoTableHeaders = [
    "선택",
    "서비스계정번호",
    "서비스구분",
    "서비스번호",
    "서비스상태",
    "요금제",
    "단말기",
    "사업자번호",
    "사업자명",
];