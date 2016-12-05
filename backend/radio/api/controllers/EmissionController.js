/**
 * EmissionController
 *
 * @description :: Server-side logic for managing emissions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var Emission =  require('../models/Emission.js');
module.exports =
{
	add : function (req, res)
	{
		var nom = req.param('nom' , false);
		var categorie = req.param('categorie' , null);
		var description = req.param('description' , false);
		var live = req.param('live' , false);
		var link = req.param('link' , false);
		if(nom&&description)
		{
			nom = req.param('nom' , false).toString("utf8");
			description = req.param('description' , false).toString("utf8");
			Emission.create({nom:nom,categorie:categorie,description:description,live:live,link:link},function(err, us)
			{
				if(err||!us)
				{
					res.json({ error : 100,message : err});
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
				res.json({ error : 101,message : 'Requete incomplete'});
				return;
		}
	},
	edit : function (req, res)
	{
		var _id = req.param('_id' , false);
		var nom = req.param('nom' , false);
		var categorie = req.param('categorie' , null);
		var description = req.param('description' , false);
		var live = req.param('live' , false);
		if(_id)
		{

			if(nom)
			{
				nom = req.param('nom' , false).toString("utf8");
			}
			if(description)
			{
				description = req.param('description' , false).toString("utf8");
			}


			var criteria = {
				nom:nom,
				categorie:categorie,
				description:description,
				live:live
			}
			if(!nom)
			{
				delete criteria.nom;
			}
			if(!categorie)
			{
				delete criteria.categorie;
			}
			if(!description)
			{
				delete criteria.description;
			}
			if(!live)
			{
				delete criteria.live;
			}
			Emission.update({_id:_id},criteria,function(err, us)
			{
				if(err||!us)
				{
					res.json({ error : 110,message : err});
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
				res.json({ error : 111,message : 'Requete incomplete'});
				return;
		}
	},
	view : function(req,res)
	{
		Emission.find({},function(err,rg)
		{
			if (err)
			{
				res.json({ error : 120,message : err});
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

		var search = req.param('search' , false);
		if(search)
		{
			search = req.param('search' , false).toString("utf8");
			var criteria={
				$or:[ {nom: new RegExp(search, "i")}, {description: new RegExp(search, "i")}]
			};
			Emission.find(criteria,function(err,rg)
			{
				if (err)
				{
					res.json({ error : 130,message : err});
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

			res.json({ error : 0,list : "removed"});
			return;
		}
	},
	remove : function (req, res)
	{
		Emission.remove(function(rere , alertes)
		{
			if (rere)
			{
				res.json({ error : 140,message : rere});
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
