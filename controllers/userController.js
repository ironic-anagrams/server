var User = require('../models/User.js');

module.exports = {

  createUser : function(req, res, next){
    console.log("POST QUERY RECEIVED");
    User.create(req.body)
      .then(function(newUser){
        console.log("Creating new User: ", newUser);
        res.send('Success');
      });
  }

};