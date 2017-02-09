
// Search component
var React = require('react');

var Main = require('../Main');

var Search = React.createClass({
	render: function() {
		return (
			<div className="row section scrollspy" id="movie-search-row">
				<div className="col s12">
					<div className="row">
						<div className="col s12">
							<h2 className="center-align">Search for your favorite movies. Save your collection and then share on Twitter.</h2>
						</div>
					</div>
					<div className="row">
						<div className="col s12">
							<form onSubmit={this.props.handleSearchSubmit}>
								<div className="input-field">
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
				</div>
			</div>
		);
	}
});
module.exports = Search;
