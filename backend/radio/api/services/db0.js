
var  tafonction=function()
{
  console.log("eeeeeeeeeeee");
  var Programme =  require('../models/Programme.js');
  var date = (Number(new Date().getTime())%604800000);
  var criteria={'$and':[{date: {'$lt' : date+180000 }}, {date : { '$gt' : date }}]};
  setTimeout(tafonction,300000);
  Programme.find(criteria,function(err,rg)
  {
    if (err)
    {

      return;
    }
    else
    {
      var gcm = require('node-gcm');

			var message = new gcm.Message({
					data: { type : 'soon' }
			});
			var sender = new gcm.Sender('AIzaSyBhQJyQs48TVRaSwJ9YUlTt6NnhBqs7GjM');
			var regTokens = [];
			if(rg.favorites)
			{
        for(var i = 0 ; i<rg.length;i++)
				{
          for(var j = 0 ; j<rg[i].favorites.length;j++)
  				{
  					regTokens.push(rg[i].favorites[j]);
  				}
				}
			}
			console.log(regTokens);
      if(regTokens.length>0)
      {
        sender.send(message, { registrationTokens: regTokens }, function (err, response)
  			{
  				if(err){
  					console.log("error gcm : "+err);

  					return;
  				}
  				else console.log("success gcm : "+response);


  					return;
  			});
      }


      return;
    }
  });
     /* rappel après 2 secondes = 2000 millisecondes */
}
setTimeout(tafonction,1000);
