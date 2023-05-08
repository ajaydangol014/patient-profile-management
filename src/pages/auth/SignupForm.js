import React from "react";
import { ErrorMessage, Field, Form } from "formik";

const SignupForm = (props) => {
  return (
    <Form>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <Field
          type="text"
          name="name"
          id="name"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values.name}
          {...props.formik.getFieldProps("name")}
        />
        <div className="error-message">
          <ErrorMessage name="name" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <Field
          type="email"
          name="email"
          id="email"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values.email}
          {...props.formik.getFieldProps("email")}
        />
        <div className="error-message">
          <ErrorMessage name="email" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <Field
          type="text"
          name="password"
          id="password"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values.password}
          {...props.formik.getFieldProps("password")}
        />
        <div className="error-message">
          <ErrorMessage name="lastName" />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export default SignupForm;
