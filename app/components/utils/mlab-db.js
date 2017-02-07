
// require axios,
var axios = require('axios');

// TEST
console.log("TEST mlab file is connected");

var mlab = {
	// post new logins to the database
	postLogin: function(usernameInput) {
		// TEST the value being passed to the function
		console.log("Value being passed to the postLogin function: " + usernameInput);
  		return axios.post("/login", {username: usernameInput});
	},
	// post new saved movies to the database
	postSaved: function(movieToSave, movieId) {
		var newMovieId = parseInt(movieId);
  		return axios.post("/api", {movieName: movieToSave, movieId: newMovieId});
	},
	getSaved: function() {
  		return axios.get("/saved");
	},
	deleteSaved: function(movieId) {
		console.log('deleteSaved axios fired');
		console.log('movieId from axios' + movieId);
		return axios.delete("/delete/" + movieId);
	}
};
// export the API query code
module.exports = mlab;
