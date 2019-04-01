import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Display from "./components/Display";
import DrumPad from "./components/DrumPad";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "freeCodeCamp Drum Machine",
      displayText: "Test text"
    };
  }

  handleClick = (e) => {
    console.log(e)
  }

  render() {
    return (
      <div id="drum-machine" className="container">
        <Header title={this.state.title} logo={logo} />
        <Display text={this.state.displayText} />
        <DrumPad handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
