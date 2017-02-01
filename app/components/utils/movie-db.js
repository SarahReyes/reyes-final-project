
// require axios
var axios = require('axios');

if (!process.env.NODE_ENV) {
	require("../../../.setenv.js");
}

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
	},
	// post new logins to the database
	postLogin: function(username, email, password) {
  		return axios.post("/login", {username: username, email: email, password: password});
	},
	// post new searches to the database 
	postSearch: function(movieToSearch) {
  		return axios.post("/api", {movieName: movieToSearch});
	}
};
// export the API query code
module.exports = movieDb;
