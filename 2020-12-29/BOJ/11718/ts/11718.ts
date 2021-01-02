import { readFileSync } from "fs";
readFileSync("/dev/stdin")
  .toString()
  .match(/[^\r\n]+/g)
  .forEach((line: string) => process.stdout.write(line + "\n"));
