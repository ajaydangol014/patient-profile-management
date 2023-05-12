import React, { useEffect, useState } from "react";
import { getSpecialAttention } from "../../utils/utils";

const ProfileDetail = (props) => {
  const [users, setUsers] = useState([]);
  console.log(users);
  const fetchUserData = () => {
    fetch(`http://localhost:5000/api/patient-profile/${props.viewId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data.data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="dialog-container">
      <div className="dialog">
        <div className="dialog-header">
          <div className="dialog-header__title">
            <h5>Patient Detail</h5>
          </div>
          <div className="dialog-header__close" onClick={props.onClose}>
            X
          </div>
        </div>
        <div className="dialog-content">
          <h3 className="name">{users.patient_name}</h3>
          <p className="patient-data">
            <span>Age:</span>
            {users.age}
          </p>
          <p className="patient-data">
            <span>Date of Birth:</span>
            {users.dob}
          </p>
          <p className="patient-data">
            <span>Email:</span>
            {users.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetail;
