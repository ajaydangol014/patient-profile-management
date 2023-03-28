import React from "react";

const Dashboard = () => {
  return (
    <div id="wrapper">
      <ul
        classname="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          classname="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div classname="sidebar-brand-icon rotate-n-15">
            <i classname="fas fa-laugh-wink" />
          </div>
          <div classname="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>
        <hr classname="sidebar-divider my-0" />
        <li classname="nav-item active">
          <a classname="nav-link" href="index.html">
            <i classname="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </a>
        </li>
        <hr classname="sidebar-divider" />
        <div classname="sidebar-heading">Interface</div>
        <li classname="nav-item">
          <a
            classname="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i classname="fas fa-fw fa-cog" />
            <span>Components</span>
          </a>
          <div
            id="collapseTwo"
            classname="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div classname="bg-white py-2 collapse-inner rounded">
              <h6 classname="collapse-header">Custom Components:</h6>
              <a classname="collapse-item" href="buttons.html">
                Buttons
              </a>
              <a classname="collapse-item" href="cards.html">
                Cards
              </a>
            </div>
          </div>
        </li>
        <li classname="nav-item">
          <a
            classname="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i classname="fas fa-fw fa-wrench" />
            <span>Utilities</span>
          </a>
          <div
            id="collapseUtilities"
            classname="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div classname="bg-white py-2 collapse-inner rounded">
              <h6 classname="collapse-header">Custom Utilities:</h6>
              <a classname="collapse-item" href="utilities-color.html">
                Colors
              </a>
              <a classname="collapse-item" href="utilities-border.html">
                Borders
              </a>
              <a classname="collapse-item" href="utilities-animation.html">
                Animations
              </a>
              <a classname="collapse-item" href="utilities-other.html">
                Other
              </a>
            </div>
          </div>
        </li>
        <hr classname="sidebar-divider" />
        <div classname="sidebar-heading">Addons</div>
        <li classname="nav-item">
          <a
            classname="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i classname="fas fa-fw fa-folder" />
            <span>Pages</span>
          </a>
          <div
            id="collapsePages"
            classname="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div classname="bg-white py-2 collapse-inner rounded">
              <h6 classname="collapse-header">Login Screens:</h6>
              <a classname="collapse-item" href="login.html">
                Login
              </a>
              <a classname="collapse-item" href="register.html">
                Register
              </a>
              <a classname="collapse-item" href="forgot-password.html">
                Forgot Password
              </a>
              <div classname="collapse-divider" />
              <h6 classname="collapse-header">Other Pages:</h6>
              <a classname="collapse-item" href="404.html">
                404 Page
              </a>
              <a classname="collapse-item" href="blank.html">
                Blank Page
              </a>
            </div>
          </div>
        </li>
        <li classname="nav-item">
          <a classname="nav-link" href="charts.html">
            <i classname="fas fa-fw fa-chart-area" />
            <span>Charts</span>
          </a>
        </li>
        <li classname="nav-item">
          <a classname="nav-link" href="tables.html">
            <i classname="fas fa-fw fa-table" />
            <span>Tables</span>
          </a>
        </li>
        <hr classname="sidebar-divider d-none d-md-block" />
        <div classname="text-center d-none d-md-inline">
          <button classname="rounded-circle border-0" id="sidebarToggle" />
        </div>
        <div classname="sidebar-card d-none d-lg-flex">
          <img
            classname="sidebar-card-illustration mb-2"
            src="img/undraw_rocket.svg"
            alt="..."
          />
          <p classname="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            classname="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Dashboard;
