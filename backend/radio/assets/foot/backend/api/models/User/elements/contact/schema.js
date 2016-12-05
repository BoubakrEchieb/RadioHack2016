var mongoose=require('mongoose');
var schema = new mongoose.Schema(
{
  emails :
  {
    type : require('./elements/email')
  },
  adresses :
  {
    type : require('./elements/adress')
  },
  phones :
  {
    type : require('./elements/phone')
  }
});
schema.plugin(require('mongoose-bcrypt'));
module.exports = schema;
