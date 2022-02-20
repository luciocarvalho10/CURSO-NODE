const msg = require('../../modules/msg')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const connectDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.rtalm.mongodb.net/database?retryWrites=true&w=majority`,
    e => msg.errSucc(e, `cloud.mongodb.com conectado! - ${new Date().toLocaleString()}`)
  )
}

module.exports = connectDatabase
