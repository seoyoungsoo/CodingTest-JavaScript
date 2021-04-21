// 1678번 Gaol Parser Interpretation

const interpret = (command) => {
  return command.split('()').join('o').split('(al)').join('al');
}

const command = "G()(al)";
console.log(interpret(command));