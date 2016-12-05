var mongoose=require('mongoose');
var schema = new mongoose.Schema(
{
  login:
  {
    type : String,
    required : [true, {code : 142 , message : 'Veuillez entrer un nom d\'utilisateur !' }],
    unique : [true, {code : 143 , message : 'Ce nom d\'utilisateur n\'est pas disponible ! Veuillez choisir un autre' }]
  },
  password:
  {
    type: String ,
    required: [true, {code : 144 , message : 'Veuillez entrer un mot de passe !' }],
    bcrypt: true
  },
  firstname:
  {
    type: String
  },
  lastname:
  {
    type: String
  },
  birthdate:
  {
    type: Date
  },
  contacts :
  {
    type : require('./elements/contact')
  },
  education :
  {
    type : require('./elements/education')
  },
  work :
  {
    type : require('./elements/work')
  },
  private :
  {
    type : require('./elements/private')
  },
  relations :
  {
    type : require('./elements/relations')
  }
});
schema.plugin(require('mongoose-bcrypt'));
module.exports = schema;
