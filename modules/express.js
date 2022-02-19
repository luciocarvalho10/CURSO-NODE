const express = require('express')
const msg = require('./msg')
const UserModel = require('../src/models/user.model')

const port = 8080
const app = express()

app.use(express.json())

app.get('/users', async (req, res) => {
  try {
    res.status(200).json(await UserModel.find({}))
  } catch (error) {
    res.status(500).send(error.message)
  }
})

app.post('/users', async (req,res) => {
    try {
      res.status(201).json(await UserModel.create(req.body))
    } catch (error) {
      res.status(500).send(error.message)
  }})

app.listen(port, () => msg.succ(`Rodando na porta ${port}`))