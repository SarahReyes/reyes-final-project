
// var axios = require('axios');
// // amazon web services needed for connecting heroku saved api keys
// var AWS = require('aws-sdk');
//
// // configure the region
// AWS.config.region = 'us-east-1';
// // access the API key stored with Heroku
// AWS.config.accessKeyId = process.env.FANDANGO_KEY;
// // access the API secret stored with Heroku
// AWS.config.secretAccessKey = process.env.FANDANGO_SECRET;
//
// var fandangoAPI = new AWS.fandangoAPI();

var helper = {
	runQuery: function() {

		// var queryURL = "http://api.fandango.com/v1?op=" + theatersbypostalcodesearch&78727 +
		// 	"&apikey=" + AWS.config.accessKeyId + "&sig=" + AWS.config.secretAccessKey;
		var queryURL = "https://api.themoviedb.org/3/movie/76341?api_key=" + api_key;
		console.log(queryURL);
	}
};
