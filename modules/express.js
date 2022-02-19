const express = require('express')
const msg = require('./msg')
const UserModel = require('../src/models/user.model')

const port = 8080
const app = express()

app.use(express.json())

// pegar todos os usuarios
app.get('/users', async (_req, res) => {
  try { res.status(200).json(await UserModel.find({})) }
  catch (error) { res.status(500).send(error.message) }
})

// pegar os usuarios por id
app.get('/users/:id', async (req, res) => {
  try { res.status(200).json(await UserModel.findById(req.params.id)) }
  catch (error) { res.status(500).send(error.message) }
})

// criar usuarios
app.post('/users', async (req,res) => {
    try { res.status(201).json(await UserModel.create(req.body)) }
    catch (error) { res.status(500).send(error.message) }
})

// atualizar usuario
app.patch('/users/:id', async (req, res) => {
  try {res.status(200).json(await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true}))}
  catch (error) { res.status(500).send(error.message) }
})

app.listen(port, () => msg.succ(`Rodando na porta ${port} - ${new Date().toLocaleString()}`))