const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(async () => {
    console.log("Connection successsfull");
  })
  .catch((err) => {
    console.log("no connection");
  });
