/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var mongoose = require('mongoose');
mongoose.set('debug', true);
var schema = new mongoose.Schema(
{
   email :
   {
     type : String,
     required : [true, {code : 140 , message : 'Veuillez entrer un email !' }],
     unique : [true, {code : 141 , message : 'Cet nom email est déja inscrit !' }]
   },
   login:
   {
     type : String,
     required : [true, {code : 142 , message : 'Veuillez entrer un nom d\'utilisateur !' }],
     unique : [true, {code : 143 , message : 'Ce nom d\'utilisateur n\'est pas disponible ! Veuillez choisir un autre' }]
   },
   password:
   {
     type: String ,
     required: [true, {code : 144 , message : 'Veuillez entrer un mot de passe !' }],
     bcrypt: true
   },
   firstname:
   {
     type: String
   },
   lastname:
   {
     type: String
   },
   birthdate:
   {
     type: Date
   }

   /*tokens:
   {
    type: [{type : String}] ,
    default: []
  }*/

});
schema.plugin(require('mongoose-bcrypt'));
schema.plugin(require('mongoose-unique-validator'));
/*schema.post('init', function (doc,next)
{
  var opts = [
      { path: 'assistantsRequests',select : '_id nom prenom email',model: require('../models/User.js') },
      { path: 'assistants',select : '_id nom prenom email tokens',model: require('../models/User.js') },
      { path: 'patientsRequests',select : '_id nom prenom email',model: require('../models/User.js') },
      { path: 'patients',select : '_id nom prenom email tokens',model: require('../models/User.js') }
  ];
  mongoose.model('User', schema).populate(doc, opts, function (err, docr)
  {
    doc=docr;
    next();
  });
});*/
module.exports = mongoose.model('User', schema) ;
