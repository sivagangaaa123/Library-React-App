import React from 'react'
import NavigationBar from './NavigationBar'

const ViewAllStudents = () => {

    const students = [
        {
            admissionNo: "STU001",
            name: "Arjun Nair",
            grade: "10",
            image: "https://via.placeholder.com/150"
        },
        {
            admissionNo: "STU002",
            name: "Anjali Menon",
            grade: "9",
            image: "https://via.placeholder.com/150"
        },
        {
            admissionNo: "STU003",
            name: "Rahul Kumar",
            grade: "11",
            image: "https://via.placeholder.com/150"
        },
        {
            admissionNo: "STU004",
            name: "Meera Joseph",
            grade: "12",
            image: "https://via.placeholder.com/150"
        },
        {
            admissionNo: "STU005",
            name: "Akhil Das",
            grade: "8",
            image: "https://via.placeholder.com/150"
        },
        {
            admissionNo: "STU006",
            name: "Neha R",
            grade: "10",
            image: "https://via.placeholder.com/150"
        },
        {
            admissionNo: "STU007",
            name: "Vishnu Prasad",
            grade: "9",
            image: "https://via.placeholder.com/150"
        },
        {
            admissionNo: "STU008",
            name: "Sneha S",
            grade: "11",
            image: "https://via.placeholder.com/150"
        },
        {
            admissionNo: "STU009",
            name: "Adithya Krishnan",
            grade: "12",
            image: "https://via.placeholder.com/150"
        },
        {
            admissionNo: "STU010",
            name: "Gayathri P",
            grade: "10",
            image: "https://via.placeholder.com/150"
        }
    ]

    return (
        <div>
            <NavigationBar />

            <div className="container mt-4">
                <div className="row g-4">

                    {students.map((student, index) => (
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                            <div className="card h-100 shadow">
                                <img
                                    src={student.image}
                                    className="card-img-top"
                                    alt="Student"
                                />

                                <div className="card-body">
                                    <h5 className="card-title">{student.name}</h5>

                                    <p className="card-text">
                                        <strong>Admission Number:</strong> {student.admissionNo}
                                    </p>

                                    <p className="card-text">
                                        <strong>Class:</strong> {student.grade}
                                    </p>

                                    <button className="btn btn-primary w-100">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ViewAllStudents
