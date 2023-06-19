const express = require('express')
const { initializeDB } = require('./config/dbConfig')
const { bookRouter, libraryRouter, userRouter, authRouter } = require('./routes')

const PORT = 3000
const app = express()

app.use(express.json())

app.use('/library',libraryRouter)
app.use('/book', bookRouter)
app.use('/user', userRouter)
app.use('/login', authRouter)


app.listen(PORT, async () => {
    await initializeDB()
    console.log(`Server running in port: ${PORT}`)
})
