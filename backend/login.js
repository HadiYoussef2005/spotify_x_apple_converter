const User = require('./models/user');

const login = async (res, email, password) => {
    let message = "";
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        if (password === existingUser.password) {
            message = "Login Successful!";
            console.log(message);
            return res.status(200).json({ message: message });
        } else {
            message = "Wrong Password";
            console.log(message);
            return res.status(400).json({ message: message });
        }
    } else {
        message = "User not found";
        console.log(message);
        return res.status(404).json({ message: message });
    }
};

module.exports = login;
