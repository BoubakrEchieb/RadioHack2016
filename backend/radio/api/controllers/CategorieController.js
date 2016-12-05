/**
 * EmissionController
 *
 * @description :: Server-side logic for managing emissions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Categorie =  require('../models/Categorie.js');
module.exports =
{
	add : function (req, res)
	{
		var nom = req.param('nom' , false);
		if(nom)
		{
			nom = req.param('nom' , false).toString("utf8");
			Categorie.create({nom:nom},function(err, us)
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
	edit : function (req, res)
	{
		var _id = req.param('_id' , false);
		var nom = req.param('nom' , false);
		if(_id)
		{

			if(nom&&nom)
			{
				nom = req.param('nom' , false).toString("utf8");
			}

			var criteria = {
				nom:nom
			}
			Categorie.update({_id:_id},criteria,function(err, us)
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
		Categorie.find({},function(err,rg)
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
			Categorie.find(criteria,function(err,rg)
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
		else
		{

			Categorie.find({},function(err,rg)
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
		Categorie.remove(function(rere , alertes)
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
