import { Navigate } from "react-router-dom";

const PublicRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return children;
  }
  window.location.href = "http://localhost:3000/dashboard";
};

export default PublicRoute;
