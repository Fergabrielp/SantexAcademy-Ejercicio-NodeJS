const { libraryService } = require('../services')

const createLibrary = async (req, res) => {
    try {
        const newLibrary = await libraryService.createLibrary(req.body)
        res.json(newLibrary)
    } catch (error) {
        res.status(400).json({action: "CreateLibrary", error: error.message})
    }
}

const getLibrary = async (req, res) => {

    const id = req.params.libraryId

    try {
        const libraryFound = await libraryService.getLibrary(id)
        if(libraryFound){
            res.json(libraryFound)
        }else{
            res.json({error: `Library not found with id: ${id}`})
        }
    } catch (error) {
        res.status(400).json({action: "GetLibrary", error: error.message})
    }
}

const getAllLibraries = async (req, res) => {

    try {
        const librariesFound = await libraryService.getAllLibraries()
        if(librariesFound.length > 0){
            res.json(librariesFound)
        }else{
            res.json({error: `No library was added yet`})
        }
    } catch (error) {
        res.status(400).json({action: "GetLibrary", error: error.message})
    }
}

const modifyLibrary = async (req, res) => {

    const id = req.params.libraryId
    const newLibrary = req.body

    try {
        const libraryModified = await libraryService.modifyLibrary(id, newLibrary)
        if(libraryModified[0] !== 0){
            res.json({action: "ModifyLibrary", msg: `Library with id: ${id}, was succesfuly modified`})
        }else{
            res.status(400).json({error: `Library with id ${id} does not exist`})
        }
    } catch (error) {
        res.status(400).json({action: "ModifyLibrary", error: error.message})
    }
}

const deleteLibrary = async (req, res) => {
    const id = req.params.libraryId

    try {
        const libraryDeleted = await libraryService.deleteLibrary(id)
        if(libraryDeleted !== 0){
            res.json({action: "DeleteLibrary", msg: `Library with id: ${id}, was succesfuly deleted`})
        }else{
            res.status(400).json({error: `Library with id ${id} does not exist`})
        }
    } catch (error) {
        res.status(400).json({action: "DeleteBook", error: error.message})
    }
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