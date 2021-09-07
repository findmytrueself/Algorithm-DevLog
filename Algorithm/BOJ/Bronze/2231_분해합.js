const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `216
`
)
    .trim()
    .split('\n');

let N = Number(stdin[0]);
let start = N - String(N).length * 9;
let M = start;
let answer;

while (true) {
    M++;
    let sum = M;
    for (let i = 0; i < String(M).length; i++) {
        sum += Number(String(M)[i]);
    }
    if (sum === N) {
        answer = M;
        break;
    }
    if (M >= N) {
        answer = 0;
        break;
    }
}

console.log(answer);
