const createBook = (req, res) => {
    console.log("Creating a Book")
}

const getBook = (req, res) => {
    console.log("Getting a Book")
}

const getAllBooks = (req, res) => {
    console.log("Getting all Books")
}

const modifyBook = (req, res) => {
    console.log("Modifying a Book")
}

const deleteBook = (req, res) => {
    console.log("Deleting a Book")
}



module.exports = {
    createBook,
    getBook,
    getAllBooks,
    modifyBook,
    deleteBook
}