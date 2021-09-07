const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `4
-1 -3 -5 -7
`
)
    .trim()
    .split('\n');

let arr = stdin[1].split(' ').map((el) => Number(el));
let result = [];
arr.map((el) => (isPrime(el) === true ? result.push(el) : null));
let answer = result.length;
console.log(answer);

function isPrime(n) {
    if (n < 2 || n === undefined) {
        return false;
    }
    if (n === 2) {
        return true;
    } else if (n % 2 === 0) {
        return false;
    }
    let sqrt = Math.ceil(Math.sqrt(n));
    for (let i = 3; i <= sqrt; i = i + 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
