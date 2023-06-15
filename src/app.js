const express = require('express')

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
    res.send("Testing server...")
})

app.listen(PORT, () => {
    console.log(`Listenting to request in port ${PORT}`)
})
