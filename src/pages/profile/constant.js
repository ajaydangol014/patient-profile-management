import * as Yup from "yup";

export const profileValidationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email Address").required("Required"),
});
