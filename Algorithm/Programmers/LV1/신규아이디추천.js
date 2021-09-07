function solution(new_id) {
    let temp = '';
    let temp2 = '';
    let alphaNum = /([a-z0-9-_.])/;
    new_id = new_id.toLowerCase(); // 1단계 소문자변환
    new_id.split('').forEach((el) => {
        if (alphaNum.test(el)) {
            temp2 += el; // 2단계 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자
        }
    });
    for (let i = 0; i < temp2.length; i++) {
        // 3단계 '..' , '...' 빼기
        if (temp2[i] === '.' && temp2[i + 1] === '.') {
            continue;
        } else {
            temp += temp2[i];
        }
    }
    if (temp[0] === '.') {
        temp = temp.slice(1); // 4단계 처음 '.' 제거
    }
    if (temp[temp.length - 1] === '.') {
        temp = temp.slice(0, temp.length - 1);
    }
    if (temp.length === 0) {
        temp += 'a'; // 5단계 빈문자열 'a' 추가
    }
    if (temp.length > 15) {
        temp = temp.slice(0, 15); // 6단계 15 글자만
    }
    if (temp[temp.length - 1] === '.') {
        temp = temp.slice(0, temp.length - 1);
    }
    while (temp.length < 3) {
        temp = temp.slice() + temp[temp.length - 1];
    }
    return temp;
}
solution('................b');

//! 정규식 체이닝을 이용한 풀이!!
// function solution(new_id) {
//     const answer = new_id
//         .toLowerCase() // 1
//         .replace(/[^\w-_.]/g, '') // 2
//         .replace(/\.+/g, '.') // 3
//         .replace(/^\.|\.$/g, '') // 4
//         .replace(/^$/, 'a') // 5
//         .slice(0, 15).replace(/\.$/, ''); // 6
//     const len = answer.length;
//     return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
// }
