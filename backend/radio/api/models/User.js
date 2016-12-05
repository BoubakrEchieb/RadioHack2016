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
  uid:
  {
   type: String ,
   required : true
  },
  tokens:
  {
    type: [{type : String}] ,
    default: []
  }

});
module.exports = mongoose.model('Episode', schema) ;
