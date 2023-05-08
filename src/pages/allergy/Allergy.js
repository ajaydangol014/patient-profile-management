import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../../components/table/Table";
import axios from "axios";
import Dialog from "../../components/dialog/Dialog";

const Allergy = () => {
  const [users, setUsers] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const filteredSearchData = users.filter((user) =>
    user.allergy_name.toLowerCase().includes(inputVal.toLowerCase())
  );
  console.log(filteredSearchData);
  const tableData = filteredSearchData;

  const fetchUserData = () => {
    fetch("http://localhost:5000/api/allergy")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
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
    setInputVal(value);
  };

  const deleteEvent = () => {
    // deletePatientProfile(id);
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
      Header: "Allergy Name",
      accessor: "allergy_name",
    },
    {
      width: 300,
      Header: "Action",
      accessor: "action",
      Cell: (cell) => (
        <div className="action-btn">
          <Link
            to={`/allergy/edit/${cell.row.id}`}
            value={cell.row.id}
            className="btn btn--success"
          >
            Edit
          </Link>
          <button
            value={cell.row.id}
            className="btn btn--danger"
            onClick={openDialog}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="patient-profile allergy">
        <h2>Allergy</h2>
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
        <Link to={`/allergy/add`} className="btn btn-primary">
          Add Allergy
        </Link>
      </div>
      <Table columns={columns} data={tableData} />
      {open && (
        <Dialog onClose={() => setOpen(false)} handleEvent={deleteEvent} />
      )}
    </>
  );
};

export default Allergy;
