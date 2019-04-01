import React, { Component } from "react";
import schwifty from '../audio/schwifty.wav';
import aids from '../audio/aids.wav';
import retarded from '../audio/retarded.wav';
import wldd from '../audio/wldd.wav';
import idgaf from '../audio/idgaf.wav';
import dream from '../audio/dream.wav';
import ggschwifty from '../audio/ggschwifty.mp3';
import news from '../audio/news.wav';
import balls from '../audio/balls.mp3';

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
          audio: retarded
        },
        {
          id: w,
          audio: wldd
        },
        {
          id: e,
          audio: idgaf
        },
        {
          id: a,
          audio: aids
        },
        {
          id: s,
          audio: schwifty
        },
        {
          id: d,
          audio: dream
        },
        {
          id: z,
          audio: ggschwifty
        },
        {
          id: x,
          audio: news
        },
        {
          id: c,
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
                <audio type="audio/wav" className="clip" id={drum.id} src={drum.audio} />
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DrumPad;
