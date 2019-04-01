import React, { Component } from "react";

const a = "A";
const s = "S";
const d = "D";
const f = "F";
const j = "J";
const k = "K";
const l = "L";
const semicolon = ";";
const space = "Space";

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      drums: [
        {
          id: a,
          audio: null
        },
        {
          id: s,
          audio: null
        },
        {
          id: d,
          audio: null
        },
        {
          id: f,
          audio: null
        },
        {
          id: j,
          audio: null
        },
        {
          id: k,
          audio: null
        },
        {
          id: l,
          audio: null
        },
        {
          id: semicolon,
          audio: null
        },
        {
          id: space,
          audio: null
        }
      ]
    };
  }

  render(props = this.props) {
    document.onkeydown = function(e) {
      const key_code = e.keyCode;
      switch (key_code) {
        case 65:
          props.handleClick(a);
          break;
        case 83:
          props.handleClick(s);
          break;
        case 68:
          props.handleClick(d);
          break;
        case 70:
          props.handleClick(f);
          break;
        case 74:
          props.handleClick(j);
          break;
        case 75:
          props.handleClick(k);
          break;
        case 76:
          props.handleClick(l);
          break;
        case 186:
          props.handleClick(semicolon);
          break;
        case 32:
          props.handleClick(space);
          break;
        default:
          console.log(key_code);
          return;
      }
    };

    const wrapperStyle = {
      display: "flex",
      justifyContent: "center"
    };

    const buttonStyle = {
      margin: "0 12px"
    };

    return (
      <div className="card grey lighten-3">
        <div
          id="drum-pad_wrapper"
          style={wrapperStyle}
          className="card-content"
        >
          {this.state.drums.map((drum, index) => {
            return (
              <button
                id={drum.id}
                key={index}
                onClick={e => {
                  e.preventDefault();
                  this.props.handleClick(e.target.id);
                }}
                style={buttonStyle}
                className="drum-pad btn-floating btn-large waves-effect waves-light blue lighten-3"
              >
                {drum.id}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DrumPad;
