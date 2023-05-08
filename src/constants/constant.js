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
