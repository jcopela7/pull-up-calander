import React, { Component } from 'react';
import './App.css';
import PullUpForm from './pullUpForm';
import Table from './Table';

class App extends Component {
  constructor(props){
    super(props);
    this.state={name:"Lets get this bread!!!"}
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <PullUpForm/>
        <Table/>
      </div>
    );
  }
}

export default App;
