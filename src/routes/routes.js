import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Outlet,
} from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/profile/Profile";
import ProfileDetail from "../pages/profile/ProfileDetail";
import ProfileAdd from "../pages/profile/ProfileAdd";
import ProfileEdit from "../pages/profile/ProfileEdit";
import Allergy from "../pages/allergy/Allergy";
import AllergyAdd from "../pages/allergy/AllergyAdd";
import Signup from "../pages/auth/Signup";

import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import AppWrapper from "./AppWrapper";
import AllergyEdit from "../pages/allergy/AllergyEdit";
import { JWT_LOGIN_TOKEN } from "../constants/constant";

export default function AppRouter() {
  const isLoggedIn = localStorage.getItem(JWT_LOGIN_TOKEN);

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute isLoggedIn={isLoggedIn}>
              <Login />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <PublicRoute isLoggedIn={isLoggedIn}>
              <Signup />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <AppWrapper />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="profile/:id" element={<ProfileDetail />}></Route>
          <Route path="profile/add" element={<ProfileAdd />}></Route>
          <Route path="profile/edit/:id" element={<ProfileEdit />}></Route>
          <Route path="allergy/" element={<Allergy />}></Route>
          <Route path="allergy/add" element={<AllergyAdd />}></Route>
          <Route path="allergy/edit/:id" element={<AllergyEdit />}></Route>
        </Route>
      </Routes>
    </>
  );
}
