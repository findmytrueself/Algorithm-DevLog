const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `39
40
41
42
43
44
82
83
84
85
`
).split('\n');

const input = (() => {
    let line = 0;
    return () => stdin[line++];
})();

let arr = [];
for (let i = 1; i <= 10; i++) {
    let temp = input();
    arr.push(temp % 42);
}
let uniqueArr = [];
arr.forEach((el) => {
    if (!uniqueArr.includes(el)) {
        uniqueArr.push(el);
    }
});

console.log(uniqueArr.length);
