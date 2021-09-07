const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `5 21
5 6 7 8 9
`
)
    .trim()
    .split('\n');

const [N, M] = stdin[0].split(' ');
let arr = stdin[1].split(' ').map((el) => Number(el));
let result = 0;
// console.log(M);
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            let temp = arr[i] + arr[j] + arr[k];

            if (M == temp) {
                console.log(temp);
                return;
            } else if (result < temp && temp < M) {
                result = temp;
            }
        }
    }
}
console.log(result);
