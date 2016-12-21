
var React = require('react');
var ReactDOM = require('react-dom');

var Main = React.createClass({
	render: function() {
		return (
			<div className="container" id="movie-search-container">
				<div className="row" id="movie-search-row">
					<form className="col s12" id="movie-search-form">
							<div className="input-field col s12">
								<input placeholder="search for a movie" id="movie-search" type="text" className="validate" />
								<label for="movie-search"></label>
								<a className="waves-effect waves-light btn"><i className="material-icons right">theaters</i>search</a>
							</div>

					</form>
				</div>
			</div>
		);
	}
});
module.exports = Main;
