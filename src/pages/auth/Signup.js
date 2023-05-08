import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { userValidationSchema } from "../../constants/constant";
import { useNavigate } from "react-router";
import SignupForm from "./SignupForm";

const Signup = () => {
  const navigate = useNavigate();
  const userInitialValues = {
    name: "",
    password: "",
    image: "",
    email: "",
  };

  const submitHandler = async (values, { setSubmitting }) => {
    const payload = {
      name: values.name,
      email: values.email,
      password: values.password,
      image: "",
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/add",
        payload
      );
      navigate("/login");
    } catch (e) {
      console.log(e);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="well">
      <Formik
        initialValues={userInitialValues}
        validationSchema={userValidationSchema}
        onSubmit={submitHandler}
      >
        {(formik) => <SignupForm formik={formik} />}
      </Formik>
    </div>
  );
};

export default Signup;
