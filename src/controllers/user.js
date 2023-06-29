const { userService } = require('../services')

const createUser = async (req, res) => {

    const user = req.body

    try {
        const newUser = await userService.createUser(user)

        if(newUser === "user-exists"){
            res.status(400).json({msg: "Error when creating a new user, email already exists"})
        }
        else if(newUser !== "user-exists"){
            res.status(201).json(newUser)
        }else{
            res.status(400).json({msg: "Error when creating a new user, please check if user data is correct"})
        }
    } catch (error) {
        res.status(500).json({action: "Server Error => CreateUser", error: error.message})
    }
}

const getUser = async (req, res) => {
    const id = req.params.userId

    try {
        const userFound = await userService.getUser(id)
        if(userFound){
            res.status(200).json(userFound)
        }else{
            res.status(404).json({error: `User not found with id: ${id}`})
        }
    } catch (error) {
        res.status(500).json({action: "Server Error => GetUser", error: error.message})
    }
}

const getAllUsers = async (req, res) => {
    try {
        const usersFound = await userService.getAllUsers()
        if(usersFound.length > 0){
            res.status(200).json(usersFound)
        }else{
            res.status(404).json({error: `No user was added yet`})
        }
    } catch (error) {
        res.status(500).json({action: "Server Error => GetUsers", error: error.message})
    }
}

const modifyUser = async (req, res) => {
    const id = req.params.userId
    const newUser = req.body

    try {
        const userModified = await userService.modifyUser(id, newUser)
        if(userModified[0] !== 0){
            res.status(200).json({action: "ModifyUser", msg: `User with id: ${id}, was succesfuly modified`})
        }else{
            res.status(404).json({error: `User with id ${id} does not exist`})
        }
    } catch (error) {
        res.status(500).json({action: "Server Error => ModifyUser", error: error.message})
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.userId

    try {
        const userDeleted = await userService.deleteUser(id)
        if(userDeleted !== 0){
            res.status(200).json({action: "DeleteUser", msg: `User with id: ${id}, was succesfuly deleted`})
        }else{
            res.status(404).json({error: `User with id ${id} does not exist`})
        }
    } catch (error) {
        res.status(500).json({action: "Server Error => DeleteUser", error: error.message})
    }
}



module.exports = {
    createUser,
    getUser,
    getAllUsers,
    modifyUser,
    deleteUser
}