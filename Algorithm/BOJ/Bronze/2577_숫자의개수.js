const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `150
266
427
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();
let result = '';
for (let i = 0; i < 3; i++) {
    let temp = input();
    result += temp + ' ';
}
let arr = result.trim().split(' ');

let num = arr.reduce((a, b) => a * b);
let newArr = num
    .toString()
    .split('')
    .sort((a, b) => a - b);
let obj = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };

newArr.forEach((el) => {
    obj[el] = (obj[el] || 0) + 1;
});

result = Object.values(obj).join(' \n');
console.log(result);
