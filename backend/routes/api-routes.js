const searchController = require('../controller/searchController');

module.exports = (app) => {
  app.post('/search', searchController.searchTweets);
}