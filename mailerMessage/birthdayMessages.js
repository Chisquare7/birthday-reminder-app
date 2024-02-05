const nodemailer = require("nodemailer")

const birthdayEmail = (emails) => {

    const mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "your-email@gmail.com",
            pass: "your-email-password",
        }
    });

    const mailStructures = {
        from: "your-email@gmail.com",
        to: emails.join(', '),
        subject: "Happy Birthday!",
        text: "Wishing you a great and fantanstic new year, as you celebrate your birthday",
    };

    console.log("Emails to send:", emails);
    
    mailTransporter.sendMail(mailStructures, (error, info) => {
        if (error) {
            console.error("Oops! Error encountered when sending email:", error);
        } else {
            console.log("Hurray! Email sent successfully:", info.response)
        }
    })
}


module.exports = { birthdayEmail };