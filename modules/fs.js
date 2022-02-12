const fs = require('fs')
const path = require('path')
const msg = require('./msg')

// Criar pasta obs=> {recursive: true} = caso a pasta criada exista não dá erro
const criarPasta = pasta =>
  fs.mkdir(path.join(__dirname, pasta), e => msg.errSucc(e, 'Pasta Criada'))

  // Criar arquivo
const criarArquivo = (caminho, arquivo, texto) =>
  fs.writeFile(path.join(__dirname, `/${caminho}`, arquivo), texto, e =>
    msg.errSucc(e, 'Arquivo criado'))


const inserirTexto = (caminho, arquivo, texto) =>
  fs.appendFile(path.join(__dirname, `/${caminho}`, arquivo), texto, e =>
    msg.errSucc(e, 'Arquivo modificado'))


const lerArquivo = (caminho, arquivo, formato) =>
 fs.readFile(path.join(__dirname, `/${caminho}`, arquivo), formato, (e, data) =>
  msg.errSucc(e, data))

module.exports = { criarPasta, criarArquivo, inserirTexto, lerArquivo }
