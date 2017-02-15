
// Results component
var React = require('react');

var Main = require('../Main');

var Results = React.createClass({
	showContent: function(error, resultMovie, year, overview, poster) {
		if(error !== "") {
			return (
				<div className="row section scrollspy center-align" id="results-row">
					<h1>{error}</h1>
				</div>
			);
		} else {
			return (
				<div>
					<div className="row section scrollspy" id="results-row">
						<div className="col s12 m12 l6">
							<div className="row center-align">
								<img className="responsive-img" src={poster} />
							</div>
							<div className="row center-align">
								<button
									type="submit"
									className="waves-effect waves-light btn-large btn"
									id="save-share-btn"
									onClick={this.props.onSaveClick}>
									<i className="fa fa-floppy-o fa-2x" id="save-icon"></i>save
								</button>
								<a href="https://twitter.com/share" className="twitter-share-button waves-effect waves-light btn-large btn"  id="save-share-btn" data-show-count="false"><i className="fa fa-twitter fa-2x" id="twitter-icon"></i>share</a><script async src="//platform.twitter.com/widgets.js" charSet="utf-8"></script>
							</div>

						</div>
						<div className="col s12 m12 l6">
							<div className="row center-align">
								<h1>{resultMovie}</h1>
								<h4>{year}</h4>
								<h4>{overview}</h4>
							</div>
						</div>
					</div>
				</div>
			);
		}
	},
    render: function() {
        return (
			<div className="center-align">
				{this.showContent(this.props.error, this.props.resultMovie, this.props.year, this.props.overview, this.props.poster)}
			</div>
		);
    }

});
module.exports = Results;
