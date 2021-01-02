const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', line => {
    input.push(Number(line));
}).on('close', () => {
    process.stdout.write(input.reduce((prev, curr) => prev+curr).toString());
    // console.log(input.reduce((prev, curr) => prev+curr));
    process.exit();
})