const { User } = require('../models')

const createUser = async (user) => {

    const userFound = await User.findOne({where: {email: user.email}})

    if(userFound){
        return "user-exists"
    }else{
        try {
            const newUser = await User.create(user)
            return newUser
        } catch (error) {
            console.error('Error when creating a new User. Error detail: ', error)
        }
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

const validateUser = async (email, password) => {
    try {
        const user = await User.findOne({where: {email, password}})
        if(user){
            return user
        }else{
            return false
        }
    } catch (error) {
        console.error(`Error when validating user. Error detail: `, error)
    }
}

module.exports = { createUser, getUser, getAllUsers, modifyUser, deleteUser, validateUser }