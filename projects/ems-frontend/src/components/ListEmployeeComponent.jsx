import React, { useEffect, useRef, useState } from "react";
import { deleteEmployee, listEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
const ListEmployeeComponent = () => {
  /* const dummydata = [
    {
      id: 1,
      firstName: "akshay",
      lastName: "kumar",
      email: "ak@gmail.com",
    },
    {
      id: 2,
      firstName: "ajay",
      lastName: "kumar",
      email: "aj@gmail.com",
    },
    {
      id: 3,
      firstName: "akhil",
      lastName: "kumar",
      email: "akl@gmail.com",
    },
    {
      id: 4,
      firstName: "shay",
      lastName: "kumar",
      email: "sk@gmail.com",
    },
  ]; */

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log("Error in fetchign employee record");
      });
  });
  const navigator = useNavigate();
  function AddNewEmployee() {
    navigator("/add-employee");
  }
  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);
  }
  function delete_Employee(id) {
    deleteEmployee(id).then((response) => {});
    navigator(`/delete-employee/${id}`);
  }

  return (
    <div className="container">
      <button
        className="btn btn-success btn-lg float-right"
        onClick={AddNewEmployee}
      >
        Add Employee
      </button>
      <h1 className="text-center">List of employee</h1>
      <table className="table table-stripped table-bordered">
        <thead>
          <tr>
            <td>first Name</td>
            <td>last Name</td>
            <td>email id</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.firstname}</td>
              <td>{employee.lastname}</td>
              <td>{employee.email}</td>
              <td>
                <button
                  className="btn btn-primary btn-info buttonclass"
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger btn-info buttonclass"
                  onClick={() => delete_Employee(employee.id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComponent;
