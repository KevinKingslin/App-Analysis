var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var bcrytpt = require("bcryptjs");
var User = require("../models/user");

const userRegistration = async (req, res) => {
  console.log(await req.body);
  var { email, username, password } = req.body;

  if (!email || typeof email != "string") {
    res.status(400);
    return res.json({ status: "error", error: "Invalid email id" });
  }

  if (!username || typeof username != "string") {
    res.status(400);
    return res.json({ status: "error", error: "Invalid username" });
  }

  if (!password || typeof password != "string") {
    res.status(400);
    return res.json({ status: "error", error: "Invalid password" });
  }

  if (password.length < 6) {
    res.status(400);
    return res.json({
      status: "error",
      error: "Password two small should be at least 7 characters",
    });
  }

  var salt = await bcrytpt.genSalt(10);
  //bcrypt is used to protect the password using encryption
  password = await bcrytpt.hash(password, salt);
  try {
    const response = await User.create({
      username: username,
      password: password,
      email: email,
    });
    console.log("User created successfully : ", response);
  } catch (error) {
    console.log(error.message);
    if (error.code === 11000) {
      res.status(400);
      return res.json({ status: "error", error: "username already in use" });
    }
    throw error;
  }
  res.status(201);
  res.json({ status: "ok" });
};

module.exports = userRegistration;
