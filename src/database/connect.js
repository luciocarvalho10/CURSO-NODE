const msg = require('../../modules/msg')
const mongoose = require('mongoose')

const DB = async () => {
  await mongoose.connect(
    'mongodb+srv://luciocarvalho10:<password>@cursonodejs.rtalm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    e => msg.errSucc(e, 'Mongo conectado!')
  )
}

module.exports = DB