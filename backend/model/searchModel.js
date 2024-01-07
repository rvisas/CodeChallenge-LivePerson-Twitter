const Sequelize = require('sequelize')
const db = require('../config/db_config')

const SearchSchema = db.define('searches',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        search: {
            type: Sequelize.STRING
        }
    })
module.exports = SearchSchema;