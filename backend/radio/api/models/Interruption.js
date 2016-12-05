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
  interruption:
  {
    type: String ,
    required: true
  },
  description:
  {
    type: String ,
    default: ""
  },
  categorie:
  {
    type: mongoose.Schema.Types.ObjectId ,
    default: []
  },
  date:
  {
    type: Date ,
    required: true
  },
  duration:
  {
    type: Number ,
    required: true
  },
  favorites:
  {
    type: [String] ,
    default: []
  },
  commentaire:
  {
    type: [mongoose.Schema.Types.ObjectId] ,
    default: []
  }
});
schema.post('init', function (doc,next)
{

  var opts = [
      { path: 'categorie',model: require('../models/Categorie.js') },
      { path: 'commentaire',model: require('../models/Commentaire.js') }
  ];
  mongoose.model('Interruption', schema).populate(doc, opts, function (err, docr)
  {
    doc=docr;
    next();
  });
});
module.exports = mongoose.model('Interruption', schema) ;
