import React, { Component } from "react";
import "./students.css";

class Students extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    fetch("/api/students")
      .then((res) => res.json())
      .then((students) =>
        this.setState({ students: students }, () =>
          console.log("Students fetched...", students)
        )
      );
  }

  render() {
    return (
      <div>
        <h2>Studentsss</h2>
        <ul>
          hhhhhhhhh
          {this.state.students.map((student) => (
            <li key={student.id}>
              {student.firstName} {student.lastName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Students;
