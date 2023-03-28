import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Link } from "react-router-dom";
import "./docs/docs.scss";

import AppRouter from "./routes/routes";

const App = () => {
  return (
    <>
      <Router>
        <nav className="navbar">
          <div className=" navbar__flex px-4x">
            <div className="navbar__header">
              <h1>Patient Profile Management</h1>
            </div>
            <div className="navbar__list">
              <Link to="/" className="navbar__item">
                Ajay Dangol
              </Link>
            </div>
          </div>
        </nav>
        <div className="">
          <div className="guide-wrapper d-flex">
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
                  User Profile
                </Link>
              </div>
            </div>
            <div className="guide-content">
              <div className="container">
                <AppRouter />
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
