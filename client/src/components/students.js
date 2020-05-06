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
        <h1>Students</h1>
        <ul>
          <h4> This names come from the the API (backend)</h4>
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
