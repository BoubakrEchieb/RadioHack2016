var mongoose=require('mongoose');
var schema = new mongoose.Schema(
{
    competance :
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Competance',
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
