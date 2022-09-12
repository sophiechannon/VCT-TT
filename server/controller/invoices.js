const express = require("express");
const router = express.Router();
const Record = require ("../model/Record");

router.get("/:date&:client", (req, res) => {
  const record = new Record();
  const result = record.getInvoiceByMonthAndClient(req.params.date, req.params.client) // hardcoded for now
  console.log(result);
  res.send(result);
});

module.exports = router;