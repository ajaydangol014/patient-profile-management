import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { loadUserProfileData } from "../utils/AuthUserUtils";

const AppWrapper = () => {
  const loginUserdata = loadUserProfileData();

  return (
    <>
      <div className="">
        <div className="guide-wrapper d-flex">
          <Sidebar />
          <div className="guide-content">
            <Navbar name={loginUserdata.name} />
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrapper;
