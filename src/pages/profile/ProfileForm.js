import React from "react";
import { ErrorMessage, Field, Form } from "formik";

const ProfileForm = (props) => {
  return (
    <Form>
      <div className="form-group">
        <label htmlFor="firstName">First Name</label>
        <Field
          type="text"
          name="firstName"
          id="firstName"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values.firstName}
          {...props.formik.getFieldProps("firstName")}
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
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values.lastName}
          {...props.formik.getFieldProps("lastName")}
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
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values.email}
          {...props.formik.getFieldProps("email")}
        />
        <div className="error-message">
          <ErrorMessage name="email" />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export default ProfileForm;
