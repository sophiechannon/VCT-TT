let csvToJson = require('convert-csv-to-json');

class Records {
  constructor() {
    this.recordsAsJson = [];
  }

  getRecordsAsJson() {
    // ensures most up to date results are stored
    this.#parseCSV()
    return this.recordsAsJson;
  }

  #parseCSV() {
    this.recordsAsJson = csvToJson.fieldDelimiter(',').getJsonFromCsv(__dirname+"/data.csv");
  }
}

module.exports = Records;