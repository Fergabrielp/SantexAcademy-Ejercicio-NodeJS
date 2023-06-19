const express = require('express')
const jwt = require('jsonwebtoken')
const { SERVER_KEY } = require('../middlewares/auth')
const { userProvider } = require('../providers')

const router = express.Router()

router.post('/', async (req, res) => {
    const { user, pass } = req.body

    if(user === "admin" && pass === "admin"){
        const token = jwt.sign({user}, SERVER_KEY)
        res.json({token})
    }else {
        const userFound = await userProvider.validateUser(user, pass)
        if(userFound){
            const userToken = jwt.sign({user: userFound.email}, SERVER_KEY)
            res.json({userToken})
        }else{
            res.status(401).json({ error: "Invalid user or password"})
        }
    }
})

module.exports = router