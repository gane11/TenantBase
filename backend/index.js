// setup the package variables
const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");
const CircularJSON = require("circular-json");

// initialize the app
const app = express();

// set the app's functions
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// call the API
app.get("/", (req, res) => {
  // no extra url needed!
  axios
    .get("http://www.colourlovers.com/api/palettes/new?format=json")
    .then((data) => {
      // use CircularJSON because the response
      // has circular references in it
      res.send(CircularJSON.stringify(data.data));
    })
    // check for errors
    .catch((error) => {
      console.log(error.message);
    });
});

// Open for Business!
app.listen(3032, () => console.log("server started"));
