const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
  // code to check route is working initially
    console.log("RECORDS");
    res.send("RECORDS");
});

module.exports = router;