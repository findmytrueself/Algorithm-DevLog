function solution(n, answer = "") {
  let divide = parseInt(n / 3); // 3으로 나눈 몫
  let reminder = n % 3; // 3으로 나눈 나머지
  if (reminder === 1) {
    // 나머지가 1일때
    answer += "1"; // 정답에 1더함
  } else if (reminder === 2) {
    // 나머지가 2일때
    answer += "2"; // 정답에 2더함
  } else if (reminder === 0) {
    // 나머지가 0일때
    divide--; // divide를 하나 빼준다. (규칙상 reminder가 0 될때, divide가 1플러스됨)
    answer += "4"; // 정답에 4 더함
  }
  if (divide === 0) {
    // 재귀함수 탈출 조건
    return answer.split("").reverse().join(""); // 문자열을 뒤집어준다.
  }
  return solution(divide, answer); // 재귀 호출
}
solution(1); // "1" d:0 r:1
solution(2); // "2" d:0 r:2
solution(3); // "4" d:1 r:0 ...........3
solution(4); // "11" d:1 r:1
solution(5); // "12" d:1 r:2
solution(6); // "14" d:2 r:0
solution(7); // "21" d:2 r:1
solution(8); // "22" d:2 r:2
solution(9); // "24" d:3 r:0
solution(10); // "41" d:3 r:1
solution(11); // "42" d:3 r:2
solution(12); // "44" d:4 r:0 .......... 9
solution(13); // "111"
solution(14); // "112"
solution(15); // "114"
solution(16); // "121"
solution(17); // "122"
solution(18); // "124"
solution(19); // "141"
solution(20); // "142"
solution(21); // "144"
solution(22); // "211"

solution(39); // 444
// ... 27

solution(120); // 4444
// ... 81
solution(363); // 44444
// ... 243

solution(513); // "124224"

solution(1092); // 444444
// ... 729
