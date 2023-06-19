const { Book } = require('../models')

const createBook = async (book) => {
    try {
        const newBook = await Book.create(book)
        return newBook
    } catch (error) {
        console.error('Error when creating a new Book. Error detail: ', error)
    }
}

const getBook = async (id) => {
    try {
        const bookFound = await Book.findByPk(id)
        return bookFound
    } catch (error) {
        console.error(`Error when finding a Book with id ${id}. Error detail: `, error)
    }
}

const getAllBooks = async () => {
    try {
        const booksFound = await Book.findAll()
        return booksFound
    } catch (error) {
        console.error(`Error when finding books. Error detail: `, error)
    }
}

const modifyBook = async (id, newBook) => {
    try {
        const bookModified = await Book.update(newBook,{where: {id: id}})
        return bookModified
    } catch (error) {
        console.error(`Error when modifying a Book with id: ${id}. Error detail: `, error)
    }
}

const deleteBook = async (id) => {
    try {
        const bookDeleted = await Book.destroy({where: {id: id}})
        return bookDeleted
    } catch (error) {
        console.error(`Error when deleting a Book with id: ${id}. Error detail: `, error)
    }
}

module.exports = { createBook, getBook, getAllBooks, modifyBook, deleteBook }