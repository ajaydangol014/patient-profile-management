import React from "react";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="sidebar sidebar--bordered-right-1x">
      <div className="menu-group">
        <Link
          to="/dashboard"
          className="menu-group__nodes__single"
          activeClassName="menu-group__nodes__single--active"
        >
          Dashboard
        </Link>
        <Link to="/profile" className="menu-group__nodes__single">
          Patient Profile
        </Link>
        <Link to="/allergy" className="menu-group__nodes__single">
          Allergy
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
