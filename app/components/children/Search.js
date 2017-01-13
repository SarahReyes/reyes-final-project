var React = require('react');
var ReactDOM = require('react-dom');


var movieDb = require("../utils/movie-db");

var Search = React.createClass({
	// set a generic state associated with the text being searched for
	getInitialState: function() {
        return { movie: "" };
    },

	// get the value of the user input
	handleChange: function(event) {
		this.setState({ movie: event.target.value });
	},

	// when a user submits
    handleSubmit: function(event) {
	  // test grabbing the value of the movie searched after clicking the btn
	  console.log("I CLICKED. MOVIE VALUE: " + this.state.movie);
	  // prevent hitting enter for submit
	  event.preventDefault();
	  // set the parent to the movie searched
	  var the_movie = this.state.movie;
	  this.props.searchForMovie(the_movie);
	  this.props.setMovie(the_movie);
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
