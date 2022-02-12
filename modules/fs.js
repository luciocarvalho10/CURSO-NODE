const fs = require('fs')
const path = require('path')
const msg = require('./msg')

// Criar pasta obs=> {recursive: true} = caso a pasta criada exista não dá erro
const criarPasta = pasta =>
  fs.mkdir(path.join(__dirname, pasta), e => msg.errSucc(e, 'Pasta Criada'))

  // Criar arquivo
const criarArquivo = (pasta, arquivo, texto) =>
  fs.writeFile(path.join(__dirname, `/${pasta}`, arquivo), texto, e =>
    msg.errSucc(e, 'Arquivo criado'))


const inserirTexto = (pasta, arquivo, texto) =>
  fs.appendFile(path.join(__dirname, `/${pasta}`, arquivo), texto, e =>
    msg.errSucc(e, 'Arquivo modificado'))

module.exports = { criarPasta, criarArquivo, inserirTexto }
