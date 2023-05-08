import axios from "axios";
import { Formik } from "formik";
import React from "react";
import WellContainer from "../../components/well/WellContainer";
import { allergyValidationSchema } from "../../constants/constant";
import AllergyForm from "./AllergyForm";

const AllergyAdd = () => {
  const allergyInitialValues = {
    allergy_name: "",
  };

  const submitHandler = async (values, { setSubmitting }) => {
    const payload = {
      patient_name: values.patient_name,
      userId: 1,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/allergy/add",
        payload
      );
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
        initialValues={allergyInitialValues}
        validationSchema={allergyValidationSchema}
        onSubmit={submitHandler}
      >
        {(formik) => <AllergyForm formik={formik} />}
      </Formik>
    </WellContainer>
  );
};

export default AllergyAdd;
