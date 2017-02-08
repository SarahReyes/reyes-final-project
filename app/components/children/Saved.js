

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
				<div
					key={i}>{search.movieName}
					<button type="button" className="btn-floating btn-large waves-effect waves-light" id="delete-btn" onClick={function() {
						console.log('delete saved from map');
						this.props.deleteSaved(search.movieId);
					}}>
						<i className="fa fa-trash-o fa-2x" aria-hidden="true"></i>
						delete
					</button>
				</div>
			);
		}.bind(this));
		return saveMap;
	},
	render: function(){
		return (
			<div className="container">
				<div className="row section scrollspy" id="saved-row">
					<div className="col s12 center-align">
						<h1>My Collection</h1>
						{this.showSavedMap(this.props.saved)}
					</div>
				</div>
			</div>
		);
	}
});
module.exports = Saved;
