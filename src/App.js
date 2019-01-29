import React, { Component } from 'react';
import './App.css';
import PullUpForm from './pullUpForm';
import Table from './Table';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
        data: [{
        date: "01-12-2019",
        jon: 100,
        brandon: 32,
        paul: 34
      },
      {
        date: "01-13-2019",
        jon: 100,
        brandon: 32,
        paul: 34
      },
      {
        date: "01-14-2019",
        jon: 100,
        brandon: 32,
        paul: 34
      }]
    };
  }

  componentDidMount(){
    fetch("/PullUps")
      .then(res => res.json())
      .then((data) => {
        this.setState({
          data: data
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1 id="welcome">Lets get this bread!!!</h1>
        <PullUpForm data={this.state.data}/>
        <Table data={this.state.data}/>
      </div>
    );
  }
}

export default App;
