var mongoose = require('mongoose')

// Save a reference to the Schema constructor
var Schema = mongoose.Schema

var articleSchema = new Schema({
    title: {
        type: String,
        unique: true
    },
    link: {
        type: String
    },
    notes: [
        {
            // Store ObjectIds in the array
            type: Schema.Types.ObjectId,
            // The ObjectIds will refer to the ids in the Note model
            ref: "notes"
        }
    ]
})

// This creates our model from the above schema, using mongoose's model method
var articles = mongoose.model("articles", articleSchema);

// Export the articles model
module.exports = articles


