import React from "react";
import { Field } from "formik";
import { useGroupBy } from "react-table";

const RadioButton = (props) => {
  const { label, name, options, formik, formValue, ...rest } = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className="radio-group">
        <Field name={name} {...rest}>
          {({ field }) => {
            return options.map((option) => {
              console.log(field);
              return (
                <div className="radio-button">
                  <React.Fragment key={option.key}>
                    <input
                      type="radio"
                      id={option.id}
                      {...field}
                      value={option.key}
                      checked={field.value === option.key ? true : false}
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
