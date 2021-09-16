// function solution(n) {
//   // TODO: 여기에 코드를 작성합니다.
//   let a = (1 + Math.sqrt(5))/2
//   let b = (1 - Math.sqrt(5))/2

//   return Math.round(1/(a-b) * (Math.pow(a,n)-Math.pow(b,n)))
// }



function solution(n, memo = []) {
    // 이미 해결한 하위 문제인지 찾아본다
if(memo[n] !== undefined) return memo[n];
if(n <= 2) return 1;
    // 없다면 재귀로 결괏값을 도출하여 res 에 할당
let res = solution(n-1, memo) + solution(n-2, memo);
    // 추후 동일한 문제를 만났을 때 사용하기 위해 리턴 전에 memo 에 저장
memo[n] = res;
return res;
}