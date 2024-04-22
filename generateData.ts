import * as fs from 'fs';
import {ConsultationHistoryType} from "./src/types";

function generateDummyData() {
    const consultationHistoryData: ConsultationHistoryType[] = [];

    for (let i = 1; i <= 100000; i++) {
        const data: ConsultationHistoryType = {
            consultationId: i,
            serviceNumber: `0101234567${i % 10}`,
            consultationDate: "2023-04-22",
            consultationTime: "10:30:00",
            phoneNumber: `0101234567${i % 10}`,
            consultationType: "Product Inquiry",
            memo: "The customer inquired about how to use Product A. It would be helpful to refer to the manual.",
            status: "Completed",
            consultant: "Kim Cheolsu",
            contactType: "Inbound"
        };

        consultationHistoryData.push(data);
    }

    return consultationHistoryData;
}

function saveToFile(data: ConsultationHistoryType[]) {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync('ConsultationHistoryData.json', jsonData, 'utf8');
    console.log('Data saved to ConsultationHistoryData.json');
}

const consultationHistoryData = generateDummyData();
saveToFile(consultationHistoryData);
