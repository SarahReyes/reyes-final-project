
var React = require('react');

var Search = require('./Search');

var Results = React.createClass({
    render: function() {
        return (
			<div className="container">
				<div className="row">
					<div className="col s12" id="results-data">
						<h3>{this.props.movie}</h3>
						<img src={this.props.poster} alt="movie poster" height="100" width="100" />
					</div>
				</div>
			</div>
		);
    }

});
module.exports = Results;
