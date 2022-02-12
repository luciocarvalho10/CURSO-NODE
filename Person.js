class Person {
  constructor(name) {
    this.name = name
  }
  sayMyName = () => `My name is ${this.name}`
}

module.exports = { Person }