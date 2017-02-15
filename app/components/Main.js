// require react
var React = require('react');
// moment js for converting the date
var moment = require('moment');

// require children components
var Search = require('./children/Search');
var Saved = require('./children/Saved');
var Results = require('./children/Results');
var Login = require('./children/Login');

// require our API clients
var movieDb = require('./utils/movie-db');
var mlab = require('./utils/mlab-db');

var Main = React.createClass({
	// set the initial state
	getInitialState: function() {
        return {
			login: "login",
			username: "",
			email: "",
			password: "",
			movieId: "",
			movieName: "",
			resultMovie: "",
			year: "",
			overview: "",
			poster: "",
			showResults: false,
			showSaved: false,
			collection: "",
			saved: [],
			error: ""
		};
    },
	handleUsernameChange: function(event) {
		// set the state as we receive the value
		this.setState({username: event.target.value});
	},
	handleEmailChange: function(event) {
		// set the state as we receive the value
		this.setState({email: event.target.value});
	},
	handlePasswordChange: function(event) {
		// set the state as we receive the value
		this.setState({password: event.target.value});
	},
	handleLogin: function() {
		console.log("Username: " + this.state.username);
		console.log("Email: " + this.state.email);
		console.log("Password: " + this.state.password);

		// grab the inputs and assign them to a new variable
		var usernameInput = this.state.username;
		var emailInput = this.state.email;
		var passwordInput = this.state.password;
		// pass the grabLoginUsernameInput, the username value
		this.props.grabLoginUsernameInput(usernameInput);
		// not sure we need this anymore!
		// this.props.setLogin(usernameInput, emailInput, passwordInput);
		// clear out the form
		this.setState({username: ""});
		this.setState({email: ""});
		this.setState({password: ""});

		// set the state of the login to the username
		this.setState({login: "logout"});
	},
	// if a login is entered, grab the login data and update the state
	grabLoginUsernameInput: function(usernameInput) {
		// set the state in the parent, to the value of the username from the form
		this.setState({username: usernameInput});
		// TEST that we are passing the value to this function
		console.log("Value being passed to the grabLoginUsernameInput function: " + usernameInput);
		mlab.postLogin(this.state.username).then(function(){
		}.bind(this));
	},
	// get the value of the user input
	handleSearchChange: function(event) {
		this.setState({movieName: event.target.value});
	},
	// when a user submits
    handleSearchSubmit: function(event) {
	    // prevent hitting enter for submit
	    event.preventDefault();
		// change the state of showResults
		this.setState({
			showResults: true,
			error: ""
		});
		// set the userMovieSearchInput
		var userMovieSearchInput = this.state.movieName;
		// TEST
		console.log("userMovieSearchInput: " + userMovieSearchInput);
		// run the query for the movie search
		movieDb.movieQuery(userMovieSearchInput).then(function(data) {
			if(data) {
				// get the data for the release date
				var movieDateToConvert = data.results[0].release_date;
				// use moment to convert the date to just the year
				var movieDateConverted = moment(movieDateToConvert).format('YYYY');
				// set the states to the date we received from the API
				this.setState({movieId: data.results[0].id});
				this.setState({resultMovie: data.results[0].original_title});
				this.setState({year: movieDateConverted});
				this.setState({overview: data.results[0].overview});
				this.setState({poster: "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + data.results[0].poster_path});
			} else {
				this.setState({
					error: "We don't know of any movies with that title. Please try again."
				});
			}
		}.bind(this));
	    // clear out the form, so they can search again
	    this.setState({movieName: ""});
    },
	onSaveClick: function() {
		// TEST
		console.log("Save button is being clicked!");
		// set the state to true
		this.setState({showSaved: true});
		// after we receive the result, post the saved movie to the database
		mlab.postSaved(this.state.resultMovie, this.state.movieId).then(function() {
		}.bind(this));
		// grab the previously saved files
		mlab.getSaved().then(function(response) {
			console.log(response);
			if (response !== this.state.saved) {
				// TEST
				// console.log("Saved Movies: ", response.data);
				this.setState({saved: response.data});
			}
		}.bind(this));
	},
	deleteSaved: function(movieId) {
		console.log('react delete saved fired');
		mlab.deleteSaved(movieId)
		.then(function(response) {
			console.log(response);
			mlab.getSaved()
			.then(function(data) {
				this.setState({
					saved: data.data
				});
			}.bind(this));
		}.bind(this));
	},
	render: function() {
		return (
			<div>
				<header>
					<Login
						login={this.state.login}
						username={this.state.username}
						email={this.state.email}
						password={this.state.password}
						handleUsernameChange={this.handleUsernameChange}
						handleEmailChange={this.handleEmailChange}
						handlePasswordChange={this.handlePasswordChange}
						handleLogin={this.handleLogin}
						grabLoginUsernameInput={this.grabLoginUsernameInput}
					/>
				</header>

				<main>
					<div className="slider">
						<ul className="slides">
							<li>
							  	<img src="../../assets/images/film-01.jpg" />
							  	<div className="caption center-align">
									<h1 id="slider-text">Search.</h1>
									<h5 className="light grey-text text-lighten-3" id="slider-text-small">Search for a movie by title.</h5>
							  	</div>
							</li>
							<li>
							  	<img src="../../assets/images/popcorn-01.jpeg" />
							  	<div className="caption left-align">
									<h1 id="slider-text">Save.</h1>
									<h5 className="light grey-text text-lighten-3" id="slider-text-small">Create a collection of all your favorites.</h5>
							  	</div>
							</li>
							<li>
							  	<img src="../../assets/images/theater-01.jpg" />
							  	<div className="caption right-align">
									<h1 id="slider-text">Share.</h1>
									<h5 className="light grey-text text-lighten-3" id="slider-text-small">Share your favorite movies on Twitter.</h5>
							  	</div>
							</li>
						</ul>
					</div>

	                <Search
						handleSearchSubmit={this.handleSearchSubmit}
						handleSearchChange={this.handleSearchChange}
						movieName={this.state.movieName}
					/>

					{this.state.showResults ?
						<Results
							onSaveClick={this.onSaveClick}
							resultMovie={this.state.resultMovie}
							year={this.state.year}
							overview={this.state.overview}
							poster={this.state.poster}
							error={this.state.error}
						/> : null}

					{this.state.showSaved ?
						<Saved
							saved={this.state.saved}
							deleteSaved={this.deleteSaved}
						/> : null}
				</main>

				<footer className="page-footer">
					    <div className="row" id="footer-row">
						    <div className="col s6 left-align">
						    	<h5 className="white-text" id="footer-name">created by: Sarah Reyes</h5>
						    </div>
							<div className="col s6 right-align">
								<a href="https://github.com/SarahReyes"><i className="fa fa-github fa-2x"  id="footer-icons" aria-hidden="true"></i></a>
								<a href="https://www.linkedin.com/in/sarah-reyes"><i className="fa fa-linkedin fa-2x"  id="footer-icons" aria-hidden="true"></i></a>
							</div>
						</div>
					<div className="footer-copyright">
						<div className="center-align">
							© 2017 copyright roughcut
						</div>
					</div>
				</footer>
			</div>
		);
	}
});
module.exports = Main;
