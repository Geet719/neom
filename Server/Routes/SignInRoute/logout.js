const express = require("express");
const logoutController = require("../../Controllers/SignInController/logoutController");

const router = express.Router();

router.post("/", logoutController);

module.exports = router;
