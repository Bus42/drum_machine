import React from "react";

const Header = props => {
  return (
    <header className="card-panel grey lighten-3">
      <img
        src={props.logo}
        className="circle responsive-img App-logo"
        style={{ width: "120px", display: "inline" }}
        alt="React logo"
      />
      <pre
        style={{display: "inline", position: "relative", bottom: "120px", left: "45px"}}>{props.title}</pre>
    </header>
  );
};

export default Header;
