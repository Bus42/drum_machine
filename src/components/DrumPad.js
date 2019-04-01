import React, { Component } from "react";
import schwifty from "../audio/schwifty.wav";
import aids from "../audio/aids.wav";
import retarded from "../audio/retarded.wav";
import wldd from "../audio/wldd.wav";
import idgaf from "../audio/idgaf.wav";
import dream from "../audio/dream.wav";
import moonmen from "../audio/moonmen.wav";
import news from "../audio/news.wav";
import balls from "../audio/balls.mp3";

const q = "Retarded";
const w = "Wubba Lubbu Dub Dub";
const e = "IDGAF";
const a = "Aids!";
const s = "Scwifty";
const d = "Dream";
const z = "Moonmen";
const x = "News";
const c = "Balls";

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
      drums: [
        {
          id: q,
          key: "Q",
          audio: retarded
        },
        {
          id: w,
          key: "W",
          audio: wldd
        },
        {
          id: e,
          key: "E",
          audio: idgaf
        },
        {
          id: a,
          key: "A",
          audio: aids
        },
        {
          id: s,
          key: "S",
          audio: schwifty
        },
        {
          id: d,
          key: "D",
          audio: dream
        },
        {
          id: z,
          key: "Z",
          audio: moonmen
        },
        {
          id: x,
          key: "X",
          audio: news
        },
        {
          id: c,
          key: "C",
          audio: balls
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
      flexFlow: "row wrap",
      justifyContent: "center"
    };

    const buttonStyle = {
      margin: "1em"
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
              <div id={`${drum.id}_player`} key={index}>
                <button
                  onClick={e => {
                    e.preventDefault();
                    this.props.handleClick(drum.id);
                  }}
                  style={buttonStyle}
                  className="center drum-pad btn-large waves-effect waves-light blue lighten-3"
                >
                  {drum.id}
                </button>
                <span
                  style={{
                    display: "inline",
                    padding: "0",
                    margin: "0",
                    position: "relative",
                    top: "50px",
                    right: "50px",
                    zIndex: "10"
                  }}
                  className="badge"
                >
                  {drum.key}
                </span>
                <audio
                  display="hidden"
                  type="audio/wav"
                  className="clip"
                  id={drum.id}
                  src={drum.audio}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DrumPad;
