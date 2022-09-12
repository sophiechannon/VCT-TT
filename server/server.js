const express = require('express');
const app = express();
const port = 8000;

const recordsRouter = require("./controller/records");

app.use("/records", recordsRouter);

app.get("/", (req, res) => {
  res.send({ express: "Backend connected to React" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});