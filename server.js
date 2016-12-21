// server dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// require Search schema
var Search = require("./models/search");

// create a new express app
var app = express();

// set the initial PORT
var PORT = process.env.PORT || 3000;

// run morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./public"));

//------- MongoDB configuration -------//
mongoose.connect("mongodb://sarahreyes:root123@ds139448.mlab.com:39448/heroku_vdxsvx9p");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});
//------------------------------------//

//--- routes ---//
app.get("/", function(req, res) {
	// test that the port is working
  	// res.send("Hey World!");
  	res.sendFile(__dirname + "/public/index.html");
});

//--------------//

// start the express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
