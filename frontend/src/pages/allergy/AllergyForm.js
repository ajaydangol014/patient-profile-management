import React from "react";
import { ErrorMessage, Field, Form } from "formik";

const AllergyForm = (props) => {
  return (
    <Form>
      <div className="form-group">
        <label htmlFor="patient_name">Allergy Name</label>
        <Field
          type="text"
          name="allergy_name"
          id="allergy_name"
          onChange={props.formik.handleChange}
          onBlur={props.formik.handleBlur}
          value={props.formik.values.allergy_name}
          {...props.formik.getFieldProps("allergy_name")}
        />
        <div className="error-message">
          <ErrorMessage name="allergy_name" />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export default AllergyForm;
