const { libraryService } = require('../services')

const createLibrary = async (req, res) => {
    try {
        const newLibrary = await libraryService.createLibrary(req.body)
        res.json(newLibrary)
    } catch (error) {
        res.status(400).json({action: "CreateLibrary", error: error.message})
    }
}

const getLibrary = (req, res) => {
    console.log("Getting a library")
}

const getAllLibraries = (req, res) => {
    console.log("Getting all libraries")
}

const modifyLibrary = (req, res) => {
    console.log("Modifying a library")
}

const deleteLibrary = (req, res) => {
    console.log("Deleting a library")
}

const createBook = (req, res) => {
    console.log("Creating a library")
}


module.exports = {
    createLibrary,
    getLibrary,
    getAllLibraries,
    modifyLibrary,
    deleteLibrary,
    createBook
}