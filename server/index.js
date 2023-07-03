const logs = require('./utils');
console.log('Hello Node.js!')
const fs = require('fs');
const comargs = require('./commandpromptargs');
const validator = require('validator');
logs();
fs.writeFileSync('notes.txt', 'I live in Philadelphia')
console.log(validator.isURL('http://google.com'));
comargs();
const yargs = require('yargs')
yargs.version('1.1.0')
yargs.command({
 command: 'add',
 describe: 'Add a new note',
 handler: function () {
 console.log('Adding a new note!')
 }
})a
console.log(yargs.argv);