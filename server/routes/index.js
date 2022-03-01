var express = require("express");
var router = express.Router();
var userRegistration = require("./register");
var userLogin = require("./login");

router.post("/register", userRegistration);
router.post("/login", userLogin.UserLogin);
router.post("/change-password", userLogin.changePassword);

module.exports = router;
