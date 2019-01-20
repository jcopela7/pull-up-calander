import React, { Component } from 'react';

class PullUpForm extends Component{
	constructor(props){
		super(props);

		this.state={pullUps:0};

		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
		this.submit_num=this.submit_num.bind(this);
	}

	submit_num(){
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

	handleChange(event){
		this.setState({pullUps:event.target.value});
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
		          <input type='number' value={this.state.PullUps} onChange={this.handleChange} />
		        </label>
		        <input type="submit" value="Submit" />
		    </form>
		)
	};
}


export default PullUpForm;