const express = require("express");
const upload = require("../../Middleware/Multer.js");

const {
  googleAuthController,
  googleAuthControllerCallback,
} = require("../../Controllers/AuthenticationController/googleAuthenticationControllers");
const router = express.Router();
console.log("this is google router file");
router.get("/google", googleAuthController);
router.get("/google/callback",googleAuthControllerCallback); 
// ,upload.single("profilePic")

module.exports = router;
