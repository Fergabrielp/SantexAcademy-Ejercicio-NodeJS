const { User } = require('../models')

const createUser = async (user) => {
    try {
        const newUser = await User.create(user)
        return newUser
    } catch (error) {
        console.error('Error when creating a new User. Error detail: ', error)
    }
}

const getUser = async (id) => {
    try {
        const userFound = await User.findByPk(id)
        return userFound
    } catch (error) {
        console.error(`Error when finding a User with id ${id}. Error detail: `, error)
    }
}

const getAllUsers = async () => {
    try {
        const usersFound = await User.findAll()
        return usersFound
    } catch (error) {
        console.error(`Error when finding users. Error detail: `, error)
    }
}

const modifyUser = async (id, newUser) => {
    try {
        const userModified = await User.update(newUser,{where: {id: id}})
        return userModified
    } catch (error) {
        console.error(`Error when modifying a User with id: ${id}. Error detail: `, error)
    }
}

const deleteUser = async (id) => {
    try {
        const userDeleted = await User.destroy({where: {id: id}})
        return userDeleted
    } catch (error) {
        console.error(`Error when deleting a User with id: ${id}. Error detail: `, error)
    }
}

module.exports = { createUser, getUser, getAllUsers, modifyUser, deleteUser }