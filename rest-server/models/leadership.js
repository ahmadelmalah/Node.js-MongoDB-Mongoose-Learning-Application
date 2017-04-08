// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var leadershipSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
      type: String
    },
    designation: {
        type: String
    },
    abbr: {
        type: String
    },
    description: {
        type: String
    }
}, {
    timestamps: true
});

// the schema is useless so far
// we need to create a model using it
var leadership = mongoose.model('Leadership', leadershipSchema);

// make this available to our Node applications
module.exports = leadership;
