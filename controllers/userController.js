var db = require('../models/Database.js');

module.exports = {

  createUser : function(req, res, next){
    console.log("POST QUERY RECEIVED");
    db.User.create(req.body)
      .then(function(newUser){
        console.log("Creating new User: ", newUser);
        //add error handling logic
        res.status(201).json({
          id: newUser.id
        })
      })
      .catch(function(err){
        res.status(404).json(err)
      })
  },

  findUser : function(req, res, next){
    console.log("GET QUERY RECEIVED");
    var username = req.query.username

    db.User.findOne({ where: {username: username}})
      .then(function(result){
        //refactor later to  returns a list of matching queries
        //instead of just findOne
        res.status(200).json(result);
      })
      .catch(function(err){
        res.status(404).json(err)
      })
  }


};