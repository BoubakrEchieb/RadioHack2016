var mongoose=require('mongoose');
var schema = new mongoose.Schema(
{
     telephone :
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
     }
});
module.exports = schema;
