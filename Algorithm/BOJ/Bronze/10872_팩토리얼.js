const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `10
`
)
    .trim()
    .split('\n');

for (let i = 0; i < stdin.length; i++) {
    let N = Number(stdin[i]);
    let answer = N;
    while (true) {
        N--;
        if (N === -1) {
            console.log(1);
            break;
        }
        if (N === 0) {
            console.log(answer);
            break;
        }
        answer = answer * N;
    }
}
