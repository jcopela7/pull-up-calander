import React, { Component } from 'react';
import './form.css';
import Table from './Table.js';
import Moment from 'moment';

class PullUpForm extends Component{
	constructor(props){
		super(props);

		this.state={pullUps:0, user:"jon", id:""};

		this.handlePullUpChange=this.handlePullUpChange.bind(this);
		this.handleUserChange=this.handleUserChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		this.submit_num=this.submit_num.bind(this);
	}

	submit_num(){
		var todaysDate=new Date();
		const info =this.props.data;

		if(Moment(todaysDate).format("DD")!=Moment(info[info.length-1].date).format("DD")){
			alert("yessss");
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
			fetch("/PullUps/:_id")
	      		.then(res => res.json())
	      		.then((data) => {
	        	this.setState({
	          		id: data
	        	});
	        });
      	

			if (this.state.user==="jon"){
			fetch('/PullUps/:_id', {
				method:'put',
				headers:{
				 	'Accept':'application/json',
				 	'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					jon: this.state.pullUps,
				})
				}
			)
			}
			else if (this.state.user==="brandon"){
			fetch('/PullUps/:_id', {
				method:'put',
				headers:{
				 	'Accept':'application/json',
				 	'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					brandon: this.state.pullUps,
				})
				}
			)
			}
			else if (this.state.user==="paul"){
			fetch('/PullUps/:_id', {
				method:'put',
				headers:{
				 	'Accept':'application/json',
				 	'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					paul: this.state.pullUps,
				})
				}
			)
			}
			else{
				alert("didnt work");
			}
			
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

		var todaysDate=new Date();
		const info =this.props.data;
		console.log(info)
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
		    <h1>{Moment(todaysDate).format("DD MM")}</h1>
		    <h1>{
		    	!!info ?
		    		Moment(info[info.length-1].date).format("DD MM")
		    	:
		    	""
		    }</h1>	   
		    </div>
		)
	};
}


export default PullUpForm;