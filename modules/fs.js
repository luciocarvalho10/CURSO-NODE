const fs = require('fs')
const path = require('path')
const msg = require('./msg')

// Criar pasta
const criarPasta = pasta =>
  fs.mkdir(path.join(__dirname, pasta), e => msg.errSucc(e, 'Pasta Criada'))

// Criar arquivo
const criarArquivo = (pasta, arquivo, texto) =>
  fs.writeFile(path.join(__dirname, `/${pasta}`, arquivo), texto, e =>
    msg.errSucc(e, 'Arquivo criado'))

module.exports = { criarPasta, criarArquivo }
