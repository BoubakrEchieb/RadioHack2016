var mongoose=require('mongoose');
var periode = new mongoose.Schema(
{
    debut :
    {
      type : Date,
      required : true
    },
    fin :
    {
      type : Date
    }
});
var schema = new mongoose.Schema(
{
    organisation :
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Organisation',
      required : true
    },
    specialite :
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Specialite'
    },
    periode :
    {
      type : periode
    },
    commentaire :
    {
      type : String
    }
});
module.exports = schema;
