const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const birthdaySchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    dob: { type: mongoose.Schema.Types.Date, required: true },
  },
  { collection: "birthdays" }
);

birthdaySchema.pre('save', function (next) {
  // convert the dob field to a local date string
  this.dob = this.dob.toLocaleDateString();
  next();
});

const birthdayModel = mongoose.model("birthdays", birthdaySchema);

module.exports = birthdayModel;
