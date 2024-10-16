import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar.js";
import Home from "./Home.js";
import UserDetails from "./UserDetails.js";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home users={users} />} />
          <Route path="/users/:id" element={<UserDetails users={users} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
