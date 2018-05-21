var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var mongoose = require("mongoose")

// Require all models
var db = require("./models")

var app = express()
var PORT = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/populatedb");
// Configure middleware


// Use morgan logger for logging requests
app.use(logger("dev"))
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }))
// Use express.static to serve the public folder as a static directory
app.use(express.static("public"))


// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
    console.log("http://localhost3000")
})