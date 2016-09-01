var Entry = require('../models/Entry.js');

module.exports = {

  createEntry : function(req, res, next){
    console.log(req.body);
  }

};