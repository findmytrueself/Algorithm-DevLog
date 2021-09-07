const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `10
`
)
    .trim()
    .split('\n');

let n = Number(stdin[0]);

function fibo(n) {
    if (n < 2) {
        return n;
    }
    return fibo(n - 1) + fibo(n - 2);
}
console.log(fibo(n));
