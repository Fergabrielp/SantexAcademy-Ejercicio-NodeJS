const { bookService } = require('../services')

const createBook = async (req, res) => {

    const book = req.body

    try {
        const newBook = await bookService.createBook(book)
        if(newBook){
            res.status(201).json(newBook)
        }else{
            res.status(400).json({msg: "Error when creating a new book, please check if book data is correct"})
        }
    } catch (error) {
        res.status(500).json({action: "Server Error => CreateBook", error: error.message})
    }
}

const getBook = async (req, res) => {

    const id = req.params.bookId

    try {
        const bookFound = await bookService.getBook(id)
        if(bookFound){
            res.status(200).json(bookFound)
        }else{
            res.status(404).json({error: `Book not found with id: ${id}`})
        }
    } catch (error) {
        res.status(500).json({action: "Server Error => GetBook", error: error.message})
    }
}

const getAllBooks = async (req, res) => {
    try {
        const booksFound = await bookService.getAllBooks()
        if(booksFound.length > 0){
            res.status(200).json(booksFound)
        }else{
            res.status(404).json({error: `No book was added yet`})
        }
    } catch (error) {
        res.status(500).json({action: "Server Error => GetBooks", error: error.message})
    }
}

const modifyBook = async (req, res) => {
    const id = req.params.bookId
    const newBook = req.body

    try {
        const bookModified = await bookService.modifyBook(id, newBook)
        if(bookModified[0] !== 0){
            res.status(200).json({action: "ModifyBook", msg: `Book with id: ${id}, was succesfuly modified`})
        }else{
            res.status(404).json({error: `Book with id ${id} does not exist`})
        }
    } catch (error) {
        res.status(500).json({action: "Server Error => ModifyBook", error: error.message})
    }
}

const deleteBook = async (req, res) => {
    const id = req.params.bookId

    try {
        const bookDeleted = await bookService.deleteBook(id)
        if(bookDeleted !== 0){
            res.status(200).json({action: "DeleteBook", msg: `Book with id: ${id}, was succesfuly deleted`})
        }else{
            res.status(404).json({error: `Book with id ${id} does not exist`})
        }
    } catch (error) {
        res.status(500).json({action: "Server Error => DeleteBook", error: error.message})
    }
}



module.exports = {
    createBook,
    getBook,
    getAllBooks,
    modifyBook,
    deleteBook
}