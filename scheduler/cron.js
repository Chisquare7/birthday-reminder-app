const schedule = require("node-schedule");
const moment = require("moment");
const Birthday = require("../model/birthdayModel");
const { birthdayEmail } = require("../mailerMessage/birthdayMessages");

function runTimedJob() {
	const timedJob = schedule.scheduleJob("25 5 * * *", async () => {
		try {
			// const todayDate = new Date().toLocaleDateString();
			const todayDate = moment().format("YYYY-MM-DD");

			const celebrantsWithBirthdays = await Birthday.find({ dob: todayDate });

			if (celebrantsWithBirthdays.length > 0) {
				const emails = celebrantsWithBirthdays.map(
					(celebrants) => celebrants.email
				);
				birthdayEmail(emails);
			}
		} catch (error) {
			console.error("Oops! Error encountered in scheduling job:", error);
		}
    });
    return timedJob;
}

module.exports = runTimedJob;
