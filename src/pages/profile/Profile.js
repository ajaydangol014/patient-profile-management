import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../../components/table/Table";
import axios from "axios";
import Dialog from "../../components/dialog/Dialog";

// import "./profile.css";
const Profile = () => {
  const [users, setUsers] = useState([]);
  const [oldUsers, setOldUsers] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const [open, setOpen] = useState(false);
  const fetchUserData = () => {
    fetch("https://dummyjson.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.users);
        setOldUsers(data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const filterBySearch = (event) => {
    const value = event.target.value;
    let updatedList = [...users];
    if (value !== "") {
      updatedList = oldUsers.filter((item) => {
        return item.firstName.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      });
      setUsers(updatedList);
    } else {
      setUsers(oldUsers);
    }
    setInputVal(value);
  };

  // const deletePatientProfile=async(id){
  //   const payload={
  //     id:id
  //   }
  // }

  const deleteAlert = (event) => {
    const value = event.target.value;
  };

  const openDialog = (event) => {
    setOpen(true);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id", // accessor is the "key" in the data
      },
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
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
        width: 300,
        Header: "Action",
        accessor: "action",
        Cell: (cell) => (
          <button
            value={cell.row.id}
            className="btn btn--danger"
            onClick={openDialog}
          >
            Delete
          </button>
        ),
      },
    ],
    []
  );

  const tableData = React.useMemo(() => [
    users.map((user) => {
      return Object(user);
    }),
    [],
  ]);

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
      <Table columns={columns} data={tableData[0]} />
      {open && <Dialog onClose={() => setOpen(false)} />}
    </>
  );
};

export default Profile;
