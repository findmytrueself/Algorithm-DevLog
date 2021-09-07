const fs = require('fs');
const stdin = (
    process.platform === 'linux'
        ? fs.readFileSync('/dev/stdin').toString()
        : `3
happy
new
year
`
)
    .trim()
    .split('\n');

let arr = stdin.slice(1);
let countGroupWord = 0;
for (let el of arr) {
    const word = el;
    const letter = [];
    let isGroupWord = true;

    for (let i = 0; i < word.length; i++) {
        if (letter.indexOf(word[i]) === -1) {
            letter.push(word[i]);
        } else {
            if (letter.indexOf(word[i]) !== letter.length - 1) {
                isGroupWord = false;
                break;
            }
        }
    }
    if (isGroupWord) {
        countGroupWord += 1;
    }
}
console.log(countGroupWord);
