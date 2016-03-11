var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var schema = new Schema({
    message: {type: String, unique: true, require: true},
    sender: {type: String},
    timeStamp: {type: Date}
});

module.exports = mongoose.model('Message', schema);
