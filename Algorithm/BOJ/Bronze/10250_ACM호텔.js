const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `6
6 12 10
30 50 72
1 10 9
1 1 1
6 6 6
98 38 1324
`
)
    .trim()
    .split('\n');

let T = Number(stdin[0]);
let result = ``;
for (let i = 1; i <= T; i++) {
    let arr = stdin[i].split(' ').map((el) => Number(el));
    const [H, W, N] = arr;
    solution(+H, +W, +N);
}

function solution(H, W, N) {
    let room = Math.ceil(N / H);
    let floor = N % H;
    let result = '';
    if (floor === 0) {
        floor = H;
    }

    room < 10 ? (room = String(0) + room) : room;
    result += `${floor}${room}`;
    console.log(result);
}
