var apiUrl = window.location.origin + '/api/clicks';

var Btn = React.createClass({
	render: function() {
		return (
			<button onClick={this.props.onClick} className={"btn " + this.props.className}>{this.props.text}</button>
		)
	}
})

var ClicksContainer = React.createClass({
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
			<div className="container">
				<p>You have clicked the button {this.state.clicks} times.</p>   
				<br />
				<div className="btn-container">
					<Btn className="btn-add" onClick={this.handleAddClick} text="CLICK ME!" />
					<Btn className="btn-delete" onClick={this.handleDeleteClick} text="RESET" />
				</div>
			</div>			
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

var Header = React.createClass({
	render: function() {
		return (
			<div className="container">
				<img src="/public/img/clementine_150.png" />
				<br />
				<p className="clementine-text">Clementine.js</p>
			</div>			
		)
	}
})


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

React.render(
  <App/>,
  document.getElementById('content')
);