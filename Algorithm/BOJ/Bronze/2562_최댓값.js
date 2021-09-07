const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `3
29
38
12
57
74
40
85
61
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();
let result = '';

for (let i = 0; i < 9; i++) {
    let num = input();
    result += num + ' ';
}
let arr = result.trim().split(' ').map(Number);
let max = Math.max.apply(null, arr);
let idx = arr.indexOf(max);
idx = idx + 1;
result = max + '\n' + idx;
console.log(result);
