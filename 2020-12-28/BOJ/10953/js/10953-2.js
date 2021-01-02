const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  line
    .split(",")
    .map((e) => Number(e))
    .reduce((accu, curr) => process.stdout.write(String(accu + curr) + "\n"));
}).on("close", () => {
  process.exit();
});
