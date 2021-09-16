function solution(s) {
    const arr = s.split(' ');

    return Math.min(...arr) + ' ' + Math.max(...arr);
}

// function solution(s) {
//     var answer = '';
//     s = s
//         .split(' ')
//         .map((el) => +el)
//         .sort((a, b) => a - b);
//     answer = String(s[0])+ ' '+ String(s[s.length-1])
//     return answer;
// }
solution('-1 -2 -3 -4');
