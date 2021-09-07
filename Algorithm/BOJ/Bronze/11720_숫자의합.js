const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `11
10987654321
`
)
    .trim()
    .split('\n');

let arr = stdin[1].split('').reduce((a, b) => +a + +b);
console.log(arr);
