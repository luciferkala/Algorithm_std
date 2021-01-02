const fs = require("fs");
fs.readFileSync("/dev/stdin")
  .toString()
  .match(/[^\r\n]+/g)
  .forEach((line) => {
    console.log(
      line
        .split("")
        .map((e) => Number(e))
        .reduce((acc, curr) => acc + curr)
    );
  });
