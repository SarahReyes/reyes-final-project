// require react
var React = require('react');

// require children components
var Search = require('./children/Search');
var Saved = require('./children/Saved');
var Results = require('./children/Results');
var Login = require('./children/Login');

// require our API clients
var movieDb = require('./utils/movie-db');
var mlab = require('./utils/mlab-db');

var Main = React.createClass({
	// set the initial state
	getInitialState: function() {
        return {username: "", email: "", password: "", poster: ""};
    },
	// if a login is entered, grab the login data and update the state
	grabLoginUsernameInput: function(usernameInput) {
		// set the state in the parent, to the value of the username from the form
		this.setState({username: usernameInput});
		// TEST that we are passing the value to this function
		console.log("Value being passed to the grabLoginUsernameInput function: " + usernameInput);
		mlab.postLogin(this.state.username).then(function(){
		}.bind(this));
	},
	render: function() {
		return (

			<div className="container">
				<Login grabLoginUsernameInput={this.grabLoginUsernameInput} />
				{/* username={this.state.username} setLogin={this.setLogin} - may need to add this back into the above component */}

				{/* intro row with icons */}
				<div className="row" id="intro-row">
					<div className="col s4 text-center">
						<a href="#search-row"><i className="material-icons" id="row-icons">search</i></a>
						<p><a href="#search-row">search</a></p>
					</div>
					<div className="col s4 text-center">
						<a href="#results-row"><i className="material-icons" id="row-icons">theaters</i></a>
						<p><a href="#results-row">collect</a></p>
					</div>
					<div className="col s4 text-center">
						<a href="#share-row"><i className="material-icons" id="row-icons">contacts</i></a>
						<p><a href="#share-row">share</a></p>
					</div>
				</div>
				{/* end intro row with icons */}
				{/* components */}
				<div className="row section scrollspy" id="search-row">
					<div className="col s12">
		                <Search />
		            </div>
				</div>
				{/* end components */}
				{/* footer */}
				<footer className="page-footer">
					<div className="container">
					    <div className="row" id="footer-row">
						    <div className="col s6 left-align">
						    	<h5 className="white-text" id="footer-name">created by: Sarah Reyes</h5>
						    </div>
							<div className="col s6 right-align">
								<a href="https://github.com/SarahReyes"><i className="fa fa-github fa-2x"  id="footer-icons" aria-hidden="true"></i></a>
								<a href="https://www.linkedin.com/in/sarah-reyes"><i className="fa fa-linkedin fa-2x"  id="footer-icons" aria-hidden="true"></i></a>
							</div>
						</div>
					</div>
					<div className="footer-copyright">
						<div className="container center-align">
							© 2017 copyright roughcut
						</div>
					</div>
				</footer>
			</div>
		);
	}
});
module.exports = Main;
