const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let result = 0;

rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    for(let i = 1; i < input.length; i++) {
        let tmp = input[i].split(' ').map(e => Number(e)).reduce((prev, curr) => prev+curr);
        console.log(tmp);
    }
    process.exit();
})
