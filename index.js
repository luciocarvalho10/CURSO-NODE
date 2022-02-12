// Importa e executa o o que está dentro do modulo
require('./modules/path')
require('./modules/fs')

const { Person } = require('./Person')

const person = new Person('Lucio')

const node = require('./modules')
node.path
// node.fs.criarArquivo('test', 'teste.txt', 'Hello World!')
