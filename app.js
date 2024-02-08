const express = require("express");
const bodyParser = require("body-parser");
const { databaseConnect } = require("./config/mongoose");
const birthdayRoute = require("./birthdays/birthdayRoute");
const runTimedJob = require("./scheduler/cron");
const cron = require("node-schedule");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

mongoose.set("debug", true);
databaseConnect();

app.use(bodyParser.json());
app.use("/", birthdayRoute);

cron.scheduleJob("0 2 4 * * *", async function () {
  console.info("cron scheduler started running");
  await runTimedJob();
});


app.listen(PORT, () => {
  console.log(`server started running at: http://localhost:${PORT}`);
});
