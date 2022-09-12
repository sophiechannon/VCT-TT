let csvToJson = require('convert-csv-to-json');

class Record {
  constructor() {
    this.recordsAsJson = [];
  }

  getRecordsAsJson() {
    // ensures most up to date results are stored
    this.#parseCSV()
    return this.recordsAsJson;
  }

  getCaseById(caseId) {
    return this.getRecordsAsJson().filter(record => record.CASEID == caseId)
  }

  #parseCSV() {
    this.recordsAsJson = csvToJson.fieldDelimiter(',').getJsonFromCsv(__dirname+"/data.csv");
  }
}

module.exports = Record;