var mongoose=require('mongoose');
var schema = new mongoose.Schema(
{
    langue :
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Langue',
      required : true
    },
    certification :
    {
      type : String
    },
    niveau :
    {
      type : Number
    },
    commentaire :
    {
      type : String
    }
});
module.exports = schema;
