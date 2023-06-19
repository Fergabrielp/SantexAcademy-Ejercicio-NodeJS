const { bookService } = require('../services')

const createBook = async (req, res) => {
    try {
        const newBook = await bookService.createBook(req.body)
        res.json(newBook)
    } catch (error) {
        res.status(400).json({action: "CreateBook", error: error.message})
    }
}

const getBook = async (req, res) => {
    const id = req.params.bookId

    try {
        const bookFound = await bookService.getBook(id)
        if(bookFound){
            res.json(bookFound)
        }else{
            res.json({error: `Book not found with id: ${id}`})
        }
    } catch (error) {
        res.status(400).json({action: "GetBook", error: error.message})
    }
}

const getAllBooks = async (req, res) => {
    try {
        const booksFound = await bookService.getAllBooks()
        if(booksFound.length > 0){
            res.json(booksFound)
        }else{
            res.json({error: `No book was added yet`})
        }
    } catch (error) {
        res.status(400).json({action: "GetBooks", error: error.message})
    }
}

const modifyBook = async (req, res) => {
    const id = req.params.bookId
    const newBook = req.body

    try {
        const bookModified = await bookService.modifyBook(id, newBook)
        if(bookModified[0] !== 0){
            res.json({action: "ModifyBook", msg: `Book with id: ${id}, was succesfuly modified`})
        }else{
            res.status(400).json({error: `Book with id ${id} does not exist`})
        }
    } catch (error) {
        res.status(400).json({action: "ModifyBook", error: error.message})
    }
}

const deleteBook = async (req, res) => {
    const id = req.params.bookId

    try {
        const bookDeleted = await bookService.deleteBook(id)
        if(bookDeleted !== 0){
            res.json({action: "DeleteBook", msg: `Book with id: ${id}, was succesfuly deleted`})
        }else{
            res.status(400).json({error: `Book with id ${id} does not exist`})
        }
    } catch (error) {
        res.status(400).json({action: "DeleteBook", error: error.message})
    }
}



module.exports = {
    createBook,
    getBook,
    getAllBooks,
    modifyBook,
    deleteBook
}