const { userService } = require('../services')

const createUser = async (req, res) => {
    try {
        const newUser = await userService.createUser(req.body)
        res.json(newUser)
    } catch (error) {
        res.status(400).json({action: "CreateUser", error: error.message})
    }
}

const getUser = async (req, res) => {
    const id = req.params.userId

    try {
        const userFound = await userService.getUser(id)
        if(userFound){
            res.json(userFound)
        }else{
            res.json({error: `User not found with id: ${id}`})
        }
    } catch (error) {
        res.status(400).json({action: "GetUser", error: error.message})
    }
}

const getAllUsers = async (req, res) => {
    try {
        const usersFound = await userService.getAllUsers()
        if(usersFound.length > 0){
            res.json(usersFound)
        }else{
            res.json({error: `No user was added yet`})
        }
    } catch (error) {
        res.status(400).json({action: "GetUsers", error: error.message})
    }
}

const modifyUser = async (req, res) => {
    const id = req.params.userId
    const newUser = req.body

    try {
        const userModified = await userService.modifyUser(id, newUser)
        if(userModified[0] !== 0){
            res.json({action: "ModifyUser", msg: `User with id: ${id}, was succesfuly modified`})
        }else{
            res.status(400).json({error: `User with id ${id} does not exist`})
        }
    } catch (error) {
        res.status(400).json({action: "ModifyUser", error: error.message})
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.userId

    try {
        const userDeleted = await userService.deleteUser(id)
        if(userDeleted !== 0){
            res.json({action: "DeleteUser", msg: `User with id: ${id}, was succesfuly deleted`})
        }else{
            res.status(400).json({error: `User with id ${id} does not exist`})
        }
    } catch (error) {
        res.status(400).json({action: "DeleteUser", error: error.message})
    }
}



module.exports = {
    createUser,
    getUser,
    getAllUsers,
    modifyUser,
    deleteUser
}