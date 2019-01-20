import React, { Component } from 'react';

class PullUpForm extends Component{
	constructor(props){
		super(props);

		this.state={pullUps:0};

		this.handleChange=this.handleChange.bind(this);
		this.handleSubmit=this.handleSubmit.bind(this);
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
			<form onSubmit={this.handleSubmit}>
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