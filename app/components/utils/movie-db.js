
// ***TEST*** check to make sure the file is connected to Main.js
// console.log("***http-helper file is connected***");

var axios = require('axios');

if (!process.env.NODE_ENV) {
	require("../../../.setenv.js");
}

var movieDbKey = process.env.MOVIE_DB_KEY;

var movieDb = {
	movieQuery: function(movieToSearch) {
		var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=" + movieDbKey +
					   "&language=en-US&query=" + movieToSearch + "&include_adult=false";
		return axios.get(queryURL).then(function(response){

			if (response.data.results[0]) {
				return response.data;
			}

				return "";

		});
	}
};
module.exports = movieDb;

// var queryURL = "http://api.opencagedata.com/geocode/v1/json?query=" + location + "&pretty=1&key=" + geocodeAPI;
// return axios.get(queryURL).then(function(response) {
//   // If get get a result, return that result's formatted address property
//   if (response.data.results[0]) {
// 	return response.data.results[0].formatted;
//   }
//   // If we don't get any results, return an empty string
//   return "";
// });
// },



// ***TEST*** movieDB another option
// axios.get('https://api.themoviedb.org/3/search/movie?api_key=' + movieDbKey + '&query=' + )
// 		    .then(function(response){
// 				console.log("TESTING MOVIE RESPONSE: " + JSON.stringify(response));
// 		    });
