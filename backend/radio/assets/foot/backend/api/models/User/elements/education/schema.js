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
    school :
    {
      type: mongoose.Schema.ObjectId,
      ref: 'School',
      required : true
    },
    specialite :
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Specialite'
    },
    diplome :
    {
      type : String
    },
    periode :
    {
      type : periode
    },
    commentaire :
    {
      type : String
    },
    incv :
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
