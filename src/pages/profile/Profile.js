import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../../components/table/Table";
import axios from "axios";
import Dialog from "../../components/dialog/Dialog";
import { loadUserProfileData } from "../../utils/AuthUserUtils";
import { getSpecialAttention } from "../../utils/utils";

// import "./profile.css";
const Profile = () => {
  const [users, setUsers] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const loginUserData = loadUserProfileData();
  console.log(loginUserData);

  const filteredSearchData = users.filter((user) =>
    user.patient_name.toLowerCase().includes(inputVal.toLowerCase())
  );
  const tableData = filteredSearchData;

  const fetchPatientProfileData = () => {
    fetch(`http://localhost:5000/api/patient-profile/user/${loginUserData.id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const { data: userData } = data;
        setUsers(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchPatientProfileData();
  }, []);

  const filterBySearch = (event) => {
    const value = event.target.value;
    setInputVal(value);
  };

  const deletePatientProfile = async (id, value) => {
    const payload = {
      delFlg: true,
    };
    try {
      const response = await axios.post(
        `http://localhost:5000/api/patient-profile/delete/${id}`,
        payload
      );
      return response.json();
    } catch (e) {
      console.log(e);
    }
  };

  const deleteEvent = () => {
    const getUserIdData = users.find((x) => x.id == Number(id));
    deletePatientProfile(id, getUserIdData);
    const filterRetrieveData = users.filter((x) => x.id !== Number(id));
    setUsers(filterRetrieveData);
    setOpen(false);
  };

  const openDialog = (event) => {
    setOpen(true);
    const value = event.target.value;
    setId(value);
  };

  const columns = [
    {
      Header: "Id",
      accessor: "id", // accessor is the "key" in the data
    },
    {
      Header: "Patient Name",
      accessor: "patient_name",
    },

    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Allergy",
      accessor: "allergy_id",
      Cell: (cell) => {
        return <div>{cell.row.original.allergy.allergy_name}</div>;
      },
    },
    {
      Header: "Special Attention",
      accessor: "special_attention",
      Cell: (cell) => {
        const specialData = getSpecialAttention(
          cell.row.original.special_attention
        );
        return <div>{specialData}</div>;
      },
    },
    {
      width: 300,
      Header: "Action",
      accessor: "action",
      Cell: (cell) => {
        return (
          <div className="action-btn">
            <Link
              to={`/profile/edit/${cell.row.original.id}`}
              value={cell.row.id}
              className="btn btn--success"
            >
              Edit
            </Link>
            <button
              value={cell.row.original.id}
              className="btn btn--danger"
              onClick={openDialog}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="patient-profile">
        <h2>Patient Profile</h2>
      </div>
      <div className="patient-profile__content">
        <div className="search-input">
          <input
            type="text"
            onChange={filterBySearch}
            value={inputVal}
            placeholder="Search in table"
          />
        </div>
        <Link to={`/profile/add`} className="btn btn-primary">
          Add New Patient
        </Link>
      </div>
      <Table columns={columns} data={tableData} />
      {open && (
        <Dialog onClose={() => setOpen(false)} handleEvent={deleteEvent} />
      )}
    </>
  );
};

export default Profile;
