//here goes everything that interacts with the database, starting by creating or requiring the db
const mongoose = require('mongoose');
const mongoUrl = require('../../shared/config').credentials.mongodb.url;

// set up our mongodb database
mongoose.connect(mongoUrl);

//set a variable to hold this connection
const db = mongoose.connection;

const dataSchema = mongoose.Schema({
    ESP_OPS: {type: String},
    attributeName: {type: String},
    categories: [String],
    dataType: {type: String},
    deviceName: {type: String},
    timestamp: {type: String},
    value: {type: String},
    fixedValue: {type: String},
    min: {type: String},
    max: {type: String}
});

const Data = module.exports = mongoose.model('Data', dataSchema);