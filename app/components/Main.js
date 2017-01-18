// require react
var React = require('react');

// require children components
var Search = require('./children/Search');
var Share = require('./children/Share');
var Results = require('./children/Results');

// require our AJAX request code to the MovieDB API
var movieDb = require("./utils/movie-db");

var Main = React.createClass({
	// set the initial state
	getInitialState: function() {
        return {username: "", email: "", password:"", movieName: "", poster: "", overview: "", preResults: ""};
    },
	// if a search is entered, run the query and update the results
	searchForMovie: function(userMovieSearchInput) {
		// run the query for the movie search
	  	movieDb.movieQuery(userMovieSearchInput).then(function(data) {
		  	this.setState({movieName: data.results[0].original_title});
			this.setState({poster: data.results[0].poster_path});
			this.setState({overview: data.results[0].overview});
			// after we receive the result, post the search to the database
			movieDb.postSearch(this.state.movieName).then(function() {
			  console.log("Database Updated!");
			}.bind(this));
		}.bind(this));
	},
	// set the movieName with the movie that was entered in the form
	setMovie: function(movie) {
		// set the state to the name of the movie that was entered in the form
		this.setState({movieName: movie});
	},
	handleLoginChange: function(key) {
		return function (e) {
	    	var state = {};
	  		state[key] = e.target.value;
	  		this.setState(state);
			console.log("FORM: " + key);
		}.bind(this);
	},
	handleLoginSubmit: function() {
		// do something when the user clicks the login submit button
	},
	render: function() {
		return (
			<div className="container">
				{/* nav bar start */}
				<nav>
			      <div className="nav-wrapper">
			        <a href="#" className="brand-logo">roughcut</a>
			        <ul id="nav-mobile" className="right hide-on-med-and-down">
			          <li><a href="#modal1" id="login">login</a></li>
			        </ul>
			      </div>
			    </nav>
				{/* nav bar end */}
				{/* intro row with icons */}
				<div className="row" id="intro-row">
					<div className="col s4 text-center">
						<p><a href="#search-row">search.</a></p>
						<a href="#search-row"><i className="material-icons" id="row-icons">search</i></a>
					</div>
					<div className="col s4 text-center">
						<p><a href="#results-row">collect.</a></p>
						<a href="#results-row"><i className="material-icons" id="row-icons">theaters</i></a>
					</div>
					<div className="col s4 text-center">
						<p><a href="#share-row">share.</a></p>
						<a href="#share-row"><i className="material-icons" id="row-icons">contacts</i></a>
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
				{/* modal */}
				<div id="modal1" className="modal">
				    <div className="row">
				        <form className="col s12" onSubmit={this.handleLoginSubmit}>
					        <div className="row">
					            <div className="input-field col s6">
					            	<input value={this.state.username} type="text" id="user_name" className="validate" onChange={this.handleLoginChange('username')} />
					            	<label htmlFor="user_name">user name</label>
					            </div>
					        </div>
							<div className="row">
							    <div className="col s12">
									<div className="input-field inline">
									    <input value={this.state.email} type="email" id="email" className="validate" onChange={this.handleLoginChange('email')} />
									    <label htmlFor="email" data-error="wrong" data-success="right">email</label>
									</div>
							    </div>
							</div>
					        <div className="row">
					            <div className="input-field col s12">
						            <input value={this.state.password} type="password" id="password" className="validate" onChange={this.handleLoginChange('password')} />
						            <label htmlFor="password">password</label>
					            </div>
					        </div>
				        </form>
				    </div>
  					<div className="modal-footer">
						<a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
  					</div>
				</div>
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
							© 2017 copyright roughtcut
						</div>
					</div>
				</footer>
			</div>
		);
	}
});
module.exports = Main;
