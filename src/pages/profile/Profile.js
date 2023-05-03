import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "../../components/table/Table";

// import "./profile.css";
const Profile = () => {
  const [users, setUsers] = useState([]);
  const [oldUsers, setOldUsers] = useState([]);
  const [inputVal, setInputVal] = useState("");
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
          <button value={cell.accessor} className="btn btn-success">
            Button
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
      <div>
        <h2>Patient Profile</h2>
      </div>
      <div className="search-input">
        <input type="text" onChange={filterBySearch} value={inputVal} />
      </div>
      <Link to={`/profile/add`} className="btn btn-primary">
        Add Patient
      </Link>
      <Table columns={columns} data={tableData[0]} />
    </>
  );
};

export default Profile;
