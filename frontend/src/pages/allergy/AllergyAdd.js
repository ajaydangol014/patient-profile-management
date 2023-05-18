import axios from "axios";
import { Formik } from "formik";
import React from "react";
import WellContainer from "../../components/well/WellContainer";
import { allergyValidationSchema } from "../../constants/constant";
import AllergyForm from "./AllergyForm";
import { useNavigate } from "react-router-dom";

const AllergyAdd = () => {
  const navigate = useNavigate();
  const allergyInitialValues = {
    allergy_name: "",
  };

  const submitHandler = async (values, { setSubmitting }) => {
    const payload = {
      allergy_name: values.allergy_name,
      userId: 1,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/allergy/add",
        payload
      );
      if (response.status == 200) {
        navigate("/allergy");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <WellContainer title="Add Allergy">
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
