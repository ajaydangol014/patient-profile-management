import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./docs/docs.scss";

import AppRouter from "./routes/routes";

const App = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
};

export default App;
