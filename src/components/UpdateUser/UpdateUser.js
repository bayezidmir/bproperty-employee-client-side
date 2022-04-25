import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [employees, setEmployees] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/employee/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const updatedUser = { name, email };

    // Sending data to server
    const url = `http://localhost:5000/employee/${id}`;
    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success :", data);
        alert("Employee Added");
        e.target.reset();
      });
  };

  return (
    <div>
      <h1>Update user from here :: {employees.name}</h1>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="submit" value="Update User" />
      </form>
    </div>
  );
};

export default UpdateUser;
