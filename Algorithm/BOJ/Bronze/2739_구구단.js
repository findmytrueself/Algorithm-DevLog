const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `2
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();
let num = Number(input());

let result = `${num} * 1 = ${num * 1}`;
for (let i = 2; i <= 9; i++) {
    result = result + '\n' + `${num} * ${i} = ${num * i}`;
}

console.log(result);
