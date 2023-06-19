const express = require('express')

const { bookController } = require('../controllers')
const { authMiddleware } = require('../middlewares')

const router = express.Router()

router.post('/', authMiddleware.isAdmin, bookController.createBook)
router.get('/:bookId', bookController.getBook)
router.get('/', bookController.getAllBooks)
router.put('/:bookId', authMiddleware.isAdmin, bookController.modifyBook)
router.delete('/:bookId', authMiddleware.isAdmin, bookController.deleteBook)


module.exports = router