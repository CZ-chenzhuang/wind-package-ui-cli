#!/usr/bin/env node
const program = require('commander')
const package = require('../package.json')
// const args = process.argv.slice(2)
// const inquirer = require('inquirer')

// program.command('create <app-name>')
//   .description('create a new project')
//   .option('-f, --force', 'overwrite target')
//   .option('-w, --web', '前面是缩写')
//   .action((name, cmd) => {
//     console.log(name, 'name--')
//     console.log(cmd, 'cmd----')
//     // const create = require('../lib/create')
//     create(name, cmd)
//   })

// program.command('config [value]')
//   .description('inspect and modify the config')
//   .option('-g, --get', 'get value form option')
//   .option('-s, --set <path> <value>', 'set value')
//   .option('-d, --delete [name]', 'delete option from option')
//   .action((value, cmd) => {
//     console.log(value, 'config value')
//     console.log(cmd, 'config cmd')
//   })

// program.command('ui')
//   .option('-p, --port')
//   .action((cmd) => {

//   })

// program
//   .version(package.version)
//   .usage(`<command> [option]`)

// program.parse(process.argv)

function parseArgs(args) {
  let start = false
  let build = false
  args.forEach(item => {
    switch (item) {
      case 'build':
        build = true
        break
      case 'start':
        start = true
        break
    }
  })
  return {
    start,
    build
  }
}

const argv = parseArgs(args)

if (argv.start) {
  require('./compile-development')
} else if (argv.build) {
  require('./compile-production')
}


