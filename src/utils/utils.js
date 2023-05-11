import { loadUserProfileData } from "./AuthUserUtils";

export function getUserId() {
  const userid = loadUserProfileData().id;
  return userid;
}

export function getSpecialAttention(key = "") {
  const options = [
    {
      id: "required",
      key: true,
      value: "Required",
    },
    {
      id: "not-required",
      key: false,
      value: "Not Required",
    },
  ];
  if (key !== "") {
    const data = options.find((x) => String(x.key) === String(key));
    if (data) {
      return data.value;
    }
    return;
  }
  return options;
}
