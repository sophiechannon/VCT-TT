const express = require("express");
const router = express.Router();
const Record = require ("../model/Record");

router.get("/:id", (req, res) => {
  const record = new Record();
  const result = record.getCaseById(req.params.id) // hardcoded for now
  console.log(result);
  res.send(result);
});

module.exports = router;