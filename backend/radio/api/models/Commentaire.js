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
  texte:
  {
    type: String ,
    required: true
  },
  date:
  {
    type: Date ,
    default: Date.now
  },
  token:
  {
    type: String ,
    required: true
  }
});

module.exports = mongoose.model('Commentaire', schema) ;
