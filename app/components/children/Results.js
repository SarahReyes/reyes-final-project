var React = require('react');
var ReactDOM = require('react-dom');

var Results = React.createClass({
    render: function() {
        return (
            <nav>
            	<div className="nav-wrapper">
	                <a href="#" className="brand-logo">EHUB</a>
	                <ul id="nav-mobile" className="right hide-on-med-and-down">
	                    <li>
	                        <a href="sass.html">Sass</a>
	                    </li>
	                    <li>
	                        <a href="badges.html">Components</a>
	                    </li>
	                    <li>
	                        <a href="collapsible.html">JavaScript</a>
	                    </li>
	                </ul>
            	</div>
        	</nav>
			<div className="row">
				<div className="col s12 m4 l3">
            		{/* side bar goes here */}
            		<h3>here is some sidebar info</h3>
        		</div>
				<div className="col s12 m8 l9">
					{/* main content  */}
					<h2>here is some main content info</h2>
  				</div>
			</div> 
		);
    }

});
