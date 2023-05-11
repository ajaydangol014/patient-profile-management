import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (isLoggedIn) {
    console.log(isLoggedIn);
    return children;
  }
  window.location.href = "http://localhost:3000/login";
};

export default ProtectedRoute;
