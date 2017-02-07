

// Saved component

var React = require('react');
var util = require('util');

var Results = require('./Results');
var Saved = require('./Saved');
var Main = require('../Main');

var mlab = require('../utils/mlab-db');


var Saved = React.createClass({
	showSavedMap: function (saved) {
		console.log("SAVED: " + util.inspect(saved));
		var saveMap = saved.map(function(search, i) {
			return (
				<li key={i}>{search.movieName}
					<button type="button" className="waves-effect waves-light btn-large btn" onClick={() => {
						console.log('delete saved from map');
						this.props.deleteSaved(search.movieId);
					}}>
						<i className="fa fa-trash-o fa-2x" aria-hidden="true" id="save-icon" ></i>
						delete
					</button>
				</li>
			);
		}.bind(this));
		return saveMap;
	},
	render: function(){
		return (
			<div className="container">
				<div className="row section scrollspy">
					<div className="col s12 left-align" id="saved-text">
						<h1>My Collection</h1>
						{/* use a map function to loop through an array in JSX */}
						{this.showSavedMap(this.props.saved)}

					</div>
				</div>
			</div>
		);
	}
});
module.exports = Saved;
