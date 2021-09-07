const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `5 1 6
`
)
    .trim()
    .split('\n');

let testCase = '';
for (let i = 0; i < stdin.length; i++) {
    testCase = stdin[i].split(' ').map((el) => Number(el));
}

function solution(testCase) {
    const [a, b, v] = testCase;
    let day = Math.ceil((v - b) / (a - b));
    console.log(day);
}

solution(testCase);
