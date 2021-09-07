const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `5
20 10 35 30 7
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();
let result = '';
let n = input();
let arr = input().split(' ').map(Number);
let min = 0;
let max = 0;

arr = arr.sort((a, b) => a - b);
min = arr[0];
max = arr[arr.length - 1];
result = `${min} ${max}`;
console.log(result);
