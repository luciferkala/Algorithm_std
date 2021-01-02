const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let t = 0;

for(let i = 1; i < input.length; i++) {
    console.log(input[i].split(' ').map(e => Number(e)).reduce((prev, curr) => prev+curr));
}
