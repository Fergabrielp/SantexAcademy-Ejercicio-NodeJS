const { Library } = require('../models')

const createLibrary = async (library) => {
    try {
        const newLibrary = await Library.create(library)
        return newLibrary
    } catch (error) {
        console.error('Error when creating a new Library. Error detail: ', error)
    }
}

const getLibrary = async (id) => {
    try {
        const libraryFound = await Library.findByPk(id)
        return libraryFound
    } catch (error) {
        console.error(`Error when finding a Library with id ${id}. Error detail: `, error)
    }
}

const getAllLibraries = async () => {
    try {
        const librariesFound = await Library.findAll()
        return librariesFound
    } catch (error) {
        console.error(`Error when finding libraries. Error detail: `, error)
    }
}

const modifyLibrary = async (id, newLibrary) => {
    try {
        const libraryModified = await Library.update(newLibrary,{where: {id: id}})
        return libraryModified
    } catch (error) {
        console.error(`Error when modifying a Library with id: ${id}. Error detail: `, error)
    }
}

const deleteLibrary = async (id) => {
    try {
        const libraryDeleted = await Library.destroy({where: {id: id}})
        return libraryDeleted
    } catch (error) {
        console.error(`Error when deleting a Library with id: ${id}. Error detail: `, error)
    }
}

module.exports = { createLibrary, getLibrary, getAllLibraries, modifyLibrary, deleteLibrary }