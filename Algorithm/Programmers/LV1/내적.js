function solution(a, b) {
    var answer = 0;
    a.map((el, idx) => (answer += el * b[idx]));
    return answer;
}
