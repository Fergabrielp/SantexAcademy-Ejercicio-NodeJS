const express = require('express')

const { libraryController } = require('../controllers')
const { authMiddleware } = require('../middlewares')

const router = express.Router()

router.post('/', authMiddleware.auth, libraryController.createLibrary)
router.get('/:libraryId', libraryController.getLibrary)
router.get('/', libraryController.getAllLibraries)
router.put('/:libraryId', authMiddleware.auth, libraryController.modifyLibrary)
router.delete('/:libraryId', authMiddleware.auth, libraryController.deleteLibrary)

router.post('/addBook', authMiddleware.auth, libraryController.createBook)


module.exports = router