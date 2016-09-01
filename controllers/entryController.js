var Entry = require('../models/Entry.js');

module.exports = {

  createEntry: function(req, res, next){
    console.log("POST QUERY RECEIVED");
    Entry.create(req.body)
      .then(function(newEntry) {
        console.log("Creating new entry: ", newEntry);
        res.send('Success');
      });
  },

  getEntry: function(req, res, next) {
    console.log("GET QUERY RECEIVED");
    var queryObject = {};
    if (req.query) {
      queryObject = req.query;
    }
    Entry.findAll(queryObject)
      .then(function(entries){
        res.send(entries);
      });

  }

};