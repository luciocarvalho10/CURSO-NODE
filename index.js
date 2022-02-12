const { Person } = require('./Person')

const person = new Person('Lucio')

const node = require('./modules')
node.path
node.fs

require('./modules/path')
require('./modules/fs')
