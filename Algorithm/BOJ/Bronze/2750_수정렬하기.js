const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `5
5
2
3
4
1
`
)
    .trim()
    .split('\n');

let arr = stdin.slice(1);
arr.sort((a, b) => a - b);

arr.map((el) => console.log(el));
