import * as readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line: string) => {
  process.stdout.write(
    String(
      line
        .split(" ")
        .map((e: string) => Number(e))
        .reduce((accu: number, curr: number) => accu + curr)
    ) + "\n"
  );
}).on("close", () => {
  process.exit();
});
