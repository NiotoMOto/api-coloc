var mongoose = require('mongoose'),
    bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema;


var schema = new Schema({
    username: {type: String, unique: true, require: true},
    password: { type: String, bcrypt: true },
    google: [{
      id: {type: String},
      token: {type: String}
    }]
});

schema.pre('save', function(next) {
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password);
  }
  next();
});

schema.methods.verifyPassword = function(password, cb){
  cb(bcrypt.compareSync(password, this.password));
};

module.exports = mongoose.model('User', schema);
