import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";

const AppWrapper = () => {
  return (
    <>
      <Navbar name="Ajay Dangol" />
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
