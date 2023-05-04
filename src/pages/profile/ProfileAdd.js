import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import WellContainer from "../../components/well/WellContainer";
import { profileValidationSchema } from "./constant";
import ProfileForm from "./ProfileForm";

const ProfileAdd = () => {
  const profileInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    designation: "",
  };

  const submitHandler = async (values, { setSubmitting }) => {
    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
    };

    try {
      const response = await axios.post("url", payload);
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
