const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `13
`
)
    .trim()
    .split('\n');

let n = stdin;
let count = 1;
let range = 1;

while (range < n) {
    range += count++ * 6;
}

console.log(count);
