var Sequelize = require('sequelize');

var connectionString = ''; 

var sequelize = new Sequelize(connectionString, {
  native: true
});

module.exports = sequelize;



// To connect to the heroku-hosted database, refer to the following website for instructions, or just 
// enter the psql command below: 

// https://www.postgresql.org/message-id/001f01c018c2$830133b0$64898cd5@northlink.gr
// psql -h ec2-54-163-230-90.compute-1.amazonaws.com -p 5432 -U bszluoxjurqcbm -W d6qaputh6303e5
