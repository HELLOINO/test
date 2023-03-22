const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    var a = Number(input[0]);
    
    for(var i = 1; i <= a; i++) {
        console.log('*'.repeat(i));
    }
});