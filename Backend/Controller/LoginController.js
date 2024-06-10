const UserModel = require('../Models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => { 
    const { username, password } = req.body;
    console.log(username,password);
    // try {
    //     const user = await UserModel.findOne({ username });
    //     if (!user) {
    //         return res.status(400).json({ message: 'Invalid username or password' });
    //     }

    //     const isMatch = await bcrypt.compare(password, user.password);
    //     if (!isMatch) {
    //         return res.status(400).json({ message: 'Invalid username or password' });
    //     }

    //     const token = jwt.sign(
    //         { id: user._id, username: user.username },
    //         process.env.JWT_SECRET,  // Use your secret key from environment variables
    //         { expiresIn: '1h' }
    //     );

    //     res.json({ token });
    // } catch (err) {
    //     console.error(err);
    //     res.status(500).json({ message: 'Server error' });
    // }
};

module.exports = {
    login
};