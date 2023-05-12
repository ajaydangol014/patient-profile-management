import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { loginValidationSchema } from "../../constants/constant";
import LoginForm from "./LoginForm";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const userInitialValues = {
    password: "",
    email: "",
  };

  const submitHandler = async (values, { setSubmitting }) => {
    const payload = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/",
        payload
      );
      if (response.data.data.token) {
        localStorage.setItem("token", response.data.data.token);
        window.location.href = "http://localhost:3000/dashboard";
        // navigate("/dashboard", { replace: true });
      } else {
        console.log("error");
      }
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
          <h4>Welcome Back!!</h4>
          <span className="subtitle">
            Log in into your existed account of{" "}
            <strong>Patient Profile Management.</strong>
          </span>
        </div>
        <div className="main-body__content">
          <Formik
            initialValues={userInitialValues}
            validationSchema={loginValidationSchema}
            onSubmit={submitHandler}
          >
            {(formik) => <LoginForm formik={formik} />}
          </Formik>

          <div className="signup-content">
            If you haven't registered yet. Please do{" "}
            <Link to={"/signup"}>Signup</Link> first.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
