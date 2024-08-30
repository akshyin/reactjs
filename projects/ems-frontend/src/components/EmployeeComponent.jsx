import { useEffect, useState } from "react";
import {
  createEmployee,
  getEmployee,
  updateEmployee,
} from "../services/EmployeeService";
import { useNavigate, useParams } from "react-router-dom";
const EmployeeComponent = () => {
  const [firstname, SetFirstname] = useState("");
  const [lastname, SetLastname] = useState("");
  const [email, SetEmail] = useState("");
  const navigator = useNavigate();
  function handleLastname(e) {
    SetLastname(e.target.value);
  }
  function handleFirstname(e) {
    SetFirstname(e.target.value);
  }
  function handleEmail(e) {
    SetEmail(e.target.value);
  }
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getEmployee(id)
        .then((response) => {
          SetFirstname(response.data.firstname);
          SetLastname(response.data.lastname);
          SetEmail(response.data.email);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  const saveEmployee = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const employee = { firstname, lastname, email };
      if (id) {
        updateEmployee(id, employee).then((response) => {
          navigator("/employees");
        });
      } else {
        createEmployee(employee).then((response) => {
          navigator("/employees");
        });
      }
    } else {
    }
  };

  const [errors, SetErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  function validateForm() {
    let valid = true;
    const errorscopy = { ...errors };
    if (firstname.trim()) {
      errorscopy.firstname = "";
    } else {
      errorscopy.firstname = "First Name is required";
      valid = false;
    }
    if (lastname.trim()) {
      errorscopy.lastname = "";
    } else {
      errorscopy.lastname = "lastname Name is required";
      valid = false;
    }
    if (email.trim()) {
      errorscopy.email = "";
    } else {
      errorscopy.email = "email is required";
      valid = false;
    }
    SetErrors(errorscopy);
    return valid;
  }

  function pagetitle() {
    if (id) {
      return <h2 className="text-center">Update Employee</h2>;
    } else {
      return <h2 className="text-center">Add Employee</h2>;
    }
  }

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          {pagetitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">First Name:</label>
                <input
                  type="text"
                  placeholder="first name "
                  name="firstname"
                  value={firstname}
                  onChange={handleFirstname}
                  className={`form-control ${
                    errors.firstname ? "is-invalid" : ""
                  }`}
                ></input>
                {errors.firstname && (
                  <div className="invalid-feedback">{errors.firstname}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Last Name:</label>
                <input
                  type="text"
                  placeholder="last name "
                  name="lastname"
                  value={lastname}
                  onChange={handleLastname}
                  className={`form-control ${
                    errors.lastname ? "is-invalid" : ""
                  }`}
                ></input>
                {errors.lastname && (
                  <div className="invalid-feedback">{errors.lastname}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email:</label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  value={email}
                  onChange={handleEmail}
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                ></input>
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <button className="btn btn-success" onClick={saveEmployee}>
                Sucess
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployeeComponent;
