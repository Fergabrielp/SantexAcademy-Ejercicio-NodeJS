const express = require('express')
const { initializeDB } = require('./config/dbConfig')
const { bookRouter, libraryRouter, userRouter, authRouter } = require('./routes')

const PORT = 3000
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.send(`
            <h1>Welcome to my API REST excercise with Node, Express, Sequelize, Passport and Sqlite.</h1>

            <h2>Please try the following endpoints with Postman, Insomnia, Thunderclient or other to start:</h2> 
            <ol>
                <li><b>Login</b>: Please login with user: "admin" and password: "admin", to have full access to CRUD. With this access rigths, you will be able to create a New User => http://localhost:3000/login</li> 
                <li><b>Create USer</b>: Once logged as Admin, you will be able to create a new user. The format to create an user is: </li>

            </ol>`)
})

app.use('/library',libraryRouter)
app.use('/book', bookRouter)
app.use('/user', userRouter)
app.use('/login', authRouter)


app.listen(PORT, async () => {
    await initializeDB()
    console.log(`Server running in port: ${PORT}`)
})
