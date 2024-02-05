const express = require('express')
const bodyParser = require('body-parser')
const { databaseConnect } = require("./config/mongoose");
const birthdayRoute = require("./birthdays/birthdayRoute");
const runTimedJob = require("./scheduler/cron");
require('dotenv').config();


const PORT = process.env.PORT;

const app = express();

databaseConnect();


app.use(bodyParser.json());
app.use("/", birthdayRoute);

runTimedJob();


app.listen(PORT, () => {
	console.log(`server started running at: http://localhost:${PORT}`);
});
