const Records = require('./Records');

describe("getJson", () => {
  it("returns CSV file as JSON", () => {
    const records = new Records();
    expect(records.getRecordsAsJson()[0].ISSUE_ID).toEqual("487916");
  });
});