var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var bcrytpt = require("bcryptjs");
var User = require("../models/user");
var jwt = require("jsonwebtoken");

const jwt_secret = "akslfash&*@#(askjsarjalsajl8999kfaskflj";

var UserLogin = async (req, res) => {
  var { username, password } = req.body;
  var user = await User.findOne({ username }).lean();

  if (!user) {
    return res.json({ status: "error", error: "Invalid Username/password" });
  }
  //password cannot be searched because bcrypt does not return the same hash everytime
  if (await bcrytpt.compare(password, user.password)) {
    var token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      jwt_secret
    );
    return res.json({ status: "Ok", data: token }); //this token must be stored in the frontend
    //so that after login the backend can verify the data
  }
  return res.json({ status: "error", error: "Invalid Username/Password" });
};

var changePassword = (req, res) => {
  var { token, newpassword } = req.body;
  try {
    var user = jwt.verify(token, jwt_secret);
    console.log(user);
    var id = user._id;

    if (!newpassword || typeof newpassword != "string") {
      return res.json({ status: "error", error: "Invalid password" });
    }

    if (newpassword.length < 6) {
      return res.json({
        status: "error",
        error: "Password two small should be at least 7 characters",
      });
    }
    var hashedPassword = bcrytpt.hash(newpassword, 10);
    User.updateOne(
      { _id },
      {
        $set: { password: hashedPassword },
      }
    );
    res.json({ status: "ok" });
  } catch (error) {
    res.json({ status: "error", error: "somebody messed around the token" });
  }
};
module.exports.UserLogin = UserLogin;
module.exports.changePassword = changePassword;
