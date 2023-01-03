const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
require("./model/config");
app.use(bodyParser.json());
const router = require("./routes/commonRoutes");
var fs = require("fs");
const testRouter = require("./validation");

app.use("/", router);
app.use("/test", testRouter);

const server = app.listen(process.env.PORT, (req, res) => {
  console.log(`Server run in port no : ${process.env.PORT}`);
});

module.exports = server;
