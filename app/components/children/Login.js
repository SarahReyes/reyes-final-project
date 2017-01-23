
var React = require('react');

var Login = React.createClass({
	getInitialState: function() {
		return ({username: "", email: "", password: "", login: "login"});
	},
	handleUsernameChange: function(event) {
		// set the state as we receive the value
		this.setState({username: event.target.value});
	},
	handleEmailChange: function(event) {
		// set the state as we receive the value
		this.setState({email: event.target.value});
	},
	handlePasswordChange: function(event) {
		// set the state as we receive the value
		this.setState({password: event.target.value});
	},
	handleLogin: function() {
		console.log("Username: " + this.state.username);
		console.log("Email: " + this.state.email);
		console.log("Password: " + this.state.password);
		this.setState({username: ""});
		this.setState({email: ""});
		this.setState({password: ""});

		// set the state of the login to the username
		this.setState({login: "Welcome, " + this.state.username});
	},
	render: function () {
		return (
			<div>
				<nav>
				  <div className="nav-wrapper">
					<a href="#" className="brand-logo">roughcut</a>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
					  <li><a href="#modal1" id="login">{this.state.login}</a></li>
					</ul>
				  </div>
				</nav>
				<div id="modal1" className="modal">
					<div className="row">
						<form className="col s12" id="loginInputs" onSubmit={this.handleLoginSubmit}>
							<h3>login</h3>
							<div className="row">
								<div className="input-field col s12">
									<input value={this.state.username} type="text" id="user_name" className="validate" onChange={this.handleUsernameChange} />
									<label htmlFor="user_name">user name</label>
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<input value={this.state.email} type="email" id="email" className="validate" onChange={this.handleEmailChange} />
									<label htmlFor="email" data-error="wrong" data-success="right">email</label>
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<input value={this.state.password} type="password" id="password" className="validate" onChange={this.handlePasswordChange} />
									<label htmlFor="password">password</label>
								</div>
							</div>
							<button type="button" className="modal-action modal-close waves-effect waves-light btn" onClick={this.handleLogin}>submit</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
});
module.exports = Login;
