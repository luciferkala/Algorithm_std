const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(
    line
      .split(" ")
      .map((e) => Number(e))
      .reduce((accu, curr) => accu + curr)
  );
}).on("close", () => {
  process.exit();
});
