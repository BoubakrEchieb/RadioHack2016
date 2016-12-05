var mongoose=require('mongoose');
var competance = require('./cv_elements/competance.js');
var experience = require('./cv_elements/experience.js');
var formation = require('./cv_elements/formation.js');
var langue = require('./cv_elements/langue.js');
var divers = require('./cv_elements/divers.js');
var schema = new mongoose.Schema(
{
  competances :
  {
    type: [competance]
  },
  specialite :
  {
    type: [mongoose.Schema.ObjectId],
    ref: 'Specialite'
  },
  experiences :
  {
    type: [experience]
  },
  formations :
  {
    type: [formation]
  },
  langues :
  {
    type: [langue]
  },
  divers :
  {
    type: [divers]
  },
});
module.exports = schema;
