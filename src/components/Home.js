import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";

function Home() {
  const users = useFetch();

  if (!users) return <h1>Loading ...</h1>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
