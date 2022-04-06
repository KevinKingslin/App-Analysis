var express = require("express");
var router = express.Router();
var userRegistration = require("./register");
var userLogin = require("./login");
var checkAuth = require("./checkAuth");
var nmap = require("./nmap");
var metasploit = require("./metasploit");
var spike = require("./spike");

router.post("/register", userRegistration);
router.post("/login", userLogin.UserLogin);
router.post("/change-password", checkAuth, userLogin.changePassword); //checkAuth is used to secure the route
router.post("/user/nmap", checkAuth, nmap);
router.post("/user/metasploit", checkAuth, metasploit);
router.post("/user/spike", checkAuth, spike);
module.exports = router;
