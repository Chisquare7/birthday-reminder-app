const express = require("express")
const controller = require("./birthdayController")
const middleware = require("./birthdayMiddlewares")

const birthdayRouter = express.Router()

birthdayRouter.post("/add-birthday", middleware.birthdayValidator, controller.createBirthday);

module.exports = birthdayRouter;