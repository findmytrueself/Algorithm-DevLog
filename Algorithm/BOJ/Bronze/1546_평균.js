const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `3
    10 20 30
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let n = input();

let arr = input().split(' ').map(Number);
let max = Math.max.apply(null, arr);
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += (arr[i] / max) * 100;
}
console.log((sum / n).toFixed(2));
