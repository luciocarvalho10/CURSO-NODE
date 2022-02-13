const express = require('express')
const msg = require('./msg')

const port = 8080
const app = express()

app.get('/home', (req,res) => {
  res.contentType('apllication/html')
  res.status(200).send('<h1>Hello World!</h1>')
})

app.get('/users', (req, res) => {
  const usersResp = [
    {
      name: 'Lucio',
      email: 'lucio@teste.com'
    },
    {
      name: 'Lucio2',
      email: 'lucio2@teste.com'
    }
  ]

  res.status(200).send(usersResp)
})

app.listen(port, () => msg.succ(`Rodando na porta ${port}`))