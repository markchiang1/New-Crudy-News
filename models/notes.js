
var mongoose = require('mongoose')

var Schema = mongoose.Schema

var noteSchema = new Schema({
    date: {
        type: Date
    },
    message: {
        type: String
    }
})

var notes = mongoose.model('notes', noteSchema)

module.exports = notes

