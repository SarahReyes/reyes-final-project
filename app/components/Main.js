
var React = require('react');
var ReactDOM = require('react-dom');

// require children Components
var Results = require('./children/Results');

var movieDb = require("./utils/movie-db");

var Main = React.createClass({
	// set the initial state so that the movieToSearch is empty
	getInitialState: function() {
		return {movieToSearch: ""};
	},
	// get the value of the user input
	handleChange: function(event) {
		this.setState({movieToSearch: event.target.value});
	},
	// onClick function
	handleClick: function(click) {
		// ***TEST*** that we're getting the value of the user input
		console.log("Movie being searched: " + this.state.movieToSearch);

		movieDb.movieQuery(this.state.movieToSearch).then(function(data){
			console.log(data);
		});
	},
	render: function() {
		return (
			<div className="container" id="movie-search-container">
				<div className="row">
					<h1>roughcut</h1>
				</div>
				<div className="row" id="movie-search-row">
					<form className="col s12" id="movie-search-form" onSubmit={this.handleClick}>
							<div className="input-field col s12">
								<input
									value={this.state.movieToSearch}
									type="text"
									placeholder="search for a movie"
									id="movie-search"
									className="validate"
									onChange={this.handleChange}
								/>
								<label htmlFor="movie-search"></label>
								<button
									type="submit"
									className="waves-effect waves-light btn"
								>
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
module.exports = Main;
