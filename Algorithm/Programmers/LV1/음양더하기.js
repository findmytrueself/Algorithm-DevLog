function solution(absolutes, signs) {
    var answer = 0;
    absolutes.map((el, idx) => (signs[idx] ? (answer += +el) : (answer += -el)));
    return answer;
}
solution([4, 7, 12], [true, false, true]);
