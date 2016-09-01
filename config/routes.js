var entryController = require('../controllers/entryController.js');

module.exports = function(app, express) {
  app.post('/api/entries', entryController.createEntry);
}