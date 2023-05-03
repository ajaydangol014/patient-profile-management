import axios from "axios";
import { ErrorMessage, Field, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import WellContainer from "../../components/well/WellContainer";
import { profileValidationSchema } from "./constant";

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
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <Field
                type="text"
                name="firstName"
                id="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
                {...formik.getFieldProps("firstName")}
              />
              <div className="error-message">
                <ErrorMessage name="firstName" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <Field
                type="text"
                name="lastName"
                id="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
                {...formik.getFieldProps("lastName")}
              />
              <div className="error-message">
                <ErrorMessage name="lastName" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                {...formik.getFieldProps("email")}
              />
              <div className="error-message">
                <ErrorMessage name="email" />
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        )}
      </Formik>
    </WellContainer>
  );
};

export default ProfileAdd;
