

// Saved component

var React = require('react');

var Saved = React.createClass({
	render: function(){
		return (
			<div className="container">
				<div className="row">
					<div className="col s12 left-align" id="share-text">
						<h1>My Collection</h1>
						<h3>{this.props.collection}</h3>
					</div>
				</div>
			</div>
		);
	}
});
module.exports = Saved;

// NEED
// Title to the component
// show the movie titles they've saved to the database
// have a delete button option
