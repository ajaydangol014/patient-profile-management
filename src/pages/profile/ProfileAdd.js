import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import WellContainer from "../../components/well/WellContainer";
import { profileValidationSchema } from "./constant";
import ProfileForm from "./ProfileForm";

const ProfileAdd = () => {
  const profileInitialValues = {
    patient_name: "",
    age: "",
    dob: "",
    email: "",
    special_attention: "",
  };

  const submitHandler = async (values, { setSubmitting }) => {
    const payload = {
      patient_name: values.patient_name,
      userId: 1,
      allergy_id: 1,
      age: Number(values.age),
      dob: values.dob,
      email: values.email,
      special_attention: false,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/patient-profile/add",
        payload
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <WellContainer title="Add New Patient">
      <Formik
        initialValues={profileInitialValues}
        validationSchema={profileValidationSchema}
        onSubmit={submitHandler}
      >
        {(formik) => <ProfileForm formik={formik} />}
      </Formik>
    </WellContainer>
  );
};

export default ProfileAdd;
