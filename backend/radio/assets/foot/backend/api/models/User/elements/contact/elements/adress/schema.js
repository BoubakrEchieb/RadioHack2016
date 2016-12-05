var mongoose=require('mongoose');
var schema = new mongoose.Schema(
{
     adress :
     {
       type : String,
       required : true
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
