import axios from "axios";
import { Formik } from "formik";
import React, { useState } from "react";
import WellContainer from "../../components/well/WellContainer";
import ProfileForm from "./ProfileForm";
import { profileValidationSchema } from "../../constants/constant";
import { useNavigate } from "react-router";
import { getUserId } from "../../utils/utils";

const ProfileAdd = () => {
  const navigate = useNavigate();
  const loginUserID = getUserId();
  const profileInitialValues = {
    patient_name: "",
    age: "",
    dob: "",
    email: "",
    special_attention: "",
    allergy_id: "",
  };

  const submitHandler = async (values, { setSubmitting }) => {
    const payload = {
      patient_name: values.patient_name,
      userId: loginUserID,
      allergy_id: Number(values.allergy_id),
      age: Number(values.age),
      dob: values.dob,
      email: values.email,
      special_attention: Boolean(values.special_attention),
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/patient-profile/add",
        payload
      );
      navigate("/profile");
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
