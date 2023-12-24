#!/usr/bin/env node
console.log(process.argv, 'argv')
const args = process.argv.slice(2)

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


