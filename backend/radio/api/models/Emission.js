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
  nom:
  {
    type: String ,
    unique: true,
    required: true
  },link:
  {
    type: String ,
    default: 'http://microdev.xyz/prog/1.jpg'
  },
  categorie:
  {
    type: mongoose.Schema.Types.ObjectId
  },
  description:
  {
    type: String ,
    default: ""
  },
  live:
  {
    type: Boolean ,
    default: false
  }
});
schema.post('init', function (doc,next)
{

  var opts = [
      { path: 'categorie',model: require('../models/Categorie.js') }
  ];
  mongoose.model('Emission', schema).populate(doc, opts, function (err, docr)
  {
    doc=docr;
    next();
  });
});
module.exports = mongoose.model('Emission', schema) ;
