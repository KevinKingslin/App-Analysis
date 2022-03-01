var express = require("express");
var router = express.Router();
var userRegistration = require("./register");
var userLogin = require("./login");
const changePassword = require("./login");

router.post("/register", userRegistration);
router.post("/login", userLogin);
router.post("/change-password", changePassword);

module.exports = router;
