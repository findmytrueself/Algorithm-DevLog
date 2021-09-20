function solution(name) {
    let answer = 0;
    let nowCode = 65;
    let 
    for (let i = 0; i < name.length; i++) {
        let changeCode = name.charCodeAt(i) - nowCode;
        nowCode = name.charCodeAt(i);
        answer += changeCode;
    }
    console.log(answer);
    return answer;
}
solution('JAZ'); // 11
// solution('JEROEN'); // 56
// solution('JAN'); // 23

// 65번 A , 90 Z
// let asc = [
//     'A',
//     'B',
//     'C',
//     'D',
//     'E',
//     'F',
//     'G',
//     'H',
//     'I',
//     'J',
//     'K',
//     'L',
//     'M',
//     'N',
//     'O',
//     'P',
//     'Q',
//     'R',
//     'S',
//     'T',
//     'U',
//     'V',
//     'W',
//     'X',
//     'Y',
//     'Z',
// ];
// let strAsc = asc.join('');
