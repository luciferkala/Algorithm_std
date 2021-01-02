const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  line
    .split(" ")
    .map((e) => Number(e))
    .reduce((accu, curr) => {
      if (accu + curr > 0) process.stdout.write(string(accu + curr) + "\n");
    });
}).on("close", () => process.exit());
