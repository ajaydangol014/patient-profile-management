import { loadUserProfileData } from "./AuthUserUtils";

export function getUserId() {
  const userid = loadUserProfileData().id;
  return userid;
}

export function getSpecialAttention() {
  const options = [
    {
      id: "required",
      key: "true",
      value: "Required",
    },
    {
      id: "not-required",
      key: "false",
      value: "Not Required",
    },
  ];
  return options;
}
