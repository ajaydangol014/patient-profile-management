import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { JWT_LOGIN_TOKEN } from "../../constants/constant";

const Sidebar = (props) => {
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem(JWT_LOGIN_TOKEN);
  };

  return (
    <div className="sidebar sidebar--bordered-right-1x">
      <div className="navbar__header">
        <h1>
          Patient Profile <span>MANAGEMENT</span>
        </h1>
      </div>
      <div className="sidebar__flex">
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

        <div>
          <Link
            to="/login"
            className="logout menu-group__nodes__single"
            onClick={logoutUser}
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
