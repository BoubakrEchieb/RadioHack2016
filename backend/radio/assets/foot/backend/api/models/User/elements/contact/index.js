var mongoose=require('mongoose');
var schema = require('./schema.js') ;
require('./statics.js')(schema);
require('./methods.js')(schema);
module.exports = mongoose.model('User', schema) ;
