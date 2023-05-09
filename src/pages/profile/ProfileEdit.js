import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import WellContainer from "../../components/well/WellContainer";
import { useParams } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import { profileValidationSchema } from "../../constants/constant";

const ProfileEdit = () => {
  const { id } = useParams();
  const [user, setUsers] = useState({});
  const fields = ["id", "firstName", "lastName", "email"];

  const fetchUserData = async (req, res) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/patient-profile/${id}`
      );
      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = (values, { setSubmitting }) => {
    editPatient(values, setSubmitting);
  };

  const editPatient = async (values, setSubmitting) => {
    const payload = {
      patient_name: values.patient_name,
      age: values.age,
      email: values.email,
      dob: values.dob,
      special_attention: values.special_attention,
      userId: 1,
      allergyId: 1,
      profile_image: "",
      delFlg: false,
    };

    try {
      const response = await axios.post(
        `http://localhost:5000/api/patient-profile/edit/${id}`,
        payload
      );
      console.log(response);
    } catch (e) {
      console.log(e);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const profileInitialValues = {
    patient_name: user.patient_name,
    age: user.age,
    email: user.email,
    dob: user.dob,
    special_attention: user.special_attention,
    userId: 1,
    allergyId: 1,
    delFlg: false,
  };

  return (
    <WellContainer title="Edit Patient">
      <Formik
        enableReinitialize
        initialValues={profileInitialValues}
        validationSchema={profileValidationSchema}
        onSubmit={submitHandler}
      >
        {(formik) => <ProfileForm formik={formik} />}
      </Formik>
    </WellContainer>
  );
};

export default ProfileEdit;
