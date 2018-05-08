//here goes everything that interacts with the database, starting by creating or requiring the db
const mongoose = require('mongoose');
const mongoUrl = require('../../shared/config').credentials.mongodb.url;

// set up our mongodb database
mongoose.connect(mongoUrl);

//set a variable to hold this connection
const db = mongoose.connection;

const dataSchema = mongoose.Schema({
    deviceName: {type: String},
    attributes: {type: Array},
    timestamp: {type: String},
});

const Data = module.exports = mongoose.model('Data', dataSchema);