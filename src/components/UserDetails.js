import React from "react";
import { useParams } from "react-router-dom";

function UserDetails({ users }) {
  const param = useParams();

  return (
    <div>
      <h1>
        <span style={{ fontWeight: "bold" }}>Name:</span>{" "}
        {users[param.id - 1].name}
      </h1>
      <p>
        <span style={{ fontWeight: "bold" }}>Username:</span>{" "}
        {users[param.id - 1].username}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Email:</span>{" "}
        {users[param.id - 1].email}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Phone:</span>{" "}
        {users[param.id - 1].phone}
      </p>
      <p>
        <span style={{ fontWeight: "bold" }}>Website:</span>{" "}
        {users[param.id - 1].website}
      </p>
    </div>
  );
}

export default UserDetails;
