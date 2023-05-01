import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProfileDetail() {
  const [users, setUsers] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(false);
  const fetchUserData = () => {
    setError(false);
    fetch("https://dummyjson.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    setloading(true);
    fetchUserData();
  }, []);

  console.log(users);

  const { id } = useParams();
  const profileId = users.find((user) => `${user.id}` === id);

  if (loading) {
    return <div> Loading..... </div>;
  }

  if (error) {
    return <div>Error.................</div>;
  }

  if (!profileId) {
    return <div> No Data..............</div>;
  }

  return (
    <div className="card">
      <div className="left">
        <div className="img">
          <img className="profile_img" src={profileId.image} alt="" />
        </div>
      </div>
      <div className="right">
        <h2 className="name">{profileId.firstName}</h2>
        <p className="title">{profileId.email}</p>
        <p className="location">{profileId.username}</p>
        <p className="location">{profileId.company.department}</p>
        <p className="location">{profileId.gender}</p>
        <p className="location">{profileId.university}</p>
        <p className="location">{profileId.address.address}</p>
        <p className="location">{profileId.domain}</p>
        <p className="location">{profileId.bloodGroup}</p>
      </div>
    </div>
  );
}
