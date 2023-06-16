const { DataTypes } = require('sequelize')
const sequelize = require('../config/dbConfig')

const Book = sequelize.define('Book', {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },

    isbn: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    year: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    library: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

})

module.exports = Book