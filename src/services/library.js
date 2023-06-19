const { libraryProvider } = require('../providers')

const createLibrary = async (library) => {
    return await libraryProvider.createLibrary(library)
}

const getLibrary = async (id) => {
    return await libraryProvider.getLibrary(id)
}

const getAllLibraries = async () => {
    return await libraryProvider.getAllLibraries()
}

const modifyLibrary = async (id, newLibrary) => {
    return await libraryProvider.modifyLibrary(id, newLibrary)
}

const deleteLibrary = async (id) => {
    return await libraryProvider.deleteLibrary(id)
}

const createBook = async (req, res) => {
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