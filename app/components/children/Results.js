
var React = require('react');

var Search = require('./Search');
var Saved = require('./Saved');
var Main = require('../Main');

var mlab = require('../utils/mlab-db');


var Results = React.createClass({
	// getInitialState: function() {
	// 	return {
	// 		// showSaved: false,
	// 		// collection: "",
	// 		// saved: []
	// 	};
	// },
	// onSaveClick: function() {
	// 	// TEST
	// 	console.log("Save button is being clicked!");
	// 	// set the state to true
	// 	this.setState({showSaved: true});
	// 	// after we receive the result, post the search to the database
	// 	mlab.postSearch(this.props.movie).then(function() {
	// 	}.bind(this));
	// 	// grab the previously saved files
	// 	mlab.getSaved().then(function(response) {
 //  			console.log(response);
 //  			if (response !== this.state.saved) {
	// 			console.log("Saved Movies: ", response.data);
	// 			this.setState({saved: response.data});
 //  			}
	// 	}.bind(this));
	// },
	showContent: function(error, resultMovie, year, overview, poster) {
		if(error !== "") {
			return (
				<h1>{error}</h1>
			);
		} else {
			return (
				<div>
					<div>
						<h1>{resultMovie}</h1>
						<h4>{year}</h4>
						<h4>{overview}</h4>
						<img className="responsive-img" src={poster} />
					</div>
					<div className="col s6" id="results-buttons">
						<div className="row center-align" id="save-btn">
							<button type="submit" className="waves-effect waves-light btn-large btn" onClick={this.props.onSaveClick}><i className="fa fa-floppy-o fa-2x" id="save-icon"></i>save</button>
						</div>
						<div className="row center-align" id="twitter-btn">
							<a href="https://twitter.com/share" className="twitter-share-button waves-effect waves-light btn-large btn" id="twitter-btn" data-show-count="false"><i className="fa fa-twitter fa-2x" id="twitter-icon"></i>share</a><script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>
						</div>
					</div>
				</div>
			);
		}
	},
    render: function() {
        return (
			<div className="container" id="results-container">
				<div className="row section scrollspy left-align">
					<div className="col s6" id="movie-data">
						{this.showContent(this.props.error, this.props.resultMovie, this.props.year, this.props.overview, this.props.poster)}
					</div>
				</div>
				{/* <div className="row section scrollspy" id="saved-row">
					<div className="col s12 left-align">
						{this.state.showSaved ? <Saved saved={this.state.saved} /> : null}
					</div>
				</div> */}
			</div>
		);
    }

});
module.exports = Results;
