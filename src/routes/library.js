const express = require('express')

const { libraryController } = require('../controllers')
const { authMiddleware } = require('../middlewares')

const router = express.Router()

router.post('/', authMiddleware.isAdmin, libraryController.createLibrary)
router.get('/:libraryId', libraryController.getLibrary)
router.get('/', libraryController.getAllLibraries)
router.put('/:libraryId', authMiddleware.isAdmin, libraryController.modifyLibrary)
router.delete('/:libraryId', authMiddleware.isAdmin, libraryController.deleteLibrary)

router.post('/addBook', authMiddleware.isAdmin, libraryController.createBook)


module.exports = router