const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdou,
});

let result = 0;
rl.on('line', line => {
    result = line.split(' ').map(element => Number(element)).reduce((prev, current) => prev+current);
    rl.close();
}).on('close', () => {
    console.log(result);
    // process.stdout.write(result.toString());
    process.exit();
})