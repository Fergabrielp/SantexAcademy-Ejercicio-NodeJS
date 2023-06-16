const { Library } = require('../models')

const createLibrary = async (library) => {
    try {
        const newLibrary = await Library.create(library)
        return newLibrary
    } catch (error) {
        console.error('Error when creating a Library: ', error)
    }
}

module.exports = { createLibrary }