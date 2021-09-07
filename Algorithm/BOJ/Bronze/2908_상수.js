const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `734 893
221 231
839 237
`
)
    .trim()
    .split('\n');

let n = stdin;
let result = '';
for (let i = 0; i < n.length; i++) {
    let temp = n[i].split(' ');
    let a = temp[0];
    let b = temp[1];
    a = a.split('').reverse().join('');
    b = b.split('').reverse().join('');
    let newArr = [a, b];
    result = Math.max.apply(null, newArr);
    console.log(result);
}
