var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { collections: "users" }
);

var model = mongoose.model("UserSchema", userSchema);
module.exports = model;
