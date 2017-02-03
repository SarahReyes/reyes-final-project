
// require axios
var axios = require('axios');

if (!process.env.NODE_ENV) {
	require("../../../.setenv.js");
}

// save the API key for MovieDB in an environment variable
var movieDbKey = process.env.MOVIE_DB_KEY;

var httpReq = {
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
	postLogin: function(usernameInput) {
		// TEST the value being passed to the function
		console.log("Value being passed to the postLogin function: " + usernameInput);
  		return axios.post("/login", {username: usernameInput});
	},
	// post new searches to the database
	postSearch: function(movieToSearch) {
  		return axios.post("/api", {movieName: movieToSearch});
	},
	getSaved: function() {
  		return axios.get("/saved");
	}
};
// export the API query code
module.exports = httpReq;
