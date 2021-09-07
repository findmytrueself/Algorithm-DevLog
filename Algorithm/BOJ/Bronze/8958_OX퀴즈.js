const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX
`
).split('\n');

let number = Number(stdin[0]);

for (let i = 1; i <= number; i++) {
    let count = 0;
    let sum = 0;

    for (let j = 0; j < stdin[i].length; j++) {
        if (stdin[i][j] === 'O') {
            count++;
        } else {
            count = 0;
        }
        sum += count;
    }
    console.log(sum);
}
