/**
 * EmissionController
 *
 * @description :: Server-side logic for managing emissions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Dhaya3t =  require('../models/Dhaya3t.js');
var Commentaire =  require('../models/Commentaire.js');
module.exports =
{
	add : function (req, res)
	{
		var dhaya3t = req.param('dhaya3t' , false);
		var description = req.param('description' , false);
		if(dhaya3t)
		{

			Dhaya3t.create({nom:dhaya3t,description:description},function(err, us)
			{
				if(err||!us)
				{
					res.json({ error : 200,message : err});
					return
				}
				else
				{
					res.json({ error : 0,message : 'Added'});
					return;
				}
			});
		}
		else
		{
				res.json({ error : 201,message : 'Requete incomplete'});
				return;
		}
	},
	addCommentaire : function (req, res)
	{
		var _id = req.param('_id' , false);
		var commentaire = req.param('commentaire' , false);
		var token = req.param('token' , false);
		if(_id&&commentaire&&token)
		{

			Dhaya3t.findOne({_id:_id},function(err, pr)
			{
				if(err||!pr)
				{
					res.json({ error : 210,message : err});
					return
				}
				else
				{
					Commentaire.create({texte:commentaire,token:token},
						function(err,comm)
						{
							if(err||!comm)
							{
								res.json({ error : 210,message : err});
								return
							}
							else {
								pr.commentaire.push(comm);
								pr.save(function(err){
									if(err)
									{
										res.json({ error : 210,message : err});
										return
									}
									else {
										res.json({ error : 0,message : "added"});
										return
									}
								});

							}
						}
					);
				}
			});
		}
		else
		{
				res.json({ error : 211,message : 'Requete incomplete'});
				return;
		}
	},
	view : function(req,res)
	{
		Dhaya3t.find({},function(err,rg)
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
	},
	search : function(req,res)
	{

		var search = req.param('search' , '');
		if(search)
		{
			search = req.param('search' , false).toString("utf8");
			var criteria={
				nom: new RegExp(search, "i")
			};
			Dhaya3t.find(criteria,function(err,rg)
			{
				if (err)
				{
					res.json({ error : 230,message : err});
					return;
				}
				else
				{
					for (var i = 0; i < list.length; i++) {
						console.log("mmmmmmmmm"+list[i].getDay());
					}
					res.json({ error : 0,list : rg});
					return;
				}
			});
		}
		else
		{

			Dhaya3t.find({},function(err,rg)
			{
				if (err)
				{
					res.json({ error : 230,message : err});
					return;
				}
				else
				{

					res.json({ error : 0,list : rg});
					return;
				}
			});
		}
	},
	remove : function (req, res)
	{
		Dhaya3t.remove(function(rere , alertes)
		{
			if (rere)
			{
				res.json({ error : 240,message : rere});
				return;
			}
			else
			{

				res.json({ error : 0,list : "removed"});
				return;
			}
		});

	}

};
