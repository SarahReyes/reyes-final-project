// require react
var React = require('react');

// require children components
var Search = require('./children/Search');
var Share = require('./children/Share');
var Results = require('./children/Results');
var Login = require('./children/Login');

// require our AJAX request code to the MovieDB API
var movieDb = require("./utils/movie-db");

var Main = React.createClass({
	// set the initial state
	getInitialState: function() {
        return {username: "", email: "", password: "", movieName: "", poster: "", overview: ""};
    },
	// if a search is entered, run the query and update the results
	searchForMovie: function(userMovieSearchInput) {
		// run the query for the movie search
	  	movieDb.movieQuery(userMovieSearchInput).then(function(data) {
		  	this.setState({movieName: data.results[0].original_title});
			// this.setState({poster: data.results[0].poster_path});
			this.setState({overview: data.results[0].overview});
			// after we receive the result, post the search to the database
			movieDb.postSearch(this.state.movieName).then(function() {
			}.bind(this));
		}.bind(this));
	},
	// set the movieName with the movie that was entered in the form
	setMovie: function(movie) {
		// set the state to the name of the movie that was entered in the form
		this.setState({movieName: movie});
	},
	// if a login is entered, grab the login data and update the state
	grabLoginUsernameInput: function(usernameInput) {
		// set the state in the parent, to the value of the username from the form
		this.setState({username: usernameInput});
		// TEST that we are passing the value to this function
		console.log("Value being passed to the grabLoginUsernameInput function: " + usernameInput);
		movieDb.postLogin(this.state.username).then(function(){
		}.bind(this));
	},
	render: function() {
		return (

			<div className="container">
				<Login grabLoginUsernameInput={this.grabLoginUsernameInput} />
				{/* username={this.state.username} setLogin={this.setLogin} - may need to add this back into the above component */}

				{/* intro row with icons */}
				<div className="row" id="intro-row">
					<div className="col s4 text-center">
						<a href="#search-row"><i className="material-icons" id="row-icons">search</i></a>
						<p><a href="#search-row">search</a></p>
					</div>
					<div className="col s4 text-center">
						<a href="#results-row"><i className="material-icons" id="row-icons">theaters</i></a>
						<p><a href="#results-row">collect</a></p>
					</div>
					<div className="col s4 text-center">
						<a href="#share-row"><i className="material-icons" id="row-icons">contacts</i></a>
						<p><a href="#share-row">share</a></p>
					</div>
				</div>
				{/* end intro row with icons */}
				{/* components */}
				<div className="row section scrollspy" id="search-row">
					<div className="col s12">
		                <Search setMovie={this.setMovie} searchForMovie={this.searchForMovie} />
		            </div>
				</div>
				<div className="row section scrollspy" id="results-row">
					<div className="col s12">
						<Results movie={this.state.movieName} poster={this.state.poster} overview={this.state.overview} />
					</div>
				</div>
				<div className="row section scrollspy" id="share-row">
					<div className="col s12 center-align">
						<Share />
					</div>
				</div>
				{/* end components */}
				{/* footer */}
				<footer className="page-footer">
					<div className="container">
					    <div className="row" id="footer-row">
						    <div className="col s6 left-align">
						    	<h5 className="white-text" id="footer-name">created by: Sarah Reyes</h5>
						    </div>
							<div className="col s6 right-align">
								<a href="https://github.com/SarahReyes"><i className="fa fa-github fa-2x"  id="footer-icons" aria-hidden="true"></i></a>
								<a href="https://www.linkedin.com/in/sarah-reyes"><i className="fa fa-linkedin fa-2x"  id="footer-icons" aria-hidden="true"></i></a>
							</div>
						</div>
					</div>
					<div className="footer-copyright">
						<div className="container center-align">
							© 2017 copyright roughcut
						</div>
					</div>
				</footer>
			</div>
		);
	}
});
module.exports = Main;
