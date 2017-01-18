
// server dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var objectValues = require("object-values");


// if we're not in production, then load the .setenv.js file
if (!process.env.NODE_ENV) {
	require('./.setenv.js');
}

// connect to the Search model
var Search = require("./models/Search");
// connect to the Login model
var Login = require("./models/Login");
// connect to movie-db.js, API call generator
var movieDb = require("./app/components/utils/movie-db.js");

// create a new express app
var app = express();

// set the initial PORT
var PORT = process.env.PORT || 3000;

// morgan for logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("./public"));
// -----------------

//------- MongoDB configuration -------//
// heroku key is stored in an environment variable
mongoose.connect(process.env.MONGODB_URI);
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});
// check to see that our .setenv.js file is being read
// console.log("****process.env VALUES: " + objectValues(process.env) + "****");
//------------------------------------//

// -------routes------- //
// load the index page
app.get("/", function(req, res) {
  	res.sendFile(__dirname + "./public/index.html");
});
// post each search to the database
app.post("/api", function(req, res){
	Search.create({
		movieName: req.body.movieName,
		date: Date.now()
	}, function(err){
		if (err) {
			console.log(err);
		}
		else {
			res.send("Search Saved");
		}
	});
});

// add new user login to database
app.post("/login", function(req, res) {
	Login.create({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	});
});


// -------end routes------- //


// start the express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
