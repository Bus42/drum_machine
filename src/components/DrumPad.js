import React, { Component } from "react";

const q = "Q";
const w = "W";
const e = "E";
const a = "A";
const s = "S";
const d = "D";
const z = "Z";
const x = "X";
const c = "C";

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      drums: [
        {
          id: q,
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        },
        {
          id: w,
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
        },
        {
          id: e,
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
        },
        {
          id: a,
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
        },
        {
          id: s,
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
        },
        {
          id: d,
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
        },
        {
          id: z,
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
        },
        {
          id: x,
          audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
        },
        {
          id: c,
          audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
        }
      ]
    };
  }

  render(props = this.props) {
    document.onkeydown = function(key) {
      const key_code = key.keyCode;
      switch (key_code) {
        case 81:
          props.handleClick(q);
          break;
        case 87:
          props.handleClick(w);
          break;
        case 69:
          props.handleClick(e);
          break;
        case 65:
          props.handleClick(a);
          break;
        case 83:
          props.handleClick(s);
          break;
        case 68:
          props.handleClick(d);
          break;
        case 90:
          props.handleClick(z);
          break;
        case 88:
          props.handleClick(x);
          break;
        case 67:
          props.handleClick(c);
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
                id={`${drum.id}_player`}
                key={index}
                onClick={e => {
                  e.preventDefault();
                  this.props.handleClick(drum.id);
                }}
                style={buttonStyle}
                className="drum-pad btn-floating btn-large waves-effect waves-light blue lighten-3"
              >
                {drum.id}
                <audio className="clip" id={drum.id} src={drum.audio} />
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DrumPad;
