var express = require('express')
var bodyParser = require('body-parser')
var logger = require('morgan')
var mongoose = require("mongoose")
var path = require('path')
var cheerio = require('cheerio')
var request = require("request");

// Require all models
var db = require("./models")

var app = express()
var PORT = 3000

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/crudNewsDb");
// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"))
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// Use express.static to serve the public folder as a static directory
app.use(express.static(path.join(__dirname, 'public')))

request("https://www.reddit.com/r/webdev", function(error, res, html) {
    // Load the html body from request into cheerio
    var $ = cheerio.load(html);
    // For each element with a "title" class
    $('p.title').each(function(i, element) {
        // Save the text and href of each link enclosed in the current element
        var title = $(element).text();
        var link = $(element).children().attr("href");
        console.log(title)
        console.log(link)
        db.articles.remove({})
        // Insert the data in the scrapedData db
        // if(db.articles.find({})== null){
        //     db.articles.create({
        //         title: title,
        //         link: link
        //     })
        // }
        // else{
            // db.articles.remove({})
            // db.articles.create({
            //     title: title,
            //     link: link
            // })
        // }
    })
})

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './public/html/index.html'))
})

app.get('/all/articles', function(req, res){
    db.articles.find({}, function(err, data){
        if (err) throw err
        res.send(data)
    })
})
// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
})