
// test that this file is connected
console.log("***http-helper file is connected***");

var axios = require('axios');

if (!process.env.NODE_ENV) {
	require("../../../.setenv.js");
}

var movieDbKey = process.env.MOVIE_DB_KEY;

var helper = {
	runQuery: function(movieToSearch) {
		var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=" + movieDbKey +
					   "&language=en-US&query=" + movieToSearch + "&include_adult=false";
		return axios.get(queryURL).then(function(response){
			if (response.results[0]) {
				return response.results[0];
			}
			return "";
		});
	}
};
console.log("\n***MOVIE QUERY RESULT:" + helper.runQuery() + "***\n");
module.exports = helper;
