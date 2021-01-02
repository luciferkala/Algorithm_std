const fs = require("fs");
fs.readFileSync("/dev/stdin")
  .toString()
  .match(/[^\r\n]+/g)
  .forEach((line) => process.stdout.write(line + "\n"));
