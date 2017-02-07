
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
// TEST locally
// mongoose.connect('mongodb://localhost/testFinalProject');

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
app.post("/api", function(req, res) {
	// TEST movieName
	console.log("BODY movieName: " + req.body.movieName);
	Search.create({
		movieName: req.body.movieName,
		date: Date.now()
	}, function(err) {
		if (err) {
			console.log(err);
		}
		else {
			// I'M NOT SEEING THIS ANYWHERE!
			res.send("Search Saved");
		}
	});
});

// add new user login to the database
app.post("/login", function(req, res) {
	// TEST username
	console.log("BODY username: " + req.body.username);
	Login.create({
		username: req.body.username,
		email: req.body.email,
		password: req.body.password
	}, function(err) {
		if (err) {
			console.log("Login ERROR: " + err);
		}
		else {
			// POST IS HAPPENING IN TERMINAL, BUT NOT SEEING THIS, AND IT'S NOT IN MLAB
			res.send("Login Saved To Database");
		}
	});
});

// get the user's saved movies
app.get('/saved', function(req, res) {
	Search.find({}).sort([
		["name", "descending"]
	]). limit(50).exec(function(err, doc) {
		if (err) {
			console.log(err);
		}
		else {
			res.send(doc);
		}
	});
});

// delete a saved movie from the user database
app.delete('/delete', function(req, res){
	Search.remove({
		// IS req.body.movieName the right way to find this?????
		movieName: req.body.movieName,
		date: Date.now()
	}, function(err) {
		if (err) {
			console.log(err);
		}
		else {
			// I'M NOT SEEING THIS ANYWHERE!
			res.send("Movie Deleted");
		}
	});
});

// -------end routes------- //


// start the express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
