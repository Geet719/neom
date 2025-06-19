const express = require("express");
const logoutController = require("../../Controllers/SignIn/logoutController");

const router = express.Router();

router.post("/", logoutController);

module.exports = router;
