const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `3
0 0 13 40 0 37
0 0 3 0 7 4
1 1 1 1 1 5
`
)
    .trim()
    .split('\n');

const T = Number(stdin[0]);
let arr = stdin.slice(1);
for (let i = 0; i < arr.length; i++) {
    let location = arr[i];
    let one = location.split(' ').splice(0, 3);
    let two = location.split(' ').splice(3);
    const [x1, y1, r1] = one;
    const [x2, y2, r2] = two;
    let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let dis = Math.sqrt(Math.pow(r2 - r1, 2));
    console.log(distance, 'x,y');
    console.log(dis, 'r');
}
