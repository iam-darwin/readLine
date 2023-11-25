const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt("> ");

rl.prompt();

rl.on('line', (input) => {
  // This callback is called when the user enters a line of input
  console.log(`You entered: ${input}`);
  rl.prompt();
});

// Close the interface when the user presses Ctrl+C
rl.on('close', () => {
  console.log('Goodbye!');
  process.exit(0);
});
