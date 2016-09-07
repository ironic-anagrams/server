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
    // TODO: check if req.query.userId is in friendlist
    var userId = req.query.userId || req.user.id;

    db.Entry.findAll({ where: { userId: userId }})
      .then(function(entries){
        res.send(entries);
      })
      .catch(function(err){
        res.status(404).json(err)
      });
  }

};