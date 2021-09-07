const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `baekjoon
`
)
    .trim()
    .split('\n');

let word = stdin[0].split('');
let result = '';

for (let i = 97; i <= 122; i++) {
    let a = -1;
    result += a + ' ';
}

let arr = result.trim().split(' ');

for (let i = 0; i < word.length; i++) {
    let idx2 = word[i].charCodeAt() - 97;
    let charCode = String.fromCharCode(idx2 + 97);
    arr[idx2] = `${word.indexOf(charCode)}`;
}
arr = arr.map((el) => Number(el)).join(' ');
console.log(arr);
