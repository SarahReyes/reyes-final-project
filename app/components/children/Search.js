var React = require('react');
var ReactDOM = require('react-dom');

var Search = React.createClass({
	// set the initial state so that the movieToSearch is empty
	getInitialState: function() {
        return { movieToSearch: "" };
    },
	// get the value of the user input
	handleChange: function(event) {
		this.setState({ movieToSearch: event.target.value });
	},
	// when a user submits
    handleSubmit: function(event) {
      // set the parent to have the search term
      this.props.movieToSearch(this.state.movieToSearch);
      this.setState({ movieToSearch: "" });
	  // test grabbing the value of the movie searched
	  console.log("MOVIE THAT WAS SEARCHED: " + this.state.movieToSearch);
    },
	render: function() {
		return (
			<div className="container"  id="movie-search-container">
				<div className="row" id="movie-search-row">
					<form className="col s12" id="movie-search-form" onSubmit={this.handleSubmit}>
						<div className="input-field col s12">
							<input
								value={this.state.movieToSearch}
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
