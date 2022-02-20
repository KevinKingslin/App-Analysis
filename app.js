var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var hbs = require("express-handlebars");
var path = require("path");
//var routes = require("./routes/index");

var app = express();
var port = 8000;
var hostname = "localhost";
//middleware
// app.use(express.static(__dirname + "/frontend/dist"));
// app.all("*", function (req, res) {
//   res.status(200).sendFile(__dirname + "/frontend/dist/frontend/index.html");
// });
// app.set("view engine", "hbs");
// app.set("views", path.join(__dirname, "views"));
// app.engine(
//   "hbs",
//   hbs.engine({
//     extname: "hbs",
//     defaultLayout: "layout",
//     layoutsDir: __dirname + "/views",
//   })
// );

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan("common"));

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

//app.use("/", routes);

// app.get("/", (req, res) => {
//   res.writeHead(200);
//   res.end("Hello");
// });
// app.post("/", (req, res) => {
//   res.send("Post here");
// });

app.post('/api/login', (req, res) => {
  console.log(req.body)
})

app.post('/api/register', (req, res) => {
  console.log(req.body)
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});