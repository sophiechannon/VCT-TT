// const csv = require("csvtojson");
const csvToJson = require('convert-csv-to-json');

class Record {
  getRecordsAsJson() {
    // let result;
    // csv()
    //   .fromFile(__dirname + "/data.csv")
    //   .then((jsonObj) => {
    //     result = jsonObj;
    //   });
    // return result;
    return csvToJson.fieldDelimiter(',').getJsonFromCsv(__dirname+"/data.csv");
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
}

module.exports = Record;
