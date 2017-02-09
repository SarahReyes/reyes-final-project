

// Saved component
var React = require('react');
var util = require('util');

var Main = require('../Main');

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
					</button>
				</div>
			);
		}.bind(this));
		return saveMap;
	},
	render: function(){
		return (
			<div className="row section scrollspy" id="saved-row">
				<div className="col s12 center-align">
					<h1>My Collection</h1>
					{this.showSavedMap(this.props.saved)}
				</div>
			</div>
		);
	}
});
module.exports = Saved;
