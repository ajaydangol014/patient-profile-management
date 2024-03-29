import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className=" navbar__flex px-4x">
        <div className="navbar__header"></div>
        <div className="navbar__list">
          <div className="avatar-img"></div>
          <Link to="/dashboard" className="navbar__item">
            {props.name}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
