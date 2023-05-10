import jwtDecode from "jwt-decode";
import { JWT_LOGIN_TOKEN } from "../constants/constant";
import { useNavigate } from "react-router-dom";

export function loadUserProfileData() {
  try {
    const token = localStorage.getItem(JWT_LOGIN_TOKEN);
    const data = jwtDecode(token);
    return data;
  } catch (error) {
    console.log(error);
  }
}
