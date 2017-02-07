
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SearchSchema = new Schema({
	movieId: {
		type: Number
	},
    movieName: {
        type: String
    },
    date: {
        type: Date
    }
});

var Search = mongoose.model("Search", SearchSchema);
module.exports = Search;
