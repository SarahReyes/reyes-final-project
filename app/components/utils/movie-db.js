
// require axios
var axios = require('axios');

if (!process.env.NODE_ENV) {
	require("../../../.setenv.js");
}

// TEST
console.log("TEST movie-db file is connected");

// save the API key for MovieDB in an environment variable
var movieDbKey = process.env.MOVIE_DB_KEY;

var movieDb = {
	movieQuery: function(movieToSearch) {
		var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=" + movieDbKey +
					   "&language=en-US&query=" + movieToSearch + "&include_adult=false";
		return axios.get(queryURL).then(function(response){

			if (response.data.results[0]) {
				// test the results data
				console.log("API call data: " + response.data);
				return response.data;
			}
			return "";
		});
	}
};
// export the API query code
module.exports = movieDb;
