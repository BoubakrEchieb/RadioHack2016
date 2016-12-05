module.exports = function(schema)
{
  schema.methods.subscribe = function subscribe ()
  {
    return this.nom+' '+this.prenom;
  };

}
