function solution(n, arr1, arr2) {
    let answer = [];
    const matrix = Array.from(Array(n), () => new Array(n).fill(' ')); // 2차원배열 만들기, 나중을 생각해서 공백으로 추가
    let temp = ''; // 2진수로 변환 할 문자열
    arr1.map((el, idx1) => {
        temp = el.toString(2);
        if (temp.length < n) {
            // 앞자리 '0'으로 채워 줄 조건문
            let addZero = n - temp.length; // 몇개만큼 채울지?
            temp = '0'.repeat(addZero) + el.toString(2); // '0' 채우기
        }
        temp.split('').map((ele, idx2) => {
            if (ele === '1') {
                matrix[idx1][idx2] = '#'; // 2차원배열 '#'로 바꾸기
            }
        });
    });
    arr2.map((el, idx1) => {
        // 2번 arr도 같은작업 반복
        temp = el.toString(2);
        if (temp.length < n) {
            let addZero = n - temp.length;
            if (addZero > 0) {
                temp = '0'.repeat(addZero) + el.toString(2);
            }
        }
        temp.split('').map((ele, idx2) => {
            if (ele === '1') {
                matrix[idx1][idx2] = '#';
            }
        });
    });
    matrix.map((el) => answer.push(el.join(''))); // 2차원배열을 정답처럼 합치기
    return answer;
}
// solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]);
