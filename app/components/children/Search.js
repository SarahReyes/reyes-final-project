
var React = require('react');

var movieDb = require('../utils/movie-db');
var Results = require('./Results');
var Saved = require('./Saved');
var Main = require('../Main');

var Search = React.createClass({
	// set the initial state for the movie name and set showResults to false
	getInitialState: function() {
			return {movieName: "", year: "", overview: "", poster: "", showResults: false};
	},
	// get the value of the user input
	handleChange: function(event) {
		this.setState({movieName: event.target.value});
	},
	// when a user submits
    handleSubmit: function(event) {
	    // prevent hitting enter for submit
	    event.preventDefault();
		// set the userMovieSearchInput
		var userMovieSearchInput = this.state.movieName;
		// TEST
		console.log("userMovieSearchInput: " + userMovieSearchInput);
		// run the query for the movie search
		movieDb.movieQuery(userMovieSearchInput).then(function(data) {
			this.setState({movieName: data.results[0].original_title});
			this.setState({year: data.results[0].release_date});
			this.setState({overview: data.results[0].overview});
			this.setState({poster: data.results[0].poster_path});
			// TEST
			console.log("POSTER: " + poster);

			// after we receive the result, post the search to the database
			movieDb.postSearch(this.state.movieName).then(function() {
			}.bind(this));
		}.bind(this));
		// change the state of showResults
		this.setState({showResults: true});
	    // clear out the form, so they can search again
	    this.setState({ movieName: ""});
    },
	render: function() {
		return (
			<div className="container"  id="movie-search-container">
				<div className="row" id="movie-search-row">
					<form className="col s12" id="movie-search-form" onSubmit={this.handleSubmit}>
						<div className="input-field col s12">
							<input
								value={this.state.movieName}
								type="text"
								id="movie-search"
								className="validate"
								onChange={this.handleChange}
							/>
							<label htmlFor="movie-search">movie name</label>
							<button type="submit" className="waves-effect waves-light btn">
							<i className="material-icons right">theaters</i>
								search
							</button>
						</div>
					</form>
				</div>
				<div className="row section scrollspy" id="results-row">
					<div className="col s12">
						{this.state.showResults ? <Results movie={this.state.movieName} year={this.state.year} overview={this.state.overview} poster={this.state.poster} /> : null}
					</div>
				</div>
			</div>
		);
	}
});
module.exports = Search;
