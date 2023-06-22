const { libraryService } = require('../services')

const createLibrary = async (req, res) => {

    const library = req.body

    try {
        const newLibrary = await libraryService.createLibrary(library)
        if(newLibrary){
            res.status(201).json(newLibrary)
        }else{
            res.status(400).json({msg: "Error when creating a new library, please check if library data is correct"})
        }
    } catch (error) {
        res.status(500).json({action: "Server Error => CreateLibrary", error: error.message})
    }
}

const getLibrary = async (req, res) => {

    const id = req.params.libraryId

    try {
        const libraryFound = await libraryService.getLibrary(id)
        if(libraryFound){
            res.status(200).json(libraryFound)
        }else{
            res.status(404).json({error: `Library not found with id: ${id}`})
        }
    } catch (error) {
        res.status(500).json({action: "Server Error => GetLibrary", error: error.message})
    }
}

const getAllLibraries = async (req, res) => {

    try {
        const librariesFound = await libraryService.getAllLibraries()
        if(librariesFound.length > 0){
            res.status(200).json(librariesFound)
        }else{
            res.status(404).json({error: `No library was added yet`})
        }
    } catch (error) {
        res.status(500).json({action: "Server Error => GetLibrary", error: error.message})
    }
}

const modifyLibrary = async (req, res) => {

    const id = req.params.libraryId
    const newLibrary = req.body

    try {
        const libraryModified = await libraryService.modifyLibrary(id, newLibrary)
        if(libraryModified[0] !== 0){
            res.status(200).json({action: "ModifyLibrary", msg: `Library with id: ${id}, was succesfuly modified`})
        }else{
            res.status(404).json({error: `Library with id ${id} does not exist`})
        }
    } catch (error) {
        res.status(500).json({action: "Server Error => ModifyLibrary", error: error.message})
    }
}

const deleteLibrary = async (req, res) => {
    const id = req.params.libraryId

    try {
        const libraryDeleted = await libraryService.deleteLibrary(id)
        if(libraryDeleted !== 0){
            res.status(204).json({action: "DeleteLibrary", msg: `Library with id: ${id}, was succesfuly deleted`})
        }else{
            res.status(400).json({error: `Library with id ${id} does not exist`})
        }
    } catch (error) {
        res.status(500).json({action: "Server Error => DeleteBook", error: error.message})
    }
}

const createBook = async (req, res) => {

    const id = Number(req.params.libraryId)
    const book = req.body

    try {
        const bookCreated = await libraryService.createBook(id, book)
        if(bookCreated){
            res.status(201).json(bookCreated)
        }else{
            res.status(400).json({error: `Book cannot be created`})
        }
    } catch (error) {
        res.status(500).json({action: "Server Error => AddBook", error: error.message})
    }
}


module.exports = {
    createLibrary,
    getLibrary,
    getAllLibraries,
    modifyLibrary,
    deleteLibrary,
    createBook
}