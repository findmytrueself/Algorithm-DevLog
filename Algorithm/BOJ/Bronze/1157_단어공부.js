const { kStringMaxLength } = require('buffer');
const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `Mississipi
zZa
z
baaa
`
)
    .trim()
    .split('\n');

let n = stdin;
let result = '';
let obj = {};
let isNotOne = false;
for (let i = 97; i <= 122; i++) {
    obj[String.fromCharCode(i)] = 0;
}

n.forEach((el) => {
    let temp = [];
    for (let i = 0; i < el.length; i++) {
        temp.push(el[i].toLowerCase());
    }
    temp.forEach((el) => (obj[el] = (obj[el] || 0) + 1));
    let a = Object.values(obj);
    let b = Object.keys(obj);
    let max = Math.max.apply(null, a);

    let maxArr = [];
    a.forEach((el, i) => (el === max ? maxArr.push(i) : null));

    if (maxArr.length > 1) {
        result = '?';
    } else {
        result = b[maxArr[0]].toUpperCase();
    }
});
console.log(result);
