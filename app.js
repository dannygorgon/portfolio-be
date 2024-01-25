const express = require("express")

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    const responseBody = {message: "Hello World!"}  
    res.status(200).send(responseBody)                      
})

app.post("/", (req, res) => {
    const {name, age} = req.body
    res.status(200).send({message: `Hello ${name}, you are ${age} years old!`} )
})

app.patch("/", (req, res) => {
    const {name, age} = req.body
    res.status(200).send({message: `Successfully patched! Hello ${name}, you are ${age} years old!`} )
})
module.exports = app