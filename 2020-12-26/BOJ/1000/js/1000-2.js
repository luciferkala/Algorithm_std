const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ').map(element => Number(element)).reduce((prev, curr) => prev+curr);
process.stdout.write(input.toString());
//console.log(input);