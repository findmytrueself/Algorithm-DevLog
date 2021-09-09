function solution(s, answer = '') {
    let temp = '';
    const table = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
    const tableKey = Object.keys(table); // Key 배열
    const tableValue = Object.values(table); // Value 배열
    if (s.length === 0) {
        // 재귀탈출조건
        return +answer;
    }
    for (let i = 1; i <= s.length; i++) {
        // 첫번째로 등장하는 영단어 혹은 숫자 인덱스1부터확인하기떄문에 <=s.length까지 반복.
        temp = s.slice(0, i); // 잘라서 temp에 집어넣기
        for (let j = 0; j < tableKey.length; j++) {
            // Key테이블에 있는 숫자만큼 완전탐색
            if (temp === tableKey[j] && typeof temp === 'string') {
                // 자른값이 문자열고 tableKey의 탐색값과 같을때
                answer += table[temp]; // table객체의 value 숫자값을 answer에 더하고
                s = s.slice(i); // 원래 문자열은 비교한 값을 잘라준다.
                return solution(s, answer); // 자른값을 넣어서 재귀 호출
            } else if (+temp === tableValue[j]) {
                answer += tableValue[j];
                s = s.slice(i);
                return solution(s, answer);
            }
        }
    }
}

debugger;
solution('zeroonezeroeight0seven7eightzero54');

// function solution(s) {
//     s = s.replace(/zero/gi, 0)
//     .replace(/one/gi, 1)
//     .replace(/two/gi, 2)
//     .replace(/three/gi, 3)
//     .replace(/four/gi, 4)
//     .replace(/five/gi, 5)
//     .replace(/six/gi, 6)
//     .replace(/seven/gi, 7)
//     .replace(/eight/gi, 8)
//     .replace(/nine/gi, 9)
//     return parseInt(s);
// }

// let arr = answer.split(tableKey[i]);
// answer = arr.join(i);
