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
  emission:
  {
    type: mongoose.Schema.Types.ObjectId ,
    required: true
  },
  date:
  {
    type: Number ,
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
      { path: 'emission',model: require('../models/Emission.js') },
      { path: 'commentaire',model: require('../models/Commentaire.js') }
  ];
  mongoose.model('Programme', schema).populate(doc, opts, function (err, docr)
  {
    doc=docr;
    next();
  });
});
module.exports = mongoose.model('Programme', schema) ;
