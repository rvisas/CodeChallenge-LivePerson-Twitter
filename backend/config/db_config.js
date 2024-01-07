const Sequelize = require('sequelize')

module.exports = new Sequelize('twitterDB', 'root', 'root', {
    dialect: 'sqlite',
    storage: 'twitterDB'
});