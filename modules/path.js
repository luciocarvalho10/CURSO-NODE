const path = require('path')

// Pegando o nome do arquivo atual
const arquivoAtual= () => console.log(path.basename(__filename))

// Pegando Diretório atual
const arquivoAtualDiretorio = () => console.log(path.dirname(__filename))

// Pegando extensão do arquivo atual
const arquivoAtualExtensao = () => console.log(path.extname(__filename))

// Pegando objeto de informação do arquivo atual
const arquivoAtualInformacao = () => console.log(path.parse(__filename))

// Juntar caminhos
const arquivoAtualJuntarCaminho = caminho => console.log(path.join(__dirname, caminho))

// Juntar caminho pode por arquivos também
// const arquivoCaminhoJuntar = () =>
//   console.log(path.join(__dirname, 'teste', 'teste.html'))

module.exports = {
  arquivoAtual,
  arquivoAtualDiretorio,
  arquivoAtualExtensao,
  arquivoAtualInformacao,
  arquivoAtualJuntarCaminho
}