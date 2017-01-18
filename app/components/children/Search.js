
var React = require('react');

var movieDb = require("../utils/movie-db");
var Results = require('./Results');

var Search = React.createClass({
	// set a generic state associated with the text being searched for
	getInitialState: function() {
        return {movie: ""};
    },
	// get the value of the user input
	handleChange: function(event) {
		this.setState({movie: event.target.value});
	},
	// when a user submits
    handleSubmit: function(event) {
	    // prevent hitting enter for submit
	    event.preventDefault();
	    // set the userMovieSearchInput
	    var userMovieSearchInput = this.state.movie;
	    // run the searchForMovie query function
	    this.props.searchForMovie(userMovieSearchInput);
	    // set the movie, to the movie that was searched
	    this.props.setMovie(userMovieSearchInput);
	    // clear out the form, so they can search again
	    this.setState({ movie: ""});
    },
	render: function() {
		return (
			<div className="container"  id="movie-search-container">
				<div className="row" id="movie-search-row">
					<form className="col s12" id="movie-search-form" onSubmit={this.handleSubmit}>
						<div className="input-field col s12">
							<input
								value={this.state.movie}
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
			</div>
		);
	}
});
module.exports = Search;
