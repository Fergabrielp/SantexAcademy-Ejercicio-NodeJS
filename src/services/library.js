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

const createBook = async (id, book) => {
    const existingLibrary = await libraryProvider.getLibrary(id)
    if(existingLibrary){
        const newBook = await libraryProvider.createBook(id, book)
        return newBook
    }
    return null
}


module.exports = {
    createLibrary,
    getLibrary,
    getAllLibraries,
    modifyLibrary,
    deleteLibrary,
    createBook
}