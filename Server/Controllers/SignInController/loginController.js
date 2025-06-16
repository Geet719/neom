const bcrypt = require("bcrypt");
const pool = require("../../Config/database");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const query1 = `SELECT * FROM users WHERE email_id = $1;`;
    let user = await pool.query(query1, [email]);

    if (user.rows.length === 0) {
      return res.json({ message: "Email is not correct" });
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.json({ message: "invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user.rows[0].user_id, email: user.rows[0].email_id },
      process.env.JWT_SECRET,
      { expiresIn: "14d" }
    );

    console.log("signing in token", token);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Strict",
      maxAge: 43 * 43 * 1000,
    });

    res.status(201).json({
      message: "User registered successfully",
      redirectUrl: `${process.env.FRONTEND_URL}/`,
    });
    
  } catch (error) {
    console.error("Sign-in error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = loginController;
