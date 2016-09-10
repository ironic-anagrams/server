var db = require('../models/Database.js');

module.exports = {
  sendRequest: function(req, res, next) {
    var newRequest = {
      userId: req.user.id,
      requestReceiver: req.body.requestReceiver,
      status: 'CREATED'
    }
    db.Request.create(newRequest)
      .then(function(){
          res.status(201).send("Success");
      })
      .catch(function(err){
        res.status(404).json(err)
      });

  },

  getRequests: function(req, res, next) {
    db.Request.findAll({
      where: { requestReceiver: req.user.id, status: 'CREATED' },
      include: {
        model: db.User,
        attributes: ['fullname']
      }
    })
      .then(function(requestList) {
        res.status(200).json(requestList);
      })
      .catch(function(err) {
        res.status(404).json(err);
      });
  },

  acceptRequest: function(req, res, next) {
    db.Request.findOne({ where: req.body.requestId })
      .then(function(result) {
        if (result) {
          if (result.requestReceiver === req.user.id) {
            return result.update({ status: 'ACCEPTED'})
              .then(function() {
                // create entries in friends table
                db.Relationships.bulkCreate([
                    { user1: result.userId, user2: result.requestReceiver },
                    { user1: result.requestReceiver, user2: result.userId }
                  ])
                  .then(function(){
                    res.status(201).send("Success");
                  })
                  .catch(function(err){
                    res.status(404).json(err)
                  })
              })
              .catch(function(err) {
                res.status(404).json(err);
              })
          } else {
            return res.status(404).json({ error: 'You are not receiver of this request'});
          }
        }
        res.status(404).json({ error: 'Request not found'});
      })
      .catch(function(err) {
        res.status(404).json(err);
      })
  }, 

  rejectRequest: function(req, res, next) {
    db.Request.findOne({ where: req.body.requestId })
      .then(function(result){
        result.destroy()
          .on('success', function(u){
            if (u && u.deletedAt) {
              res.status(201).send("Success");
            } 
          })
          .on('error', function(err){
            res.status(500).json({ error: "There was an error deleting this request from the database. Error message: " + err});
          });
      })
      .catch(function(err){
        res.status(404).json({ error: "The request was not found in the database. Error message: " + err });
      });
  }
}
