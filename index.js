const dotenv = require('dotenv')
dotenv.config()
// Importa e executa o que está dentro do modulo
// require('./modules/path')
// require('./modules/fs')
// require('./modules/http')
// require('./modules/express')

// Apenas importa
// const { Person } = require('./Person')
// const person = new Person('Lucio')

const node = require('./modules')
// node.http()
node.express()

// referente a path.js
// node.path.arquivoAtual()
// node.path.arquivoAtualDiretorio()
// node.path.arquivoAtualExtensao()
// node.path.arquivoAtualInformacao()
// node.path.arquivoAtualJuntarCaminho('test')

// node.fs.criarPasta('test')
// node.fs.criarArquivo('test', 'teste.txt', 'Hello World!')
// node.fs.inserirTexto('test', 'teste.txt', ' e Hello Node!')
// node.fs.lerArquivo('test', 'teste.txt', 'utf8')
