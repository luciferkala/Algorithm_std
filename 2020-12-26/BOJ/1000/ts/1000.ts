import { readFileSync } from "fs";
readFileSync("/dev/stdin")
  .toString()
  .match(/[^\r\n]+/g)
  .forEach((line: string) => {
    process.stdout.write(
      String(
        line
          .split(" ")
          .map((e) => Number(e))
          .reduce((accu: number, curr: number) => accu + curr)
      ) + "\n"
    );
  });
