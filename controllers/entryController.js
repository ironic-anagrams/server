var db = require('../models/Database.js');

module.exports = {

  createEntry: function(req, res, next){
    var query = req.body;
    query['userId'] = req.user.id;

    db.Entry.create(query)
      .then(function(newEntry) {
        res.send('Success');
      })
      .catch(function(err){
        res.status(404).json(err)
      })
  },

  getEntries: function(req, res, next) {
    
    //var userId = req.query.userId || req.user.id;
    console.log('req.query.userId:', req.query.userId);
    console.log('req.user.id:', req.user.id);
    if (req.query.userId && (req.query.userId !== req.user.id.toString())) {
      // check if req.query.userId is in friendlist
      db.Relationships.findOne({ 
        where: { user1: req.user.id, user2: req.query.userId }
      })
        .then(function(friends) {
          console.log('friends', friends);
          if (friends) {
            // send entries
            db.Entry.findAll({ where: { userId: req.query.userId }})
              .then(function(entries){
                res.send(entries);
              })
              .catch(function(err){
                res.status(404).json(err)
              });
          } else {
            res.status(404).json({ error: 'you are not friends'})
          }
        })
        .catch(function(err) {
          res.status(404).json(err)
        });
    } else {
      db.Entry.findAll({ where: { userId: req.user.id }})
      .then(function(entries){
        res.send(entries);
      })
      .catch(function(err){
        res.status(404).json(err)
      });
    }
  }

};