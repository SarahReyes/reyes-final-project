
var React = require('react');
var ReactDOM = require('react-dom');

// require children Components
var Results = require('./children/Results');

var helper = require("./utils/http-helper");

var Main = React.createClass({
	// set the initial state so that the inputValue is empty
	getInitialState: function() {
		return {inputValue: ""};
	},
	// get the value of the user input
	handleChange: function(event) {
		this.setState({inputValue: event.target.value});
	},
	// onClick function
	handleClick: function(click) {
		// set it so that the user needs to click the button, and not hit enter
		click.preventDefault();
		// give the user inputValue to the parent

		this.setState({inputValue: this.state.inputValue});
		console.log("Movie name entered is: " + this.state.inputValue);
	},
	ajaxCall: function() {
		helper.runQuery(this.state.inputValue).then(function(data) {
	  		if (data !== this.state.results) {
				console.log("Movie", data);
				this.setState({ results: data });
			}
		});
	},
	render: function() {
		return (
			<div className="container" id="movie-search-container">
				<div className="row" id="movie-search-row">
					<form className="col s12" id="movie-search-form" onSubmit={this.handleClick}>
							<div className="input-field col s12">
								<input
									value={this.state.inputValue}
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
	},
	updateInputValue: function(click) {
		this.setState({inputValue: click.target.value});
		// test the onClick
		console.log("I clicked the search button");
		// show the Results page
		console.log("word searched is: " + this.state.inputValue);

	},
});
module.exports = Main;
