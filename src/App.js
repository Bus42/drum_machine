import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: "freeCodeCamp Drum Machine"
     }
  }
  render() { 
    return ( <div className="container">
      <Header title={this.state.title} logo={logo} />
    </div> );
  }
}
 
export default App;