function solution(s) {
    var answer = '';
    let temp = [];
    for (let i = 0; i < s.length; i++) {
        temp.push(s.charCodeAt(i));
    }
    temp.sort((a, b) => b - a);
    temp.map((el) => (answer += String.fromCharCode(el)));
    return answer;
}
debugger;
solution('Zbcdefg');

// function solution(s) {
//   return s
//     .split("")
//     .sort()
//     .reverse()
//     .join("");
// }
