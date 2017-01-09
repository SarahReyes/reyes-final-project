
var express = require('express');
var router = express.Router();
// var Modelname = require('../models/modelname');


// load the index page
router.get("/", function(req, res) {
  	res.sendFile(__dirname + "/public/index.html");
});
// get a record
router.get("/", function(req, res){});
// create a new record
router.post("/?", function(req, res){

});
// update a record
router.put("/??", function(req, res){

});
// delete a record
router.delete("/???", function(req, res){

});
