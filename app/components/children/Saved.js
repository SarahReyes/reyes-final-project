

// Saved component

var React = require('react');

var Results = require('./Results');
var Saved = require('./Saved');
var Main = require('../Main');

var mlab = require('../utils/mlab-db');


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
								<li key={i}>{search.movieName} - {search.date}
									<button type="submit" className="waves-effect waves-light btn-large btn"><i className="fa fa-trash-o fa-2x" aria-hidden="true" id="save-icon"></i>delete</button>
								</li>
  							);
						})}

					</div>
				</div>
			</div>
		);
	}
});
module.exports = Saved;
