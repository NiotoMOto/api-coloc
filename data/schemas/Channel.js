var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var schema = new Schema({
    name: {type: String, unique: true, require: true},
    id: {type: String, unique: true, require: true}
});

module.exports = mongoose.model('Channel', schema);
