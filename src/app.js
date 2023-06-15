const express = require('express')
const {bookRouter, libraryRouter, userRouter} = require('./routes')

const PORT = 3000
const app = express()

app.use(express.json())

app.use('/library', libraryRouter)
app.use('/book', bookRouter)
app.use('/user', userRouter)



app.get('/', (req, res) => {
    res.send("Testing server...")
})

app.listen(PORT, () => {
    console.log(`Listenting to request in port ${PORT}`)
})
