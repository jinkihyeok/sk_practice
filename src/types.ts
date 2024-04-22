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

export interface SelectOptionType {
    value: string;
    label: string;
    isDefault?: boolean;
}