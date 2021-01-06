const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./src/queries");

require("dotenv").config();

// Middleware
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Routes
app.get("/", (req, res) => {
  res.json({ info: "Node.js, Express, and Postgres API" });
});

app.get("/users", db.getHouses);

// initialise
app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
