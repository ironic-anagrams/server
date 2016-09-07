var db = require('../models/Database.js');
var jwt = require('jwt-simple');

module.exports = {

  createUser : function(req, res, next){
    db.User.create(req.body)
      .then(function(newUser){
        //add error handling logic
        var token = jwt.encode(newUser, 'secret');
        res.status(201).json({
          // id: newUser.id,
          token: token
        })
      })
      .catch(function(err){
        res.status(404).json(err)
      })
  },

  findUser: function(req, res, next){
    var username = req.query.username;
    if (!username) {
      return res.status(200).json([]);
    }
    db.User.findAll({ where: {username: { $iLike: '%' + username + '%' }}})
      .then(function(result){
        res.status(200).json(result);
      })
      .catch(function(err){
        res.status(404).json(err)
      })
  },

  signIn: function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    db.User.findOne({ where: {username: username}} )
     .then(function (user) {
        if (!user) {
          //next(new Error('User does not exist'));
          res.status(404).json({ error: 'User does not exist' })
        } else {
            if (password === user.password){
              var token = jwt.encode(user, 'secret');
              res.json({token: token});
            } else {
                //next(new Error('Incorrect password'));
                res.status(401).json({error: 'Incorrect password'})
            }
        }
      })
      .catch(function(err){
        res.json(err);
      })
  },

  checkAuth: function(req, res, next) {
    // checking to see if the user is authenticated
    // grab the token in the header is any
    // then decode the token, which we end up being the user object
    // check to see if that user exists in the database
    var token = req.headers['x-access-token'];
    if (!token) {
      //next(new Error('No token'));
      res.status(401).json({ error: 'No token' });
    } else {
      var user = jwt.decode(token, 'secret');
      db.User.findOne({ where: {username: user.username}} )
        .then(function (user) {
          if (user) {
            res.send(200);
          } else {
            res.send(401);
          }
        })
        .catch(function (error) {
          next(error);
        });
    }
  }

};