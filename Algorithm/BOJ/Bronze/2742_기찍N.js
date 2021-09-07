const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `5
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let n = input();
let answer = '';
for (let i = 1; i <= n; i++) {
    answer += parseInt(n - i + 1) + '\n';
}

console.log(answer);
