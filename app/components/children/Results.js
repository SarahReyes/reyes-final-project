
var React = require('react');

var Search = require('./Search');

var Results = React.createClass({
    render: function() {
        return (
			<div className="container">
				<div className="row center-align">
					<div className="col s6" id="movie-data">
						<h1>{this.props.movie}</h1>
						<img className="responsive-img" src={this.props.poster} />
						<h4>{this.props.overview}</h4>
					</div>
					<div className="col s6" id="results-buttons">
						<div className="row center-align" id="save-btn">
							<a className="waves-effect waves-light btn-large btn"><i className="fa fa-floppy-o fa-2x"></i>save</a>
						</div>
						<div className="row center-align" id="twitter-btn">
							<a className="waves-effect waves-light btn-large btn"><i className="fa fa-twitter fa-2x"></i>share</a>
						</div>
					</div>
				</div>
			</div>
		);
    }

});
module.exports = Results;
