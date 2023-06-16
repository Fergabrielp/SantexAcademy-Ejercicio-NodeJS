const { libraryProvider } = require('../providers')

const createLibrary = async (library) => {
    return await libraryProvider.createLibrary(library)
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