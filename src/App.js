import React, { Component } from "react";
import logo from "./Rick-and-Morty.png";
import "./App.css";
import Header from "./components/Header";
import Display from "./components/Display";
import DrumPad from "./components/DrumPad";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Rick and Morty Soundboard",
      displayText: "Soundboard Rick!"
    };
  }

  handleClick = e => {
    this.playSound(e);
    this.setState({displayText: e})
  };

  playSound = sound => {
    const clip = document.getElementById(sound);
    if (!clip.ended){
      clip.currentTime = 0;
    }
    clip.play();
  };

  render() {
    return (
      <div id="drum-machine" className="container">
        <Header title={this.state.title} logo={logo} />
        <DrumPad handleClick={this.handleClick} playSound={this.playSound} />
        <Display text={this.state.displayText} />
      </div>
    );
  }
}

export default App;
