import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Link } from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <nav className="navbar">
        <div className="container navbar__flex">
          <div className="navbar__header">
            <h1>SASS Starter Kit</h1>
          </div>
          <div className="navbar__list">
            <Link to="/" className="navbar__item">
              Github
            </Link>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="guide-wrapper d-flex">
          <div className="sidebar sidebar--bordered-right-1x">
            <div className="menu-group">
              <h4 className="menu-group__title">General</h4>
              <Link
                to="/"
                className="menu-group__nodes__single"
                activeClassName="menu-group__nodes__single--active"
              >
                Introduction
              </Link>
              <Link to="/#filestructure" className="menu-group__nodes__single">
                File Structure
              </Link>
              <Link to="/getting-started" className="menu-group__nodes__single">
                Getting Started
              </Link>
            </div>

            <div className="menu-group">
              <h4 className="menu-group__title">Components</h4>
              <div className="menu-group__contents">
                <div className="menu-group__nodes">
                  <Link
                    to="/accordion"
                    className="menu-group__nodes__single"
                    activeClassName="menu-group__nodes__single--active"
                  >
                    Accordion
                  </Link>
                </div>
                <div className="menu-group__nodes">
                  <Link
                    to="/button"
                    className="menu-group__nodes__single"
                    activeClassName="menu-group__nodes__single--active"
                  >
                    Button
                  </Link>
                </div>
                <div className="menu-group__nodes">
                  <Link
                    to="/forms"
                    className="menu-group__nodes__single"
                    activeClassName="menu-group__nodes__single--active"
                  >
                    Form Elements
                  </Link>
                </div>
              </div>
            </div>
            <div className="menu-group">
              <h4 className="menu-group__title">Utilities</h4>
              <div className="menu-group__contents">
                <div className="menu-group__nodes">
                  <Link
                    to="/colors"
                    className="menu-group__nodes__single"
                    activeClassName="menu-group__nodes__single--active"
                  >
                    Colors
                  </Link>
                </div>
                <div className="menu-group__nodes">
                  <Link
                    to="/Display"
                    className="menu-group__nodes__single"
                    activeClassName="menu-group__nodes__single--active"
                  >
                    Display
                  </Link>
                </div>
                <div className="menu-group__nodes">
                  <Link
                    to="/flex"
                    className="menu-group__nodes__single"
                    activeClassName="menu-group__nodes__single--active"
                  >
                    Flex
                  </Link>
                </div>
                <div className="menu-group__nodes">
                  <Link
                    to="/fonts"
                    className="menu-group__nodes__single"
                    activeClassName="menu-group__nodes__single--active"
                  >
                    Fonts
                  </Link>
                </div>
                <div className="menu-group__nodes">
                  <Link
                    to="/spacing"
                    className="menu-group__nodes__single"
                    activeClassName="menu-group__nodes__single--active"
                  >
                    Spacing
                  </Link>
                </div>
                {/* <div className="menu-group__nodes">
                <Link
                  to="/units"
                  className="menu-group__nodes__single"
                  activeClassName="menu-group__nodes__single--active"
                >
                  Units
                </Link>
              </div> */}
              </div>
            </div>
            <div className="menu-group">
              <h4 className="menu-group__title">Usages</h4>
              <div className="menu-group__contents">
                <div className="menu-group__nodes">
                  <Link
                    to="/bem"
                    className="menu-group__nodes__single"
                    activeClassName="menu-group__nodes__single--active"
                  >
                    BEM
                  </Link>
                  <Link
                    to="/usages/fonts"
                    className="menu-group__nodes__single"
                    activeClassName="menu-group__nodes__single--active"
                  >
                    Fonts
                  </Link>
                  <Link
                    to="/usages/color"
                    className="menu-group__nodes__single"
                    activeClassName="menu-group__nodes__single--active"
                  >
                    Color
                  </Link>
                  <Link
                    to="/usages/responsive"
                    className="menu-group__nodes__single"
                    activeClassName="menu-group__nodes__single--active"
                  >
                    Responsive
                  </Link>
                  <Link
                    to="/usages/helper"
                    className="menu-group__nodes__single"
                    activeClassName="menu-group__nodes__single--active"
                  >
                    Helper
                  </Link>
                </div>
              </div>
            </div>
            <div className="menu-group">
              <h4 className="menu-group__title">Layouts</h4>
              <div className="menu-group__contents">
                <div className="menu-group__nodes">
                  <Link
                    to="/breakpoints"
                    className="menu-group__nodes__single"
                    activeClassName="menu-group__nodes__single--active"
                  >
                    Breakpoints
                  </Link>
                </div>
                <div className="menu-group__nodes">
                  <Link
                    to="/grid"
                    className="menu-group__nodes__single"
                    activeClassName="menu-group__nodes__single--active"
                  >
                    Grid
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="guide-content">
            <div className="container">
              <MainRouter />
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}
