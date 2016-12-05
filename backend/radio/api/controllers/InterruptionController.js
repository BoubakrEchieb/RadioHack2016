/**
 * EmissionController
 *
 * @description :: Server-side logic for managing emissions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Interruption =  require('../models/Interruption.js');
var Commentaire =  require('../models/Commentaire.js');
module.exports =
{
	add : function (req, res)
	{
		var interruption = req.param('interruption' , false);
		var date = req.param('date' , false);
		var duration = req.param('duration' , false);
		if(interruption&&duration&&date)
		{

			Interruption.create({interruption:interruption,date:Number(date),duration:duration},function(err, us)
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

			Interruption.findOne({_id:_id},function(err, pr)
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
	addFavorite : function (req, res)
	{
		var _id = req.param('_id' , false);
		var token = req.param('token' , false);
		if(_id&&commentaire&&token)
		{

			Interruption.findOne({_id:_id},function(err, pr)
			{
				if(err||!pr)
				{
					res.json({ error : 210,message : err});
					return
				}
				else
				{
					pr.favorites.push(token);
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
			});
		}
		else
		{
				res.json({ error : 211,message : 'Requete incomplete'});
				return;
		}
	},
	edit : function (req, res)
	{
		var _id = req.param('_id' , false);
		var interruption = req.param('interruption' , false);
		var date = req.param('date' , false);
		var duration = req.param('duration' , false);
		if(_id)
		{
			var criteria = {
				interruption:interruption,
				date:Number(date),
				date:duration

			}
			if(!interruption)
			{
				delete criteria.interruption;
			}
			if(!date)
			{
				delete criteria.date;
			}
			if(!date)
			{
				delete criteria.date;
			}
			Interruption.update({_id:_id},criteria,function(err, us)
			{
				if(err||!us)
				{
					res.json({ error : 210,message : err});
					return
				}
				else
				{
					res.json({ error : 0,message : 'Edited'});
					return;
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
		Interruption.find({},function(err,rg)
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
			Interruption.find(criteria,function(err,rg)
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

			Interruption.find({},function(err,rg)
			{
				if (err)
				{
					res.json({ error : 230,message : err});
					return;
				}
				else
				{
					var list=[];
					for (var i = 0; i < rg.length; i++) {
						var d = new Date(rg[i].date);
						rg[i]['day']=d.getDay();
						rg[i].hour=d.getHours()+1;
						rg[i].minutes=d.getMinutes()+1;
						var prog={_id: rg[i]._id,
								      emission: rg[i].emission,
								      date: 396300000,
								      duration: 55,
											day:d.getDay(),
											hour:d.getHours(),
											minutes:d.getMinutes()
										}
										list.push(prog);
					}
					res.json({ error : 0,list : list});
					return;
				}
			});
		}
	},
	remove : function (req, res)
	{
		Interruption.remove(function(rere , alertes)
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
