import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

// import "./profile.css";
const Profile = () => {
  const [users, setUsers] = useState([]);
  const [oldUsers, setOldUsers] = useState([]);
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
    if (value.length > 0) {
      updatedList = updatedList.filter((item) => {
        return item.firstName.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      });
      setUsers(updatedList);
    } else {
      setUsers(oldUsers);
    }
  };

  return (
    <>
      <div className="search-input">
        <input type="text" onChange={filterBySearch} />
        <div>{users.length}</div>
      </div>
      {users.map((user, index) => {
        return (
          <Link to={`/profile/${user.id}`} key={index}>
            <div className="card">
              <div className="left">
                <div className="img">
                  <img className="profile_img" src={user.image} alt="" />
                </div>
              </div>
              <div className="right">
                <h2 className="name">{user.firstName}</h2>
                <p className="title">{user.department}</p>
                <p className="location">Seoul, South Korea</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default Profile;
