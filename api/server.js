const express = require("express");

const Students = require("./students/students-model.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.post("/students", (req, res) => {
  const admit = req.body;

  Students.insert(admit)
    .then(student => {
      console.log(student);
      res.status(200).json({ data: student });
    })
    .catch(error => {
      res.status(500).json({ errorMessage: error.message });
    });
});

module.exports = server;
