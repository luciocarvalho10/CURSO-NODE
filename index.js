// Importa e executa o o que está dentro do modulo
require('./modules/path')
require('./modules/fs')

const { Person } = require('./Person')

const person = new Person('Lucio')

const node = require('./modules')

// referente a path.js
// node.path.arquivoAtual()
// node.path.arquivoAtualDiretorio()
// node.path.arquivoAtualExtensao()
// node.path.arquivoAtualInformacao()
// node.path.arquivoAtualJuntarCaminho('test')

// node.fs.criarPasta('test')
// node.fs.criarArquivo('test', 'teste.txt', 'Hello World!')
node.fs.inserirTexto('test', 'teste.txt', ' e Hello Node!')
