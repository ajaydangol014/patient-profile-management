import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import WellContainer from "../../components/well/WellContainer";
import { useNavigate, useParams } from "react-router-dom";
import AllergyForm from "./AllergyForm";
import { allergyValidationSchema } from "../../constants/constant";

const AllergyEdit = () => {
  const { id } = useParams();
  const [allergy, setAllergy] = useState({});
  const navigate = useNavigate();

  const fetchAllergyData = async (req, res) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/allergy/${id}`
      );
      setAllergy(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (values, { setSubmitting }) => {
    editAllergy(values, setSubmitting);
  };

  const editAllergy = async (values, setSubmitting) => {
    const payload = {
      allergy_name: values.allergy_name,
      userId: 1,
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/api/allergy/edit/${id}`,
        payload
      );
      if (response.status === 200) {
        navigate("/allergy");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    fetchAllergyData();
  }, []);

  const allergyInitialValues = {
    allergy_name: allergy.allergy_name,
    userId: 1,
  };

  return (
    <WellContainer title="Edit Allergy">
      <Formik
        enableReinitialize
        initialValues={allergyInitialValues}
        validationSchema={allergyValidationSchema}
        onSubmit={submitHandler}
      >
        {(formik) => <AllergyForm formik={formik} />}
      </Formik>
    </WellContainer>
  );
};

export default AllergyEdit;
