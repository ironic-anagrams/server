var Sequelize = require('sequelize');
var sequelize = require('../config/db.js');
var Entry = require('./Entry.js');

// Define the model that corresponds to the entry table in the database. 
var User = sequelize.define('user', {
  username: Sequelize.STRING
});

// User.hasMany(Entry);
//User.sync();

module.exports = User;