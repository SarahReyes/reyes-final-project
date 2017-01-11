
var React = require('react');
var ReactDOM = require('react-dom');

// require children Components
var Search = require('./children/Search');
var Results = require('./children/Results');

// require our AJAX request code to the MovieDB API
var movieDb = require("./utils/movie-db");

var Main = React.createClass({
	getInitialState: function() {
      return { movieToSearch: "", results: "" };
    },
	// This function allows childrens to update the parent.
    movieToSearch: function(movieToSearch) {
      this.setState({ movieToSearch: movieToSearch });
    },
	// when a search is entered
	componentDidUpdate: function() {

	  // run the query for the movie search
	  movieDb.movieQuery(this.state.movieToSearch).then(function(data) {
		if (data !== this.state.results) {
		  console.log("Movie DATA: " + data);
		  this.setState({ results: data });
		}
	  }.bind(this));
	},
	// movieSearch: function(){
	// 	// ***TEST*** that we're getting the value of the user input
	// 	console.log("Movie being searched: " + this.state.movieToSearch);
	// 	// query the movieToSearch
	// 	movieDb.movieQuery(this.state.movieToSearch).then(function(data){
	// 		console.log(data);
	// 	});
	// },
	render: function() {
		return (
			<div className="container">
				<nav>
			      <div className="nav-wrapper">
			        <a href="#" className="brand-logo">Logo</a>
			        <ul id="nav-mobile" className="right hide-on-med-and-down">
			          <li><a href="sass.html">Sass</a></li>
			          <li><a href="badges.html">Components</a></li>
			          <li><a href="collapsible.html">JavaScript</a></li>
			        </ul>
			      </div>
			    </nav>
				<div className="row" id="search-row">
					<div className="col s12">
		                <Search movieToSearch={this.movieToSearch} />
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
