import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Display from './components/Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: "freeCodeCamp Drum Machine",
      displayText: "Test text"
     }
  }
  render() { 
    return ( <div id="drum-machine" className="container">
      <Header title={this.state.title} logo={logo} />
      <Display text={this.state.displayText} />
    </div> );
  }
}
 
export default App;