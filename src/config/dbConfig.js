const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./DB.sqlite"
})

const initializeDB = async () => {
    try {
        await sequelize.authenticate()
        console.log("Succesfuly connected to Data base")
        await sequelize.sync({ force: false })
    } catch (error) {
        console.error("Error trying to connect to Data base: ", error)
    }
}

module.exports = { sequelize, initializeDB }