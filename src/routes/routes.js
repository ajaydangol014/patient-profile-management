import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../components/login/Login";
import Register from "../components/register/Register";
import Dashboard from "../components/dashboard/Dashboard";
import Profile from "../components/profile/Profile";
import ProfileDetail from "../components/profile/ProfileDetail";

export default function AppRouter() {
  return (
    // <Router>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="profile" element={<Profile />}></Route>
      <Route path="profile/:id" element={<ProfileDetail />}></Route>
    </Routes>
    // </Router>
  );
}
