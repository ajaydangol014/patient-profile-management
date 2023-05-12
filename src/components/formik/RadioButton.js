import React from "react";
import { Field } from "formik";
import { useGroupBy } from "react-table";
import { useParams } from "react-router-dom";

const RadioButton = (props) => {
  const { label, name, options, formik, formValue, ...rest } = props;
  const { id } = useParams();
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="radio-group">
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => {
              let checkedState = field.value;
              if (id) {
                checkedState = field.value === option.key ? true : "";
              }
              return (
                <div className="radio-button">
                  <React.Fragment key={option.key}>
                    <input
                      type="radio"
                      id={option.id}
                      {...field}
                      value={option.key}
                      checked={checkedState}
                    />
                    <label htmlFor={option.id}>{option.value}</label>
                  </React.Fragment>
                </div>
              );
            });
          }}
        </Field>
      </div>
    </div>
  );
};

export default RadioButton;
