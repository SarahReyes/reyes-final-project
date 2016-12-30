// server dependencies

var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");

// if we're not in production, then load the .setenv.js file
if (!process.env.NODE_ENV) {
	require('./.setenv.js');
}

var mongoose = require("mongoose");
var objectValues = require("object-values");

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
mongoose.connect(process.env.MONGODB_URI);
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});
// check to see that our .setenv.js file is being read
console.log("****process.env VALUES: " + objectValues(process.env) + "****");
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
