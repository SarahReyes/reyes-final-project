

// Saved component

var React = require('react');

var Results = require('./Results');
var Saved = require('./Saved');
var Main = require('../Main');

var Saved = React.createClass({
	render: function(){
		return (
			<div className="container">
				<div className="row">
					<div className="col s12 left-align" id="saved-text">
						<h1>My Collection</h1>
						{/* use a map function to loop through an array in JSX */}
						{this.props.saved.map(function(search, i) {
  							return (
								<li key={i}>{search.movieName} - {search.date}</li>
  							);
						})}
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
