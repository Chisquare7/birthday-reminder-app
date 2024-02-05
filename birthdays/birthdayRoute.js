const express = require("express")
const controller = require("./birthdayController")

const birthdayRouter = express.Router()

birthdayRouter.post("/add-birthday", controller.createBirthday);

module.exports = birthdayRouter;