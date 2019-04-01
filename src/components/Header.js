import React from "react";

const Header = props => {
  return (
    <header className="card-panel grey lighten-3">
      <h4>
        <img
          src={props.logo}
          className="circle responsive-img App-logo"
          style={{ width: "120px" }}
          alt="React logo"
        />
        <span>{props.title}</span>
      </h4>
    </header>
  );
};

export default Header;
