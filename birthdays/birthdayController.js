const Birthday = require("../model/birthdayModel");

const createBirthday = async (req, res) => {
	try {
		const { username, email, dob } = req.body;
		const birthday = new Birthday({ username, email, dob });

		await birthday.save();

        res.json({ message: "Hey! Your Birthday details added successfully", birthday });
        
    } catch (error) {
        console.error("Oops! Error encountered when adding your birthday", error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

module.exports = { createBirthday };
