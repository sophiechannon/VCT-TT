const Records = require('./Records');

describe("getJson", () => {
  it("returns CSV file as JSON", () => {
    const records = new Records();
    expect(records.getRecordsAsJson()[0].ISSUE_ID).toEqual("487916");
  });
  it("returns a specific records from JSON file", () => {
    const records = new Records();
    const result = records.getCaseById("VETCT-121");
    expect(result[0].PATIENT).toEqual("Michele Roberts");
    expect(result.length).toEqual(1);

  });
});