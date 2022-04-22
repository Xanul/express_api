// Usando objeto express
const express = require('express')

// App de express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Declaramos el puerto que utilizaremos en nuestra app local: localhost:3000
const port = 3000

// Inicializamos la app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//HTTP Method
app.get('/v1/explorers', (req, res)=>{
    console.log(`API Explorers GET ALL request ${new Date()}`)
    const explorer1 = {id:1, name: "Carlo"}
    const explorer2 = {id:2, name: "Rodrigo"}
    const explorer3 = {id:3, name: "Juan"}
    const explorer4 = {id:4, name: "Sebastian"}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    res.status(200).json(explorers)
})

// Usamos parametros para mandar un dato por HTTP (En este caso el id)
app.get('/v1/explorers/:id', (req,res) => {
    console.log(`API Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    // const explorer1 = {id:1, name: "Carlo"}
    // const explorer2 = {id:2, name: "Rodrigo"}
    // const explorer3 = {id:3, name: "Juan"}
    // const explorer4 = {id:4, name: "Sebastian"}
    const explorers = [
        {
            name: "Rodrigo",
            id: 1
        },
        {
            name: "Carlo",
            id: 2
        },
        {
            name: "Juan",
            id: 3
        },
        {
            name: "Sebastian",
            id: 4
        }
    ]

    const id = req.params.id - 1
    res.status(200).json(explorers[id])
    console.log(explorers[id])
})

// Codigo para usar POST
app.post('/v1/explorers', (req, res) => {
    console.log(`API Explorers POST request ${new Date()}`)
    const requestBody = req.body // Parametros del cliente
    res.status(201).json({message: "Created"})
})

// Codigo para usar PUT
app.put('/v1/explorers/:id', (req, res)=>{
    console.log(`API Explorers PUT request ${new Date()}`)
    console.log(`Update Explorer with id ${req.params.id}`)
    const requestBody = req.body 
    res.status(200).json({message: "Updated!"})
})

// Codigo para usar DELETE
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`API Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id ${req.params.id}`)
    const requestBody = req.body // Parametros del cliente
    res.status(200).json({message: "Deleted"})
    
})