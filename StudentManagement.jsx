import React, { useState } from "react";

function StudentManagement() {
    const [studentName, setStudentName] = useState("");
    const [rollNumber, setRollNumber] = useState("");
    const [department, setDepartment] = useState("");
    const [year, setYear] = useState("");
    const [marks, setMarks] = useState("");

    const [students, setStudents] = useState([]);
    const [errors, setErrors] = useState({});
    const [editIndex, setEditIndex] = useState(null);

    const validate = () => {
        let error = {};

        if (studentName.trim() === "") {
            error.studentName = "Name is required";
        }
        else if (studentName.length < 3) {
            error.studentName = "Name must be atleast 3 characters";
        }

        if (rollNumber.trim() === "") {
            error.rollNumber = "Roll Number is required"
        }
        else if (rollNumber.length !== 3) {
            error.rollNumber = "Roll Number must be 3 digits";
        }

        if (department === "") {
            error.department = "Please select a department";
        }

        if (year === "") {
            error.year = "Please select a year"
        }

        if (marks === "") {
            error.marks = "Marks are required";
        }
        else if (Number(marks) < 0 || Number(marks) > 100) {
            error.marks = "Marks must be between 0 and 100";
        }

        setErrors(error);
        return Object.keys(error).length == 0
    }

    const deleteStudent = (index) => {
        const updatedStudents = students.filter((student, i) => {
            return i !== index;
        })
        setStudents(updatedStudents);

    }

    const editStudent = (index) => {
        setStudentName(students[index].studentName);
        setRollNumber(students[index].rollNumber);
        setDepartment(students[index].department);
        setYear(students[index].year);
        setMarks(students[index].marks);

        setEditIndex(index);
    }

    const addStudent = () => {
        if (validate()) {

            const newStudent = {
                studentName,
                rollNumber,
                department,
                year,
                marks
            }

            if (editIndex !== null) {
                const updatedStudents = [...students];
                updatedStudents[editIndex] = newStudent;
                setStudents(updatedStudents);
                setEditIndex(null);

            }
            else {
                setStudents([...students, newStudent]);

            }

            setStudentName("");
            setRollNumber("");
            setDepartment("");
            setYear("");
            setMarks("");
            setErrors({});

        }


    }
    return (
        <>
            <div
                style={{
                    minHeight: "100vh",
                    background: "linear-gradient(to right, #dfe9f3 0%, #ffffff 100%)",
                    padding: "30px"
                }}
            >
                <div className="container py-4">
                    <div className="card border-0 shadow-lg rounded-4 p-4 mt-5 mx-auto"
                        style={{
                            background: "linear-gradient(to right,#f8fbff,#eef6ff)",
                            maxWidth: "1000px",
                            width: "100%"
                        }}>
                        <div className="text-center">
                            <h2 className="text-center text-primary fw-bold mb-4">🎓 Student Management System</h2>
                        </div>

                        <label className="fw-bold text-dark mb-2">Student Name :</label>
                        <input type="text" placeholder="Enter the name"
                            className="form-control shadow-sm"
                            value={studentName}
                            onChange={(e) => setStudentName(e.target.value)} />
                        <small className="text-danger">{errors.studentName}</small>
                        <br />


                        <label lassName="fw-bold text-dark mb-2">Roll Number</label>
                        <input type="text"
                            placeholder="Enter roll number"
                            className="form-control shadow-sm"
                            value={rollNumber}
                            onChange={(e) => setRollNumber(e.target.value)} />
                        <small className="text-danger">{errors.rollNumber}</small>
                        <br />

                        <label lassName="fw-bold text-dark mb-2">Department</label>
                        <select className="form-control shadow-sm"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}>
                            <option value="">Select Department</option>
                            <option value="AIML">AIML</option>
                            <option value="AIDS">AIDS</option>
                            <option value="CSE">CSE</option>
                            <option value="IT">IT</option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="IOT">IOT</option>
                        </select>
                        <small className="text-danger">{errors.department}</small>
                        <br />

                        <label lassName="fw-bold text-dark mb-2">Year</label>
                        <select className="form-control shadow-sm"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}>
                            <option value="">Select Year</option>
                            <option value="1st Year">1st Year</option>
                            <option value="2nd Year">2nd Year</option>
                            <option value="3rd Year">3rd Year</option>
                            <option value="4th Year">4th Year</option>

                        </select>
                        <small className="text-danger">{errors.year}</small>
                        <br />

                        <label lassName="fw-bold text-dark mb-2">Marks :</label>
                        <input type="number"
                            value={marks}
                            onChange={(e) => setMarks(e.target.value)}
                            className="form-control shadow-sm"
                            placeholder="Enter Marks"
                        />
                        <small className="text-danger">{errors.marks}</small>
                        <br />

                        <button className={`btn w-100 fw-bold py-2 ${editIndex !== null
                            ? "btn-warning"
                            : "btn-success"
                            }`} onClick={addStudent}>
                            {editIndex !== null ? "Update Student" : "Add Student"} </button>

                    </div>

                    {students.length > 0 && (

                        <div className="card border-0 shadow-lg rounded-4 p-4 mt-5 mx-auto"
                            style={{
                                background: "linear-gradient(to right,#f8fbff,#eef6ff)",
                                maxWidth: "1000px",
                                width: "100%"
                            }}>
                            <h3 className="text-center text-primary fw-bold mb-4">Student List</h3>
                            <div className="table-responsive">
                                <table className="table table-hover text-center align-middle"
                                    style={{
                                        borderRadius: "12px",
                                        overflow: "hidden"
                                    }}>
                                    <thead style={{
                                        background: "linear-gradient(to right,#0d6efd,#4facfe)",
                                        color: "white"

                                    }}>
                                        <tr>
                                            <th>Name</th>
                                            <th>Roll No</th>
                                            <th>Department</th>
                                            <th>Year</th>
                                            <th>Marks</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {students.map((student, index) => (
                                            <tr style={{
                                                verticalAlign: "middle"
                                            }} key={index}>
                                                <td>{student.studentName}</td>
                                                <td>{student.rollNumber}</td>
                                                <td>{student.department}</td>
                                                <td>{student.year}</td>
                                                <td>{student.marks}</td>

                                                <td>
                                                    <button
                                                        className="btn btn-warning btn-sm rounded-pill px-3 me-2"
                                                        onClick={() => editStudent(index)}
                                                    >
                                                        ✏  Edit
                                                    </button>

                                                    <button
                                                        className="btn btn-danger btn-sm rounded-pill px-3"
                                                        onClick={() => deleteStudent(index)}
                                                    >
                                                        🗑 Delete
                                                    </button>
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
export default StudentManagement