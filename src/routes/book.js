const express = require('express')

const { bookController } = require('../controllers')
const { authMiddleware } = require('../middlewares')

const router = express.Router()

router.post('/', authMiddleware.auth, bookController.createBook)
router.get('/:bookId', bookController.getBook)
router.get('/', bookController.getAllBooks)
router.put('/:bookId', authMiddleware.auth, bookController.modifyBook)
router.delete('/:bookId', authMiddleware.auth, bookController.deleteBook)


module.exports = router