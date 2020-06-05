#!/usr/bin/env node

// IMPORTS
var shell = require('shelljs')
var fs = require('fs')
var argv = require('minimist')(process.argv.slice(2))

// MODEL
globalThis.data = {
  inputURI: null
}

// INIT
data.inputURI = argv._[0] || data.inputURI

// MAIN
// console.error(`reading file ${data.inputURI}`)
data.input = fs.readFileSync(data.inputURI).toString()

data.input = data.input.replace(
  /^[\s\S]*script.*type="application[^>]*>.*[\n]/gi,
  ''
)
data.input = data.input.replace(/\n.*<\/script.*[\s\S]*$/gi, '')

console.log(data.input)
