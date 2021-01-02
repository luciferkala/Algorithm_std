const fs = require("fs");
fs.readFileSync("/dev/stdin")
  .toString()
  .match(/[^\r\n]+/g)
  .slice(1)
  .forEach((line) => {
    line
      .split(",")
      .map((e) => Number(e))
      .reduce((accu, curr) => process.stdout.write(String(accu + curr) + "\n"));
  });
