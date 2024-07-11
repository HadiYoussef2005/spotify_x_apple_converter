const User = require('./models/user');

const registerUser = async (res, email, password) => {
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            console.log("The email already exists")
            return res.status(400).json({ message: 'This email already exists' });
        }

        const newUser = new User({ email, password });
        await newUser.save();
        res.status(201).json({ message: 'User Registered Successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = registerUser;
