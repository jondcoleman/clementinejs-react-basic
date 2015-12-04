var apiUrl = window.location.origin + '/api/clicks';

var Btn = React.createClass({displayName: "Btn",
	render: function() {
		return (
			React.createElement("button", {onClick: this.props.onClick, className: "btn " + this.props.className}, this.props.text)
		)
	}
})

var ClicksContainer = React.createClass({displayName: "ClicksContainer",
	getInitialState: function(){
		return {
			clicks: undefined
		}
	},
	componentWillMount: function () {
		ajaxRequest ('GET', apiUrl, function(data){
			console.log(JSON.parse(data));
			this.setState({
				clicks: JSON.parse(data).clicks
			}) 
		}.bind(this))
	},
	render: function() {
		return ( 
			React.createElement("div", {className: "container"}, 
				React.createElement("p", null, "You have clicked the button ", this.state.clicks, " times."), 
				React.createElement("br", null), 
				React.createElement("div", {className: "btn-container"}, 
					React.createElement(Btn, {className: "btn-add", onClick: this.handleAddClick, text: "CLICK ME!"}), 
					React.createElement(Btn, {className: "btn-delete", onClick: this.handleDeleteClick, text: "RESET"})
				)
			)			
		)
	},
	handleAddClick: function() {
		ajaxRequest ('POST', apiUrl, function(data){
			this.setState({clicks: JSON.parse(data).value.clicks})
		}.bind(this))		
	},
	handleDeleteClick: function () {
		ajaxRequest ('DELETE', apiUrl, function(data){
			this.setState({clicks: JSON.parse(data).value.clicks})
		}.bind(this))			
	}
}) 

var Header = React.createClass({displayName: "Header",
	render: function() {
		return (
			React.createElement("div", {className: "container"}, 
				React.createElement("img", {src: "/public/img/clementine_150.png"}), 
				React.createElement("br", null), 
				React.createElement("p", {className: "clementine-text"}, "Clementine.js")
			)			
		)
	}
})


var App = React.createClass({displayName: "App",
	render: function() {
		return (
			React.createElement("div", {className: "app"}, 
				React.createElement(Header, null), 
				React.createElement(ClicksContainer, null)			
			)
		)
	}
})

React.render(
  React.createElement(App, null),
  document.getElementById('content')
);