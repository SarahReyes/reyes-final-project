
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var LoginSchema = new Schema({
	userName: {
		type: String
	},
	email: {
		type: String
	},
	password: {
		type: String
	}
});

var Login = mongoose.model("Login", LoginSchema);
module.exports = Login;
