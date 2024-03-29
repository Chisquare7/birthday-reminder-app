const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const birthdaySchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: Date, required: true },
  },
  { collection: "birthdays" }
);

const birthdayModel = mongoose.model("birthdays", birthdaySchema);

module.exports = birthdayModel;
