const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/dbConfig')
const Book  = require('./book')

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

},
{
    timestamps: false,
    paranoid: true,
    deletedAt: 'soft_delete'   
})

Library.hasMany(Book, { foreignKey: 'library', sourceKey: 'id' })
Book.belongsTo(Library, { foreignKey: 'library', targetKey: 'id'})

module.exports = Library