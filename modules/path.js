const path = require('path')

// Pegando o nome do arquivo atual
console.log(path.basename(__filename))

// Pegando Diretório atual
console.log(path.dirname(__filename))

// Pegando extensão do arquivo atual
console.log(path.extname(__filename))

// Pegando objeto de informação do arquivo atual
console.log(path.parse(__filename))

// Juntar caminhos
console.log(path.join(__dirname, 'teste'))