
// require axios
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
	// post new searches to the database
	postSearch: function(movieToSearch) {
  		return axios.post("/api", {movieName: movieToSearch});
	},
	getSaved: function() {
  		return axios.get("/saved");
	}
};
// export the API query code
module.exports = mlab;
