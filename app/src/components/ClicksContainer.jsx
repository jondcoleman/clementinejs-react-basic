var React = require('react');
var Btn = require('./Btn');

var apiUrl = window.location.origin + '/api/clicks';

module.exports = React.createClass({
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
}); 