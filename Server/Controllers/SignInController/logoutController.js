const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Logout Controller
const logoutController = async (req, res) => {
  try {
    // Clear the JWT token cookie
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "Strict",
      secure: true, // Use true only if your site runs on HTTPS (which it does on Render)
    });

    res.status(200).json({
      message: "Logout successful",
      redirectUrl: `${process.env.FRONTEND_URL}/login`,
    });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = logoutController;
