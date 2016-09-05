// var Sequelize = require('sequelize');
// var sequelize = require('../config/db.js');
//var User = require('./User.js');

// Define the model that corresponds to the entry table in the database.
// var Entry = sequelize.define('entry', {
//   //user_id: Sequelize.INTEGER,
//   text: Sequelize.STRING
// });


// puts a UserId column on each Entry instance
// also gives us the `.setUser` method available
// after creating a new instance of Entry
// Entry.belongsTo(User)

// Entry.sync();

// *******===================================================================********//
// The Following block is handy for initializing your database with some dummy data, //
// to verify the connection from your server. Once the connection is verified, keep
// this commented.
//
// sequelize.sync().then(function() {
//   return Entry.create({
//     user_id: '123',
//     text: 'OMG OMG OMG... So much stuff happened today, OMG. OMG!'
//   });
// }).then(function(entry) {
//   console.log(entry.get({
//     plain: true
//   }));
// });

// module.exports = Entry;