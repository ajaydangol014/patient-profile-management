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
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.data.token);
        navigate("/dashboard");
      }
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
        validationSchema={loginValidationSchema}
        onSubmit={submitHandler}
      >
        {(formik) => <LoginForm formik={formik} />}
      </Formik>

      <div className="signup">
        <Link to={"/signup"}>Signup</Link>
      </div>
    </div>
  );
};

export default Login;
