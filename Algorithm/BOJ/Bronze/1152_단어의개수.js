const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `

`
)
    .trim()
    .split('\n');

let n = stdin;
let temp = '';
let result = '';

for (let i = 0; i < n.length; i++) {
    temp = n[i].trim();

    if (temp.length === 0) {
        result = 0;
        console.log(result);
        return;
    }
    result = temp.split(' ').length;
    console.log(result);
}
