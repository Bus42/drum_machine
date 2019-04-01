import React from "react";

const Display = props => {
  return (
    <div id="display" className="card grey lighten-3">
      <div className="card-content">
        <div className="card-title">
          <pre className="center green lighten-4">{props.text}</pre>
        </div>
      </div>
    </div>
  );
};

export default Display;
