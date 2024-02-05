const mongoose = require("mongoose")
// const shortid = require("shortid")

const Schema = mongoose.Schema

const birthdaySchema = new Schema({
    // _id: {
    //     type: String,
    //     default: shortid.generate(),
    //     unique: true,
    // },

    username: { type: String, required: true },
    email: { type: String, required: true },
    dob: {type: Date, required: true}
})

const birthdayModel = mongoose.model("Birthday", birthdaySchema);

module.exports = birthdayModel;