/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var User =  require('../models/User.js');
module.exports =
{
	getUser:function(req,res)
	{
		var token = req.param('token' , false);
		var admin = require("firebase-admin");
		admin.initializeApp({
		  credential: admin.credential.cert("../../radio-sfax-firebase-adminsdk-c6vq9-f9ce8b1e17.json"),
		  databaseURL: "https://radio-sfax.firebaseio.com"
		});
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
						if (!user)
						{
							res.json({ error : 1,message : 'not connected'});
							return;
						}
						else
						{
							admin.auth().getUser(user.uid)
							.then(function(userRecord) {
								res.json({ error : 0,user : user});
								return;
							})
							.catch(function(error) {
								res.json({ error : 123,message : error});
								return;
							});
						}
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
	login:function(req,res)
	{
		var token = req.param('token' , false);
		var admin = require("firebase-admin");
		admin.initializeApp({
		  credential: admin.credential.cert("../../radio-sfax-firebase-adminsdk-c6vq9-f9ce8b1e17.json"),
		  databaseURL: "https://radio-sfax.firebaseio.com"
		});
		if(token)
		{
			admin.auth().verifyIdToken(token)
			  .then(function(decodedToken) {
			    var uid = decodedToken.uid;
					User.findOne(
					{
							uid: uid
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
								if (!user)
								{
									User.create(
									{
											uid:uid,
											tokens:  [token]
									},
									function (err, user)
									{
										if (err)
										{
											res.json({ error : 125,message : err});
											return;
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
									user.tokens.push(token);
									user.save(function(user1,error) {
										if(error||!user1)
										{
											res.json({ error : 142,message : error});
											return;
										}
											res.json({ error : 0,user : user1});
								  })
								}
							}
						}
						else
						{
							res.json({ error : 0,user : user});
							return;
						}

					});

			  }).catch(function(error) {
					res.json({ error : 142,message : error});
					return;
			  });
		}
		else
		{
				res.json({ error : 128,message : 'Requete sans token'});
				return;
		}
	},
	view : function(req,res)
	{
		User.find({},function(err,rg)
		{
			if (err)
			{
				res.json({ error : 220,message : err});
				return;
			}
			else
			{
				res.json({ error : 0,list : rg});
				return;
			}
		});
	}
};
