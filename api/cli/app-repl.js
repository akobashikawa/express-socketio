const repl = require('repl');

global.d = require('../dependencies');

const cli = repl.start('app> ');

cli.on('exit', () => {
  console.log('bye, bye!');
  process.exit();
});
