var React = require('react');
var ReactDOM = require('react-dom')
var Header = require('./components/Header');
var ClicksContainer = require('./components/ClicksContainer');

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<Header />
				<ClicksContainer />			
			</div>
		)
	}
}) 

ReactDOM.render(
  <App/>,
  document.getElementById('content')
);