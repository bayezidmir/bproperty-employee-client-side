import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/employee")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  const handleDeleteUser = (id) => {
    const agreement = window.confirm("Are you sure?");

    if (agreement) {
      const url = `http://localhost:5000/employee/${id}`;

      fetch(url, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingEmployees = employees.filter(
              (employee) => employee._id !== id
            );
            setEmployees(remainingEmployees);
          }
        });
    }
  };

  return (
    <div>
      <h1>Welcome to Node MongoDB CRUD operation</h1>
      <h3>Total Number of Employees: {employees.length}</h3>
      <div>
        {employees.map((employee) => (
          <ul key={employee._id}>
            <p>
              Name: {employee.name}; Email: {employee.email}{" "}
              <button onClick={() => handleDeleteUser(employee._id)}>X</button>
              <Link to={`/update/${employee._id}`}>
                <button>Update</button>
              </Link>
            </p>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Home;
