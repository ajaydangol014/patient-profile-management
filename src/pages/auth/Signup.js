import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { userValidationSchema } from "../../constants/constant";
import { useNavigate } from "react-router";
import SignupForm from "./SignupForm";
import { Link } from "react-router-dom";

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
    <div className="main-body">
      <div className="well well--md">
        <div className="title">
          <h4>Let's Get Started!</h4>
          <span className="subtitle">
            Create an account to <strong>Patient Profile Managment</strong> to
            get all the features.
          </span>
        </div>
        <div className="main-body__content">
          <Formik
            initialValues={userInitialValues}
            validationSchema={userValidationSchema}
            onSubmit={submitHandler}
          >
            {(formik) => <SignupForm formik={formik} />}
          </Formik>
        </div>
        <div className="signup-content">
          If you have already registered. Please go to{" "}
          <Link to={"/login"}>Login</Link>.
        </div>
      </div>
    </div>
  );
};

export default Signup;
