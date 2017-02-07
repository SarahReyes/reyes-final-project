// require react
var React = require('react');

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
				this.setState({movieId: data.results[0].id});
				this.setState({resultMovie: data.results[0].original_title});
				this.setState({year: data.results[0].release_date});
				this.setState({overview: data.results[0].overview});
				this.setState({poster: "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + data.results[0].poster_path});
			} else {
				this.setState({
					error: "We don't know of any movies with that title."
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
				console.log("Saved Movies: ", response.data);
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
				{/* <div className="row section scrollspy" id="search-row">
					<div className="col s12"> */}
		                <Search
							handleSearchSubmit={this.handleSearchSubmit}
							handleSearchChange={this.handleSearchChange}
							movieName={this.state.movieName}
						/>
		            {/* </div>
				</div> */}
				{/* <div className="row section scrollspy" id="results-row">
					<div className="col s12"> */}
						{this.state.showResults ?
							<Results
								onSaveClick={this.onSaveClick}
								resultMovie={this.state.resultMovie}
								year={this.state.year}
								overview={this.state.overview}
								poster={this.state.poster}
								error={this.state.error}
							/> : null}
					{/* </div>
				</div> */}
				{/* <div className="row section scrollspy" id="saved-row">
					<div className="col s12 left-align"> */}
						{this.state.showSaved ?
							<Saved
								saved={this.state.saved}
								deleteSaved={this.deleteSaved}
							/> : null}
					{/* </div>
				</div> */}
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
