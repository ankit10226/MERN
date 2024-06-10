const UserModel = require('../Models/Users');
const bcrypt = require('bcrypt');

const signup = async (req,res)=>{
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
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    signup
}