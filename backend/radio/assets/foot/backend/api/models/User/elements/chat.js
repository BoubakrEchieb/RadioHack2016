var mongoose=require('mongoose');
var schema = new mongoose.Schema(
{
     conversation :
     {
       type: mongoose.Schema.ObjectId,
       ref: 'Conversation'
     },
     last :
     {
       type : Date,
       required : true
     },
     active :
     {
       type : Boolean,
       required : true,
       default : true
     }
});
module.exports = schema;
