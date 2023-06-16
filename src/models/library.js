const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/dbConfig')

const Library = sequelize.define('Library', {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    location: {
        type: DataTypes.STRING,
        allowNull: false
    },

    telephone: {
        type: DataTypes.STRING,
        allowNull: false
    },

})

module.exports = Library