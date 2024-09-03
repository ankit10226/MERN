const UserModel = require('../Models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => { 
    const { username, password } = req.body; 
    try {
        const user = await UserModel.findOne({ username });      
        if (!user) {
            return res.status(400).json({ message: 'User Not Found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid Password' });
        }   

        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        );

        res.json({ 'token':token, 'id': user._id, 'username': user.username });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.signup = async (req,res)=>{
    try { 
        const { name, username, password, age } = req.body.formData; 
 
        if (!name || !username || !password || !age) {
            return res.status(400).json({ message: 'All fields are required' });
        } 
 
        const hashedPassword = await bcrypt.hash(password, 10);
 
        const user = await UserModel.create({
            name,
            username,
            password: hashedPassword,
            age
        });
 
        res.status(201).json({
            user,
            message: 'User created successfully'
        });
    } catch (err) {
        console.error('Signup error:', err);
        res.status(500).json({ message: err });
    }
}
// module.exports = {
//     login
// };
