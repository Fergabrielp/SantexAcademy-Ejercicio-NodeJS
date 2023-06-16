const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./DB.sqlite"
})

module.exports = sequelize