'use strict'

// appler wrapper
var Fyler = require('./Fyler')
var EchoService = require('./EchoService')

module.exports = function (data) {
  console.log('Appler reached')
  let appler = {}
  appler.Fyler = require('./Fyler')
  appler.EchoService = require('./EchoService')

  return appler
}
