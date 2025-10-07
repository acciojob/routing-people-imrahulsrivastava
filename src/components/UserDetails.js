import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

function UserDetails() {
  const { id } = useParams();
  const user = useFetch(id);

  if (!user) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>User Details</h1>
      <p>
        <span style={{ fontWeight: "bold" }}>Name:</span> {user.name}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Username:</span> {user.username}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Email:</span> {user.email}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Phone:</span> {user.phone}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Website:</span> {user.website}
      </p>
    </div>
  );
}

export default UserDetails;
