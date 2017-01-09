
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
