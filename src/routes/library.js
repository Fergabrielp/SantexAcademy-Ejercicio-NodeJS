const express = require('express')
const { libraryController } = require('../controllers')

const router = express.Router()

router.post('/', libraryController.createLibrary)

module.exports = router