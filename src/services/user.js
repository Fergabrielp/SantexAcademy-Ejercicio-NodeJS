const { userProvider } = require('../providers')

const createUser = async (user) => {
    return await userProvider.createUser(user)
}

const getUser = async (id) => {
    return await userProvider.getUser(id)
}

const getAllUsers = async () => {
    return await userProvider.getAllUsers()
}

const modifyUser = async (id, newUser) => {
    return await userProvider.modifyUser(id, newUser)
}

const deleteUser = async (id) => {
    return await userProvider.deleteUser(id)
}



module.exports = {
    createUser,
    getUser,
    getAllUsers,
    modifyUser,
    deleteUser
}