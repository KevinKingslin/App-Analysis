var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
  res.render(__dirname + "/frontend/src/app/login/login.component.html");
});

router.get("/test/:id", (req, res, next) => {
  res.render("test", { output: req.params.id });
});

router.post("/test/submit", (req, res, next) => {
  console.log("hello world");
  var choice = req.body.choice;
  res.redirect("/test/" + choice);
});
module.exports = router;