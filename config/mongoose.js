const mongoose = require('mongoose')
require("dotenv").config();


async function databaseConnect() {
    try {

        await mongoose.connect(process.env.DB_URL, {
          serverSelectionTimeoutMS: 60000,
        });
        
        console.log("Database connection successful");
    } catch (error) {

        console.log("Database connection failed", error);
    }
}

module.exports = { databaseConnect };