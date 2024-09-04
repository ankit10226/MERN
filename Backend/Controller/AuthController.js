const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Models/User");

exports.login = async (req, res) => {
  const { username, password } = req.body.formData;
  try {
    let user = await User.findAll({
      limit: 1,
      where: {
        username: username,
      },
    });

    if (user.length === 0) {
      return res.status(400).json({ message: "User Not Found" });
    }

    user = user[0]; 
    const isMatch = await bcrypt.compare(password, user.dataValues.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    } 

    const token = jwt.sign(
      { id: user.dataValues.id, username: user.dataValues.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token: token, id: user.dataValues.id, username: user.dataValues.username });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.signup = async (req, res) => {
  try {
    const { username, email, password, age } = req.body.formData;

    if (!username || !email || !password || !age) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      age,
    });

    res.status(201).json({
      user,
      message: "User created successfully",
    });
  } catch (err) {
    console.error("Signup error:", err);

    if (err.name === "SequelizeUniqueConstraintError") {
      const errorMessages = err.errors.map((e) => e.message);
      return res.status(400).json({ message: errorMessages.join(", ") });
    }
    res
      .status(500)
      .json({ message: err.message || "An error occurred during signup" });
  }
};
