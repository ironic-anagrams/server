var db = require('../models/Database.js');

module.exports = {
  sendRequest: function(req, res, next){
    db.Request.create(req.body)
      .then(function(newRequest){
        res.status(201).send("Success")
      })
      .catch(function(err){
        res.status(404).json(err)
      })
  },

  getRequests: function(req, res, next){
    db.Request.findAll({where: {requestReceiver: req.user.id}})
      .then(function(requestList){
        var query = requestList.reduce(function(total,request){
          total.push(request.dataValues.userId)
          return total;
        },[])
        db.User.findAll({
          where: {
              id: {
                $any: query
              }
          }
        })
          .then(function(requests){
            console.log("This is the friendslist", requests)
            res.status(201).json(requests)
          })
          .catch(function(err){
            res.status(404).json(err)
          })
      })
      .catch(function(err){
        res.status(404).json(err)
      })
  }
}
