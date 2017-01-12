// require react
var React = require('react');

// require children components
var Search = require('./children/Search');
var Results = require('./children/Results');

// require our AJAX request code to the MovieDB API
var movieDb = require("./utils/movie-db");

var Main = React.createClass({
	// set the initial state
	getInitialState: function() {
      return { movieToSearch: "", results: "" };
    },
	// if a search is entered, update the component
	componentDidUpdate: function() {
	  // run the query for the movie search
	  movieDb.movieQuery(this.state.movieToSearch).then(function(data) {
		  console.log("Movie Results", data);
		  this.setState({ results: data });
	});
	},
	// set the movieToSearch with the movie that was entered in the form
	setMovie: function(movie) {
	  this.setState({ movieToSearch: movie });
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
		                <Search setMovie={this.setMovie} />
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
