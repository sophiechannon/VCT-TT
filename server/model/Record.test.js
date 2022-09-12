const Record = require('./Record');

describe("getJson", () => {
  
  it("returns CSV file as JSON", () => {
    const records = new Record();
    expect(records.getRecordsAsJson()[0].ISSUE_ID).toEqual("487916");
  });

  it("returns a specific records from JSON file", () => {
    const records = new Record();
    const result = records.getCaseById("VETCT-121");
    expect(result[0].PATIENT).toEqual("Michele Roberts");
    expect(result.length).toEqual(1);
  });
});