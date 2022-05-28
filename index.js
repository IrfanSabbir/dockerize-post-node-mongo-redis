require('dotenv').config();
const express = require('express')

const app = express()
app.use(express.json())

app.use('/', async (req, res, next)=>{
    res.send("Hi and and hello")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`running on ${PORT}`)
})
