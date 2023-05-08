import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Link } from "react-router-dom";
import "./docs/docs.scss";

import AppRouter from "./routes/routes";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Router>
        <AppRouter />
      </Router>
    </>
  );
};

export default App;
