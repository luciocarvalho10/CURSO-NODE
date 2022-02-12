module.exports = {
  msg: msg => console.log(msg),
  err: err => console.log('Error: ' + err),
  errSucc: (err, msg) => (err ? console.log('Error: ' + err) : console.log(msg))
}