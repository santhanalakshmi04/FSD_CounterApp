import React, { useState } from "react";

function EmployeeManagement() {
    const [employeeName, setEmployeeName] = useState("");
    const [employeeID, setEmployeeID] = useState("");
    const [department, setDepartment] = useState("");
    const [designation, setDesignation] = useState("");
    const [salary, setSalary] = useState("");
    const [experience, setExperience] = useState("");
    const [email, setEmail] = useState("");

    const [employees, setEmployees] = useState([]);
    const [errors, setErrors] = useState({});
    const [editIndex, setEditIndex] = useState(null);

    const validate = () => {
        let error = {};

        if (employeeName.trim() === "") {
            error.employeeName = "Name is required";
        }
        else if (employeeName.length < 3) {
            error.employeeName = "Name should be atleast 3 character";
        }

        if (employeeID.trim() === "") {
            error.employeeID = "ID is requied";

        }
        else if (employeeID.length !== 4) {
            error.employeeID = "EmployeeID must be atleast 4 digit";
        }

        if (department === "") {
            error.department = "Select the dropdown";
        }

        if (designation.trim() === "") {
            error.designation = "Name is required";
        }
        else if (designation.length < 3) {
            error.designation = "Designation must be atleast 3 character";
        }

        if (salary.trim() === "") {
            error.salary = "Salary is required"
        }
        else if (Number(salary) <= 0) {
            error.salary = "Salary must be greater than 0"
        }


        if (experience.trim() === "") {
            error.experience = "Experience is required";
        }
        else if (Number(experience) < 0 || Number(experience) > 40) {
            error.experience = "Experience should be between 0 and 40"
        }

        if (email.trim() === "") {
            error.email = "Email is required"
        }

        setErrors(error);
        return Object.keys(error).length === 0
    }

    const deleteEmployee = (index) => {
        const updatedEmployees = employees.filter((employee, i) => {
            return i !== index;
        })
        setEmployees(updatedEmployees);
        setEditIndex(null);
    }

    const editEmployee = (index) => {
        setEmployeeName(employees[index].employeeName);
        setEmployeeID(employees[index].employeeID);
        setDepartment(employees[index].department);
        setDesignation(employees[index].designation);
        setSalary(employees[index].salary);
        setExperience(employees[index].experience);
        setEmail(employees[index].email);

        setEditIndex(index);
    }

    const addEmployee = () => {

        if (validate()) {

            const newEmployee = {
                employeeName,
                employeeID,
                department,
                designation,
                salary,
                experience,
                email

            }

            if (editIndex !== null) {
                const updatedEmployees = [...employees];
                updatedEmployees[editIndex] = newEmployee;
                setEmployees(updatedEmployees);
                setEditIndex(null);
            }
            else {
                setEmployees([...employees, newEmployee]);

            }

            setEmployeeName("");
            setEmployeeID("");
            setDepartment("");
            setDesignation("");
            setSalary("");
            setExperience("");
            setEmail("");
            setErrors({});
        }
    }

    return (
        <>
            <div
                style={{
                    minHeight: "100vh",
                    background: "#F5F6FA",
                    padding: "30px"
                }}
            >
                <div className="container py-4">
                    <div className="card shadow-lg border-0 rounded-4 p-4 mx-auto"
                        style={{
                            width: "100%",
                            maxWidth: "1100px",
                            background: "#FFFFFF",
                            color: "white"
                        }}>
                        <div className="text-center">
                            <h2 className="fw-bold"
                                style={{
                                    color: "#1A237E"
                                }}>👨‍💼 Employee Management System</h2>
                        </div>
                        <hr />

                        <label style={{ color: "#1F2937", fontWeight: "600" }}>Employee Name : </label>
                        <input type="text"
                            placeholder="Enter the name"
                            value={employeeName}
                            className="form-control"
                            onChange={(e) => setEmployeeName(e.target.value)}
                        />
                        <small className="text-danger">{errors.employeeName}</small>
                        <br />

                        <label style={{ color: "#1F2937", fontWeight: "600" }}>Employee ID: </label>
                        <input type="number"
                            placeholder="Enter the ID"
                            value={employeeID}
                            className="form-control"
                            onChange={(e) => setEmployeeID(e.target.value)}
                        />
                        <small className="text-danger">{errors.employeeID}</small>
                        <br />

                        <label style={{ color: "#1F2937", fontWeight: "600" }}>Department : </label>
                        <select
                            value={department}
                            className="form-control"
                            onChange={(e) => setDepartment(e.target.value)}
                        >
                            <option value="">Select dropdown</option>
                            <option value="HR">HR</option>
                            <option value="IT">IT</option>
                            <option value="Developement">Developement</option>
                            <option value="Finance">Finance</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Sales">Sales</option>

                        </select>
                        <small className="text-danger">{errors.department}</small>
                        <br />

                        <label style={{ color: "#1F2937", fontWeight: "600" }}>Designation : </label>
                        <input type="text"
                            placeholder="Enter the designation"
                            value={designation}
                            className="form-control"
                            onChange={(e) => setDesignation(e.target.value)}
                        />
                        <small className="text-danger">{errors.designation}</small>
                        <br />

                        <label style={{ color: "#1F2937", fontWeight: "600" }}>Salary : </label>
                        <input type="number"
                            placeholder="Enter the Salary"
                            value={salary}
                            className="form-control"
                            onChange={(e) => setSalary(e.target.value)}
                        />
                        <small className="text-danger">{errors.salary}</small>
                        <br />

                        <label style={{ color: "#1F2937", fontWeight: "600" }}>Experience : </label>
                        <input type="number"
                            placeholder="Enter the Experience"
                            value={experience}
                            className="form-control"
                            onChange={(e) => setExperience(e.target.value)}
                        />
                        <small className="text-danger">{errors.experience}</small>
                        <br />

                        <label style={{ color: "#1F2937", fontWeight: "600" }}>Email : </label>
                        <input type="email"
                            placeholder="Enter the email"
                            value={email}
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <small className="text-danger">{errors.email}</small>
                        <br />

                        <button onClick={addEmployee}
                            className="btn w-100 fw-bold"
                            style={{
                                background: "#1A237E",
                                color: "white"
                            }}>{editIndex !== null ? "Update Employee" : "Add Employee"}</button>

                    </div>
                    <br />

                    {employees.length > 0 && (
                        <div>
                            <h3 className="text-center fw-bold mb-4"
                                style={{
                                    color: "#1A237E"
                                }}>
                                📋 Employee List
                            </h3>
                            <div className="card shadow-lg border-0 rounded-4 p-4 mt-4"
                                style={{
                                    width: "100%",
                                    maxWidth: "1100px",
                                    background: "#1E293B",
                                    color: "white",
                                    margin: "30px auto"
                                }}>
                                <table className="table table-bordered table-hover text-center align-middle">
                                    <thead style={{
                                        background: "#1A237E",
                                        color: "white"
                                    }}>
                                        <tr>
                                            <th>Employee Name</th>
                                            <th>Employee ID</th>
                                            <th>Department</th>
                                            <th>Designation</th>
                                            <th>Salary</th>
                                            <th>Experience</th>
                                            <th>Email</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {employees.map((employee, index) => (
                                            <tr
                                                key={index}>
                                                <td>{employee.employeeName}</td>
                                                <td>{employee.employeeID}</td>
                                                <td>{employee.department}</td>
                                                <td>{employee.designation}</td>
                                                <td>{employee.salary}</td>

                                                <td>{employee.experience}</td>
                                                <td>{employee.email}</td>
                                                <td>
                                                    <button className="btn btn-sm me-2"
                                                        style={{
                                                            background: "#FFC107",
                                                            color: "#000"
                                                        }}
                                                        onClick={() => editEmployee(index)}> ✏Edit</button>
                                                    <button className="btn btn-danger btn-sm" onClick={() => deleteEmployee(index)}>🗑delete</button>
                                                </td>
                                            </tr>

                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                </div>
            </div>


        </>
    )
}
export default EmployeeManagement