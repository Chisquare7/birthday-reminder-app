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
app.use(express.static("public"));
app.use("/", birthdayRoute);

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

cron.scheduleJob("0 8 17 * * *", async function () {
  console.info("cron scheduler started running");
  await runTimedJob();
});


app.listen(PORT, () => {
  console.log(`server started running at: http://localhost:${PORT}`);
});
