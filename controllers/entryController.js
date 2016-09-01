var Entry = require('../models/Entry.js');

module.exports = {

  createEntry : function(req, res, next){
    Entry.create(req.body)
      .then(function(newEntry){
        console.log("Creating new entry: ", newEntry);
        res.send('Success');
      });
  }

};