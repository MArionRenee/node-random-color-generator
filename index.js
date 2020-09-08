const randomColor = require('randomcolor');
const color = randomColor();
const chalk = require('chalk');
const command = process.argv[2];

const myColor = randomColor({ hue: command, luminosity: command });

if (command === `ask`) {
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Which color would you like ? ', function (specialColor) {
    rl.question('Which luminosity would you like ? ', function (
      specialLuminosity,
    ) {
      console.log(`node index.js ${specialColor} ${specialLuminosity}`);
      process.exit(13);
    });
  });
} else {
  console.log(
    chalk.hex(myColor)(`
  ###############################
  ###############################
  ###############################
  #########    ${color}   ########
  ###############################
  ###############################
  ###############################`),
  );
}
