import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });

rl.on("line", (line: string) => process.stdout.write(line + "\n")).on(
  "close",
  () => process.exit()
);
