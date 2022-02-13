const msg = require('../../modules/msg')
const mongoose = require('mongoose')

const DB = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_LOGIN}:${process.env.MONGODB_PASSWORD}@cursonodejs.rtalm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    e => msg.errSucc(e, 'Mongo conectado!')
  )
}

module.exports = DB
