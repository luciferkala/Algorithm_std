const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(element=>Number(element)).reduce((prev, curr) => prev+curr).toString();
// const input = fs.readFileSync('/dev/stdin').toString().split('\n').map(element=>Number(element)).reduce((prev, curr) => prev+curr);
process.stdout.write(input);
// console.log(input);