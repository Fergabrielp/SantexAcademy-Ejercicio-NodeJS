const createBookController = (req, res) => {
    console.log("Creating a Book")
}

const getBookController = (req, res) => {
    console.log("Getting a Book")
}

const getAllBooksController = (req, res) => {
    console.log("Getting all Books")
}

const modifyBookController = (req, res) => {
    console.log("Modifying a Book")
}

const deleteBookController = (req, res) => {
    console.log("Deleting a Book")
}



module.exports = {
    createBookController,
    getBookController,
    getAllBooksController,
    modifyBookController,
    deleteBookController
}