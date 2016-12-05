var mongoose=require('mongoose');
var schema = new mongoose.Schema(
{
    divers :
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Divers',
      required : true
    },
    commentaire :
    {
      type : String
    }
});
module.exports = schema;
