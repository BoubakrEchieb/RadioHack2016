var User = require('../User');
module.exports = function(schema)
{
  schema.statics.login = function login (req,cb)
  {
    if(!req.session.authenticated)
    {
      var login = req.param("login");
      var password = req.param("password");
      if(login&&password)
      {
        this.findOne({username : login},function(err,user)
        {

          if(err)
            return cb('Erreur de serveur ! réessayez plus tard',null);
          if(!user)
            return cb('Nom d\'utilisateur incorrecte',null);
          user.verifyPassword(password,function(errr,isMatch)
          {
            console.log('+'+isMatch);
            if(errr)
              return cb('Erreur de serveur ! réessayez plus tard',null);
            if(!isMatch)
              return cb('Mot de passe incorrect',null);
              delete req.session.authenticated;
              req.session.authenticated={user:user};;
            return cb(null,user);
          });
        });
      }
      else
      {
        delete req.session.authenticated;
        req.session.authenticated=false;
        return cb(null,null);
      }

    }
    else
    {
      console.log(req.session.authenticated);
      this.findOne({_id : req.session.authenticated.user._id},function(err,user)
      {
        if(err)
          return cb('Erreur de serveur ! réessayez plus tard',null);
        delete req.session.authenticated;
        req.session.authenticated={user:user};
        return cb(null,user);
      });
    }
  };
  schema.statics.signup = function signup (req,cb)
  {
    if(!req.session.authenticated)
    {
      var username = req.param("username");
      var password = req.param("password1");
      var password2 = req.param("password2");
      var email = req.param("email");
      var nom = req.param("nom");
      var prenom = req.param("prenom");
      var birthdate = req.param("birthdate");
      if(username&&password&&password2&&email&&nom&&prenom&&birthdate)
      {
        birthdate=new Date(birthdate);
        var _this=this;
        if((password!=password2))
          return cb('Les mots de passes ne sont pas identiques',null);
          _this.findOne({username : username},function(e,ex)
          {
            if(ex)
              return cb('Nom d\'utilisateur deja utilisé',null);
            _this.findOne({emails : {email:email}},function(e,ex)
            {
              if(ex)
                return cb('email deja utilisé',null);
                var a=[];
                var rand='';
                while(rand.length<5) rand=Math.random().toString(36).substr(2, 5).toUpperCase();
                a.push({email:email,codeConfirmation:rand});
              _this.create({username : username,password : password,emails : a,nom : nom,prenom : prenom,birthdate : birthdate},function(err,user)
              {

                if(err)
                  return cb('Ereur de serveur ! réessayez plus tard',null);
                if(!user)
                  return cb('Nom d\'utilisateur incorrecte',null);
                user.verifyPassword(password,function(errr,isMatch)
                {
                  if(errr)
                    return cb('Errreur de serveur ! réessayez plus tard',null);
                  if(!isMatch)
                    return cb('Mot de passe incorrect',null);
                  req.session.authenticated={user:user};
                  return cb(null,user);
                });
              });
            });
          });
      }
      else
      {
        req.session.authenticated=false;
        return cb(null,null);
      }
    }
    else
    {
      this.findOne({_id : req.session.authenticated.user._id},function(err,user)
      {
        if(err)
          return cb('Erreur de serveur ! réessayez plus tard',null);
        req.session.authenticated={user:user};;
        return cb(null,user);
      });
    }
  };
  schema.statics.logout = function logout (req,cb)
  {
    req.session.authenticated=false;
    return cb();
  };
}
