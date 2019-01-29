import React, { Component } from 'react';
import './form.css';
import Table from './Table.js';
import Moment from 'moment';

class PullUpForm extends Component{
	constructor(props){
		super(props);

		this.state={pullUps:0, user:"jon"};

		this.handlePullUpChange=this.handlePullUpChange.bind(this);
		this.handleUserChange=this.handleUserChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		this.submit_num=this.submit_num.bind(this);
	}

	submit_num(){
		var todaysDate=new Date();
		const data =this.props.data;

		alert(data);

		if(Moment(todaysDate).format("Do")!=Moment(data.date[data.length-1]).format("Do")){
			if (this.state.user==="jon"){
			fetch('/PullUps', {
				method:'post',
				headers:{
				 	'Accept':'application/json',
				 	'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					date: new Date(),
					jon: this.state.pullUps,
					brandon: 0,
					paul:0
				})
				}
			)
			}
			else if (this.state.user==="brandon"){
			fetch('/PullUps', {
				method:'post',
				headers:{
				 	'Accept':'application/json',
				 	'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					date: new Date(),
					jon: 0,
					brandon: this.state.pullUps,
					paul:0
				})
				}
			)
			}
			else if (this.state.user==="paul"){
			fetch('/PullUps', {
				method:'post',
				headers:{
				 	'Accept':'application/json',
				 	'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					date: new Date(),
					jon: 0,
					brandon: 0,
					paul:this.state.pullUps
				})
				}
			)
			}
			else{
				alert("invalid user");
			}
		}
		else{
			alert("It worked");
		}	
	}

	handlePullUpChange(event){
		this.setState({pullUps:event.target.value});
	}

	handleUserChange(event){
		this.setState({user:event.target.value});
	}

	handleSubmit(event){
		alert(this.state.pullUps + " was submited");
		event.preventDefault();
	}

	render(){

		return(
			<div id = "form">
			<form onSubmit={this.handleSubmit, this.submit_num}>
		        <label>
		          Pull-ups 
		          <input type='number' value={this.state.PullUps} onChange={this.handlePullUpChange} />
		        </label>
		        <label>
		        	User
		        </label>
		        <select name="user" onChange={this.handleUserChange}>
		        	<option type='text' value="jon">Jon</option>
		        	<option type='text' value="paul">Paul</option>
		        	<option type='text' value="brandon">Brandon</option>
		        </select>
		        <input type="submit" value="Submit" />
		    </form>	   
		    </div>
		)
	};
}


export default PullUpForm;