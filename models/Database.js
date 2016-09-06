var Sequelize = require('sequelize');
var sequelize = require('../config/db.js');

// Define the model that corresponds to the entry table in the database.
var User = sequelize.define('user', {
  username: {type: Sequelize.STRING, unique: true },
  password: Sequelize.STRING,
  fullname: Sequelize.STRING
});

// Define the model that corresponds to the entry table in the database.
var Entry = sequelize.define('entry', {
  text: Sequelize.STRING
});

var Relationships = sequelize.define('relationships', {
  user1: Sequelize.INTEGER,
  user2: Sequelize.INTEGER
});

var Request = sequelize.define('request', {
  requestReceiver: Sequelize.INTEGER
})



// puts a UserId column on each Entry instance
// also gives us the `.setUser` method available
// after creating a new instance of Entry
Entry.belongsTo(User)
Request.belongsTo(User)

User.hasMany(Entry);
User.hasMany(Request);


User.sync();
Entry.sync();
Relationships.sync();
Request.sync()

module.exports.User = User;

module.exports.Entry = Entry;
module.exports.Relationships = Relationships;
module.exports.Request = Request;