import React, { Component } from 'react';

class PullUpForm extends Component{
	constructor(props){
		super(props);

		this.state={pullUps:0, user:""};

		this.handlePullUpChange=this.handlePullUpChange.bind(this);
		this.handleUserChange=this.handleUserChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		this.submit_num=this.submit_num.bind(this);
	}

	submit_num(){
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
			<form onSubmit={this.handleSubmit, this.submit_num}>
		        <label>
		          PullUps: 
		          <input type='number' value={this.state.PullUps} onChange={this.handlePullUpChange} />
		        </label>
		        <label>
		        	user:
		          <input type='text' name={this.state.user} onChange={this.handleUserChange}/>
		        </label>
		        <input type="submit" value="Submit" />
		    </form>
		)
	};
}


export default PullUpForm;