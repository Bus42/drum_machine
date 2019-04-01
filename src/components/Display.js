import React from "react";

const Display = props => {
  return (
    <div id="display" className="card grey lighten-3">
      <div className="card-content">
        <div className="card-title">
          <pre className="card-panel center yellow accent-1">{props.text}</pre>
        </div>
      </div>
    </div>
  );
};

export default Display;
