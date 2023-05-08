import React from "react";
import { ErrorMessage, Field, Form } from "formik";

const ProfileForm = (props) => {
  return (
    <Form>
      <div className="form-group">
        <label htmlFor="patient_name">Patient Name</label>
        <Field
          type="text"
          name="patient_name"
          id="patient_name"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values.patient_name}
          {...props.formik.getFieldProps("patient_name")}
        />
        <div className="error-message">
          <ErrorMessage name="patient_name" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <Field
          type="text"
          name="age"
          id="age"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values.age}
          {...props.formik.getFieldProps("age")}
        />
        <div className="error-message">
          <ErrorMessage name="lastName" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="dob">Date of Birth</label>
        <Field
          type="date"
          name="dob"
          id="dob"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values.dob}
          {...props.formik.getFieldProps("dob")}
        />
        <div className="error-message">
          <ErrorMessage name="dob" />
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
        <label htmlFor="special_attention">Special Attention</label>
        <Field
          type="text"
          name="special_attention"
          id="special_attention"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values.special_attention}
          {...props.formik.getFieldProps("special_attention")}
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
