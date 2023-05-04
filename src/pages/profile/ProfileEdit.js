import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import WellContainer from "../../components/well/WellContainer";
import { profileValidationSchema } from "./constant";
import { useParams } from "react-router-dom";
import ProfileForm from "./ProfileForm";

const ProfileEdit = () => {
  const { id } = useParams();
  const isProfileAdd = !id;
  const profileInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    designation: "",
  };
  const [user, setUsers] = useState({});
  const fetchUserData = () => {
    fetch("https://dummyjson.com/users").then((response) => {
      return response.json();
      setUsers(response.json);
    });
  };

  const submitHandler = (values, { setSubmitting }) => {
    editPatient(values, setSubmitting);
  };

  const editPatient = async (values, setSubmitting) => {
    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
    };

    try {
      const response = await axios.update("url", payload);
    } catch (e) {
      console.log(e);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <WellContainer title="Edit Patient">
      <Formik
        initialValues={profileInitialValues}
        validationSchema={profileValidationSchema}
        onSubmit={submitHandler}
      >
        {(formik) => (
          // useEffect(()=>{
          //   fetchUserData();
          //   if(!isProfileAdd){
          //     const fields = ['id','firstName', 'lastName', 'email'];
          //     fields.forEach(field => formik.setFieldValue(field, user[field], false));
          //   }
          // },[]);

          <ProfileForm formik={formik} />
        )}
      </Formik>
    </WellContainer>
  );
};

export default ProfileEdit;
