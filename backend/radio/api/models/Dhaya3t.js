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
    required: true
  },
  description:
  {
    type: String ,
    default: ""
  },
  date:
  {
    type: Date ,
    default: Date.now
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
      { path: 'commentaire',model: require('../models/Commentaire.js') }
  ];
  mongoose.model('Dhaya3t', schema).populate(doc, opts, function (err, docr)
  {
    doc=docr;
    next();
  });
});
module.exports = mongoose.model('Dhaya3t', schema) ;
