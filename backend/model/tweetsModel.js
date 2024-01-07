const Sequelize = require('sequelize')
const db = require('../config/db_config')

const TweetSchema = db.define('tweets',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        searchId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'searches',
                key: 'id'
            }
        },
        content: {
            type: Sequelize.STRING
        },
        createdOn: {
            type: Sequelize.DATE
        },
        userName: {
            type: Sequelize.STRING
        },
        location: {
            type: Sequelize.STRING
        },
        reTweets: {
            type: Sequelize.INTEGER
        },
        language: {
            type: Sequelize.STRING
        },
        searchText: {
            type: Sequelize.STRING
        }
    })
module.exports = TweetSchema;
