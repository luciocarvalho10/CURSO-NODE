const fs = require('fs')
const path = require('path')
const msg = require('./msg')

// Criar pasta
const criarPasta = () =>
  fs.mkdir(path.join(__dirname, '/test'), e => msg.errSucc(e, 'Pasta Criada'))

module.exports = { criarPasta }
