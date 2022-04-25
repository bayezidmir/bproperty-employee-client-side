import React from "react";

const AddUser = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };

    // Sending data to server
    fetch("http://localhost:5000/employee", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
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
      <h3>Please add a new user</h3>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;
