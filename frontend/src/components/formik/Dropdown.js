import { Field } from "formik";
import React from "react";
import { render } from "react-dom";

const Dropdown = (props) => {
  const { fieldname, options } = props;
  return (
    <div>
      <Field
        name={fieldname}
        as="select"
        onChange={props.formik.handleChange}
        onBlur={props.formik.handleBlur}
        value={props.formValue}
      >
        {options.map((currentVal, index) => {
          return (
            <option value={currentVal.id}>{currentVal.allergy_name}</option>
          );
        })}
      </Field>
    </div>
  );
};

export default Dropdown;
