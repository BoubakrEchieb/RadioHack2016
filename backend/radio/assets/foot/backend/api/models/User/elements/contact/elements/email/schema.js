var mongoose=require('mongoose');
var schema = new mongoose.Schema(
{
     email :
     {
       type : String,
       required : true
     },
     codeConfirmation :
     {
       type : String,
       required : true
     },
     confirmed :
     {
       type : Boolean,
       required : true,
       default : false
     },
     receiveInformations :
     {
       type : Boolean,
       required : true,
       default : false
     },
     confidentiality :
     {
       type : Number,
       required : true,
       default : 0
     }
});
module.exports = schema;
