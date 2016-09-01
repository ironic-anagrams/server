var Sequelize = require('sequelize');
var sequelize = require('../config/db.js');

// Define the model that corresponds to the entry table in the database. 
var Entry = sequelize.define('entry', {
  user_id: Sequelize.INTEGER,
  text: Sequelize.STRING
});

sequelize.sync().then(function() {
  return Entry.create({
    user_id: '123',
    text: 'OMG OMG OMG... So much stuff happened today, OMG. OMG!'
  });
}).then(function(entry) {
  console.log(entry.get({
    plain: true
  }));
});

module.exports = Entry;