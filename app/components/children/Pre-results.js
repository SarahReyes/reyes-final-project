

// DISABLING THIS COMPONENT FOR NOW

// component that you see in the results area, before we get the results
var React = require('react');

var PreResults = React.createClass({
	render: function(){
		return (
			<div className="container">
				<div className="row">
					<div className="col s12 center-align" id="preResults-text">
						<h2>pre-results text here.</h2>
					</div>
				</div>
			</div>
		);
	}
});
module.exports = PreResults;
