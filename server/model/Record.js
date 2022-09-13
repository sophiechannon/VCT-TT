const csv = require("csvtojson");
// const csvToJson = require('convert-csv-to-json');

class Record {
  constructor() {
    this.recordsAsJson = [];
  }

  getRecordsAsJson() {
    let result;
    csv()
      .fromFile(__dirname + "/data.csv")
      .then((jsonObj) => {
        result = jsonObj;
      });
    return result;
  }

  getCaseById(caseId) {
    return this.getRecordsAsJson().filter((record) => record.CASEID == caseId);
  }

  getInvoiceByMonthAndClient(month, client) {
    let allClient = this.getRecordsAsJson().filter(
      (record) => record.HOSPITAL == client
    );
    return allClient.filter((record) =>
      record.FIRSTCLOSUREDATE.includes(month)
    );
  }

  // #parseCSV() {
  //   this.recordsAsJson = csvToJson.fieldDelimiter(',').getJsonFromCsv(__dirname+"/data.csv");
  // }
}

module.exports = Record;
