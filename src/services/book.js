const { bookProvider } = require('../providers')

const createBook = async (book) => {
    return await bookProvider.createBook(book)
}

const getBook = async (id) => {
    return await bookProvider.getBook(id)
}

const getAllBooks = async () => {
    return await bookProvider.getAllBooks()
}

const modifyBook = async (id, newBook) => {
    return await bookProvider.modifyBook(id, newBook)
}

const deleteBook = async (id) => {
    return await bookProvider.deleteBook(id)
}



module.exports = {
    createBook,
    getBook,
    getAllBooks,
    modifyBook,
    deleteBook
}