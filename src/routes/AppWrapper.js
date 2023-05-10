import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import { loadUserProfileData } from "../utils/AuthUserUtils";

const AppWrapper = () => {
  const loginUserdata = loadUserProfileData();

  return (
    <>
      <Navbar name={loginUserdata.name} />
      <div className="">
        <div className="guide-wrapper d-flex">
          <Sidebar />
          <div className="guide-content">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppWrapper;
