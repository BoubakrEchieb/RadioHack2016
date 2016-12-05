var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/radio');

/**
 * We check if the connection is ok
 * If so we will continue to load everything ...
 */
var db = mongoose.connection;

console.log('Try to connect to MongoDB via Mongoose ...');

db.on('error', console.error.bind(console, 'Mongoose connection error:'));
db.once('open', function callback()
{
    console.error('Connected to MongoDB !');
});

/**
 * Let's make our Mongodb Schemas/Models
 */
 var findOrCreate = function(model, criteria, cb)
 {
     model.update(criteria, criteria, {upsert: true}, function(err, numberAffected, raw){
         if ( ! raw.updatedExisting ) {
             console.log('Created instance')
         } else {
             console.log('Found existing instance')
         }
         model.findOne(criteria, cb)
     })
 }
 module.exports.mongoose;
