"use strict";
exports.__esModule = true;
var fs = require("fs");
function generateDummyData() {
    var consultationHistoryData = [];
    for (var i = 1; i <= 100000; i++) {
        var data = {
            consultationId: i,
            serviceNumber: "0101234567".concat(i % 10),
            consultationDate: "2023-04-22",
            consultationTime: "10:30:00",
            phoneNumber: "0101234567".concat(i % 10),
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
function saveToFile(data) {
    var jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync('ConsultationHistoryData.json', jsonData, 'utf8');
    console.log('Data saved to ConsultationHistoryData.json');
}
var consultationHistoryData = generateDummyData();
saveToFile(consultationHistoryData);
