var User =  require('../models/User.js');
module.exports =
{
	login : function (req, res)
	{
		var email = req.param('email' , false);
		var password = req.param('password' , false);
		var token = req.param('token' , false);
		if(token)
		{
			User.findOne(
			{
					tokens:  { "$in" : [token]}
			},
			function (err, user)
			{
				if (err||(!user))
				{
					if (err)
					{
						res.json({ error : 125,message : err});
						return;
					}
					else
					{
						User.findOne(
						{
							  email: email
						},
						function (err, userr)
						{
							if (err||(!userr))
							{
								res.json({ error : 745,message : 'email invalide'});
							}
							else
							{
								userr.verifyPassword(password,function(err, isMatch)
								{
									if(err||!isMatch)
									{
										res.json({ error : 347,message : 'Mot de passe incorrect'});
									}
									else
									{
										userr.tokens.push(token);
										userr.save(function (err) {
										  if (err) {res.json({ error : 458,message : err});return;}
											res.json({ error : 0,user : userr});

										});


									}
								});
							}
						});
					}
				}
				else
				{
					res.json({ error : 0,user : user});
					return;
				}

			});
		}
		else
		{
				res.json({ error : 128,message : 'Requete sans token'});
				return;
		}
	},
	signup : function (req, res)
	{
    var email = req.param('email' , false);
		var password = req.param('password' , false);
		var token = req.param('token' , false);
		if(token)
		{
			User.findOne(
			{
					tokens:  { "$in" : [token]}
			},
			function (err, user)
			{
				if (err||(!user))
				{
          res.json({ error : 125,message : "not connected"});
          return;
				}
				else
				{
          User.findOne(
          {
              email: email
          },
          function (err, userr)
          {
            if (userr)
            {
              res.json({ error : 745,message : 'email exist'});
            }
            else
            {
              if (err)
              {
                res.json({ error : 521,message : err});
              }
              else
              {
                User.create({email:email,password:password},function(errr, us)
                {
                  if(err||!us)
                  {
                    res.json({ error : 530,message : errs});
                    return
                  }
                  else
                  {
                    res.json({ error : 0,message : 'Added'});
                    return;
                  }
                });
              }
            }
          });
				}

			});
		}
		else
		{
				res.json({ error : 128,message : 'Requete sans token'});
				return;
		}
	}

};
