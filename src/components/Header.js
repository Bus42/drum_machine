import React from "react";

const Header = props => {
  return (
    <header className="card-panel">
      <h4>
        <img
          src={props.logo}
          className="circle responsive-img"
          style={{ width: "80px" }}
          alt="React logo"
        />
        <span>{props.title}</span>
      </h4>
    </header>
  );
};

export default Header;
