const express = require('express')

const { userController } = require('../controllers')
const { authMiddleware } = require('../middlewares')

const router = express.Router()

router.post('/', authMiddleware.isAdmin, userController.createUser)
router.get('/:userId', userController.getUser)
router.get('/', userController.getAllUsers)
router.put('/:userId', authMiddleware.isAdmin, userController.modifyUser)
router.delete('/:userId', authMiddleware.isAdmin, userController.deleteUser)


module.exports = router