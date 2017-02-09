
var React = require('react');
var Main = require('../Main');

var Login = React.createClass({
	render: function () {
		return (
			<div>
				<nav>
					<div className="nav-wrapper">
						<a href="#" className="brand-logo">roughcut</a>
						<a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
						    <li><a href="#modal1" id="login">{this.props.login}</a></li>
						</ul>
						<ul className="side-nav" id="mobile-demo">
							<li><a href="#modal1" id="login">{this.props.login}</a></li>
						</ul>
					</div>
				</nav>
				<div id="modal1" className="modal">
					<div className="row">
						<form className="col s12" id="loginInputs" onSubmit={this.props.handleLogin}>
							<h3>login</h3>
							<div className="row">
								<div className="input-field col s12">
									<input value={this.props.username} type="text" id="user_name" className="validate" onChange={this.props.handleUsernameChange} />
									<label htmlFor="user_name">user name</label>
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<input value={this.props.email} type="email" id="email" className="validate" onChange={this.props.handleEmailChange} />
									<label htmlFor="email" data-error="please enter a correct email address" data-success="">email</label>
								</div>
							</div>
							<div className="row">
								<div className="input-field col s12">
									<input value={this.props.password} type="password" id="password" className="validate" onChange={this.props.handlePasswordChange} />
									<label htmlFor="password">password</label>
								</div>
							</div>
							<button type="button" className="modal-action modal-close waves-effect waves-light btn" onClick={this.props.handleLogin}>submit</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
});
module.exports = Login;
