import * as Yup from "yup";

export const allergyValidationSchema = Yup.object({
  allergy_name: Yup.string().required("Required"),
});
