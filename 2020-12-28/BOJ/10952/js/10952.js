const fs = require("fs");
fs.readFileSync("/dev/stdin")
  .toString()
  .match(/[^\r\n]+/g)
  .forEach((e) =>
    e
      .split(" ")
      .map((el) => Number(el))
      .reduce((accu, curr) => {
        if (accu + curr > 0) console.log(accu + curr);
      })
  );
