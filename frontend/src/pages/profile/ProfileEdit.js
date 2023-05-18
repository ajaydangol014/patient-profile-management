import axios from "axios";
import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import WellContainer from "../../components/well/WellContainer";
import { useNavigate, useParams } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import { profileValidationSchema } from "../../constants/constant";
import { getUserId } from "../../utils/utils";

const ProfileEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const loginUserID = getUserId();
  const [user, setUsers] = useState({});

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
    console.log(values, "edit");
    const payload = {
      patient_name: values.patient_name,
      age: Number(values.age),
      email: values.email,
      dob: values.dob,
      special_attention: Boolean(values.special_attention),
      userId: loginUserID,
      allergy_id: Number(values.allergy_id),
      profile_image: "",
      delFlg: false,
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/api/patient-profile/edit/${id}`,
        payload
      );
      console.log(response);
      navigate("/profile");
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
    allergy_id: user.allergy_id,
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
