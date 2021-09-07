const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `72
`
)
    .trim()
    .split('\n');
const N = Number(stdin[0]);

function getPrimeFactor(n) {
    let divider = 2;
    while (n != 1) {
        if (n % divider === 0) {
            console.log(divider);
            n /= divider;
        } else {
            divider++;
        }
    }
}
getPrimeFactor(N);
