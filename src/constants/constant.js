import * as Yup from "yup";

export const allergyValidationSchema = Yup.object({
  allergy_name: Yup.string().required("Required"),
});

export const profileValidationSchema = Yup.object({
  patient_name: Yup.string().required("Required"),
  age: Yup.string().required("Required"),
  dob: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Address").required("Required"),
});

export const userValidationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Address").required("Required"),
  password: Yup.string().required("Required"),
});
