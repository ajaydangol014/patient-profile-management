import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/profile/Profile";
import ProfileDetail from "../pages/profile/ProfileDetail";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="profile" element={<Profile />}></Route>
      <Route path="profile/:id" element={<ProfileDetail />}></Route>
    </Routes>
  );
}
