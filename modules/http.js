const msg = require('./msg')
const http = require('http')

const port = 8080
const successCode = 200
const type = type => ({ "Content-Type": `${type}` })

const Home = (req, res) => {
  const homeResp = '<h1>Home Page</h1>'

  if (req.url === '/home') {
    res.writeHead(successCode, type('text/html'))
    res.end(homeResp)
  }
}

const Users = (req, res) => {
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

  if (req.url === '/users') {
    res.writeHead(successCode, type('apllication/json'))
    res.end(JSON.stringify(usersResp))
  }
}

const server = http.createServer((req, res) => {
  Home(req, res)
  Users(req, res)
})

server.listen(port, () => msg.succ(`Rodando na porta ${port}`))