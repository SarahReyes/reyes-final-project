var React = require('react');
var ReactDOM = require('react-dom');

var Results = React.createClass({
    render: function() {
        return (
			<div className="container">
				<div className="row">
					<div className="col s12">
						<h1>Movie Results:</h1>
						<p>{this.props.movie}</p>
					</div>
				</div>
			</div>
		);
    }

});
module.exports = Results;
