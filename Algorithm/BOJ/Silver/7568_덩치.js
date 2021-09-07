const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `60
100
`
)
    .trim()
    .split('\n');

let M = Number(stdin[0]);
let N = Number(stdin[1]);
let result = [];
function isPrime(n) {
    if (n < 2 || n === undefined) {
        return false;
    }
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
for (M; M <= N; M++) {
    if (isPrime(M)) {
        result.push(M);
    }
}

if (result.length !== 0) {
    let sum = result.reduce((a, b) => a + b);
    let minNum = Math.min.apply(null, result);
    let answer = `${sum}\n${minNum}`;
    console.log(answer);
} else if (result.length === 0) {
    console.log(-1);
}
