import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img style={{width: "150px"}} src={logo} alt="React Logo"/>  <h1 className="banner">freeCodeCamp Drum Machine</h1>
      </div>
    );
  }
}

export default App;
