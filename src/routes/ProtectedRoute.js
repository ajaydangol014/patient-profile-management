import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" replace />;
};

export const PublicRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return children;
  }
  return <Navigate to="/dashboard" replace />;
};

export default ProtectedRoute;
