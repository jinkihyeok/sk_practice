export interface PhoneNumber {
    firstNumber: string;
    secondNumber: string;
    thirdNumber: string;
}

export interface ServiceAccount {
    serviceNumber: string;
    customerNumber: string;
    customerName: string;
    gender: string;
    billingAccountNumber: string;
    billingCustomerNumber: string;
    billingCustomerName: string;
    serviceAccountNumber: string;
    paymentInfo: string;
    billingInfo: string;
}

export interface ConsultationInfo {
    serviceNumber: string;
    accountNumber: string;
    serviceType: string;
    serviceStatus: string;
    ratePlan: string;
    device: string;
    businessNumber: string;
    businessName: string;
}

export interface ConsultationDetail {
    serviceNumber: string;
    corporateName: string;
    subscriptionDate: string;
    cancellationDate: string;
    serviceStatus: string;
    subscriptionType: string;
    manufacturer: string;
    os: string;
    serialNumber: string;
    networkType: string;
    numberPortability: string;
    welfareDiscount: string;
    planName: string;
    usageType: string;
    simType: string;
    simName: string;
    simFirstNumber: string;
    simSecondNumber: string;
    deviceNickname: string;
    deviceType: string;
    isMinor: string;
    legalGuardian: string;
}

export interface BillingInfo {
    billingDate: string;
    billingAmount: number;
    unpaidBalance: number;
    serviceCount: number;
    serviceNumber: string;
}

export interface PaymentInfo {
    serviceNumber: string;
    billingType: string;
    billingName: string;
    AddressNumber: string;
    billingAddress: string;
    addressDetail: string;
    issueTaxInvoice: string;
    paymentMethod: string;
    paymentDate: string;
    paymentMethodDetail: string;
    bankOrCardCompany: string;
    accountOrCardNumber: string;
}

export interface SelectOptionType {
    value: string;
    label: string;
    isDefault?: boolean;
}