
// ***TEST*** check to make sure the file is connected to Main.js
// console.log("***http-helper file is connected***");

var axios = require('axios');

if (!process.env.NODE_ENV) {
	require("../../../.setenv.js");
}

var movieDbKey = process.env.MOVIE_DB_KEY;

// var helper = {
// 	runQuery: function(movieToSearch) {
// 		var queryURL = "https://api.themoviedb.org/3/search/movie?api_key=" + movieDbKey +
// 					   "&language=en-US&query=" + movieToSearch + "&include_adult=false";
// 		return axios.get(queryURL).then(function(response){
// 			if (response.results[0]) {
// 				return response.results[0];
// 			}
// 			return "";
// 		});
// 	}
// };
// console.log("\n***MOVIE QUERY RESULT:" + helper.runQuery() + "***\n");
// module.exports = helper;

// ***TEST*** API GET REQUEST WORKING
// var username = 'SarahReyes';
// axios.get('https://api.github.com/users/' + username)
// 	.then(function(response){
// 		console.log("My Github API request: " + response.data.name);
// 	});
// ***END TEST***

// ***TEST*** movieDB another option
axios.get('https://api.themoviedb.org/3/search/movie?api_key=' + movieDbKey + '&query=Jack+Reacher')
		    .then(function(response){
				console.log("TESTING MOVIE RESPONSE: " + JSON.stringify(response));
		    });
