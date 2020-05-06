const express = require("express");
const app = express();
app.get("/api/students", (req, res) => {
  const students = [
    { id: 1, firstName: "Aymen", lastName: "A" },
    { id: 2, firstName: "Riyadh", lastName: "B" },
    { id: 3, firstName: "Ikram", lastName: "M" },
    { id: 3, firstName: "Selma", lastName: "R" },
  ];
  res.json(students);
});
const port = 5000;
app.listen(port, () => `Server running on port ${port}`);
