import axios from "axios";
import { Formik } from "formik";
import React from "react";
import { loginValidationSchema } from "../../constants/constant";
import { useNavigate } from "react-router";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

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
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
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
