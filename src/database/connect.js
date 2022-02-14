const msg = require('../../modules/msg')
const mongoose = require('mongoose')

const connectDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.rtalm.mongodb.net/database?retryWrites=true&w=majority`,
    e => msg.errSucc(e, 'cloud.mongodb.com conectado!')
  )
}

module.exports = connectDatabase
