const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `2
3 ABC
5 /HTP
`
)
    .trim()
    .split('\n');

let n = stdin[0];
let result = '';
for (let i = 1; i <= n; i++) {
    let temp = stdin[i];
    temp = temp.split(' ');
    // console.log(temp);
    let num = Number(temp[0]);
    let word = temp[1];
    for (let j = 0; j < word.length; j++) {
        result += word[j].repeat(num);
    }
    result += '\n';
}
console.log(result);
