
var React = require('react');

var movieDb = require('../utils/movie-db');
var mlab = require('../utils/mlab-db');
var Results = require('./Results');
var Saved = require('./Saved');
var Main = require('../Main');

var Search = React.createClass({
	render: function() {
		return (
			<div className="container">
				<div className="row section scrollspy" id="movie-search-row">
					<h2 className="center-align">Search for your favorite movies. Save your collection and then share on Twitter.</h2>
					<form className="col s12" id="movie-search-form" onSubmit={this.props.handleSearchSubmit}>
						<div className="input-field col s12">
							<input
								value={this.props.movieName}
								type="text"
								id="movie-search"
								className="validate"
								onChange={this.props.handleSearchChange}
							/>
							<label htmlFor="movie-search">movie name</label>
							<button type="submit" className="waves-effect waves-light btn">
							<i className="material-icons right">search</i>
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
