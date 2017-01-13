// require react
var React = require('react');

// require children components
var Search = require('./children/Search');
var Results = require('./children/Results');

// require our AJAX request code to the MovieDB API
var movieDb = require("./utils/movie-db");

var Main = React.createClass({
	// set the initial state

	// this.componentDidUpdate = this.componentDidUpdate.bind(this);

	getInitialState: function() {
        return { movieToSearch: "", results: "" };
    },

	// if a search is entered, update the component
	searchForMovie: function(this_movie) {
	    // run the query for the movie search
		console.log("inside searchForMovie():");
		console.log(this_movie);
		console.log(this.state.movieToSearch);

	  	movieDb.movieQuery(this_movie).then(function(data) {

		  	console.log("Movie Results", data);
		  	this.setState({ results: data.results[0].original_title });
			console.log(this.state.results);

		}.bind(this));
	},

	// set the movieToSearch with the movie that was entered in the form
	setMovie: function(movie) {

		console.log("inside setMovie():");
		console.log(movie);

		this.setState({ movieToSearch: movie });
		// console.log(this.state.movieToSearch);

		// test that we are receiving the value of movie
		console.log("setMovie function value: " + movie);
	},

	render: function() {
		return (
			<div className="container">
				<nav>
			      <div className="nav-wrapper">
			        <a href="#" className="brand-logo">roughcut</a>
			        <ul id="nav-mobile" className="right hide-on-med-and-down">
			          <li><a href="sass.html">Sass</a></li>
			          <li><a href="badges.html">Components</a></li>
			          <li><a href="collapsible.html">JavaScript</a></li>
			        </ul>
			      </div>
			    </nav>
				<div className="row" id="search-row">
					<div className="col s12">
		                <Search setMovie={this.setMovie} searchForMovie={this.searchForMovie} />
		            </div>
				</div>
				<div className="row" id="results-row">
					<div className="col s12">
						<Results movie={this.state.results} />
					</div>
				</div>
			</div>
		);
	}
});
module.exports = Main;
