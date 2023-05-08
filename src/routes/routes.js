import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Profile from "../pages/profile/Profile";
import ProfileDetail from "../pages/profile/ProfileDetail";
import ProfileAdd from "../pages/profile/ProfileAdd";
import ProfileEdit from "../pages/profile/ProfileEdit";
import Allergy from "../pages/allergy/Allergy";
import AllergyAdd from "../pages/allergy/AllergyAdd";
import Signup from "../pages/auth/Signup";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="profile" element={<Profile />}></Route>
      <Route path="profile/:id" element={<ProfileDetail />}></Route>
      <Route path="profile/add" element={<ProfileAdd />}></Route>
      <Route path="profile/edit/:id" element={<ProfileEdit />}></Route>
      <Route path="allergy/" element={<Allergy />}></Route>
      <Route path="allergy/add" element={<AllergyAdd />}></Route>
    </Routes>
  );
}
