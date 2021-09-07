let fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split('\n');

let answer = '';

for (let i = 1; i <= input[0]; i++) {
    tmp = i;
    answer += parseInt(tmp) + '\n';
}

console.log(answer);
