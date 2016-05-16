'use strict'
var Appler = require('./Appler')()
console.log(`app1 started ... ${__dirname}`)
console.log(Appler.EchoService('joe foo'))
// var EchoService = require('EchoService')('Hi Henry ..')
// exports.Fyler = Fyler

module.exports = Appler
