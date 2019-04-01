import React, { Component } from 'react';

class DrumPad extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            active: null,
            drums: [
                {
                    id: "A",
                    key_code: 65,
                    audio: null
                },
                {
                    id: "S",
                    key_code: 83,
                    audio: null
                },
                {
                    id: "D",
                    key_code: 68,
                    audio: null
                },
                {
                    id: "F",
                    key_code: 70,
                    audio: null
                },
                {
                    id: "J",
                    key_code: 74,
                    audio: null
                },
                {
                    id: "K",
                    key_code: 75,
                    audio: null
                },
                {
                    id: "L",
                    key_code: 76,
                    audio: null
                },
                {
                    id: ";",
                    key_code: 186,
                    audio: null
                },
                {
                    id: "Space",
                    key_code: 32,
                    audio: null
                }
            ]
        }
    }

    render() { 

        const wrapperStyle = {
            display: "flex",
            justifyContent: "center"
        }

        const buttonStyle = {
            margin: "0 12px"
        }

        return ( <div className="card grey lighten-3">
            <div id="drum-pad_wrapper" style={wrapperStyle} className="card-content">
                {this.state.drums.map(drum => {return (
                    <button style={buttonStyle} className="btn-floating btn-large waves-effect waves-light blue lighten-3">{drum.id}</button>
                ) })}
            </div>
        </div> );
    }
}
 
export default DrumPad;