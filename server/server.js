const express = require('express');
const app = express();
const port = 8000;

const recordsRouter = require("./controller/records");
const invoicesRouter = require("./controller/invoices");


app.use("/records", recordsRouter);
app.use("/invoices", invoicesRouter);

app.get("/", (req, res) => {
  res.send({ express: "Backend connected to React" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});