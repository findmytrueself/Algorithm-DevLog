const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `10 5
1 10 4 9 2 3 8 5 7 6
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let n = input();
let answer = [];
let num = n.split(' ')[1];
const smaller = input().split(' ').map(Number);
answer = smaller.filter((el) => el < num);
answer = answer.join(' ');
console.log(answer);
