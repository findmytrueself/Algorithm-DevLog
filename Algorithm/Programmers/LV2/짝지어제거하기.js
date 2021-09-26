function solution(s) {}
// solution("abccba"); // 1
// solution("abcccba"); // 0
// solution("abccccbaaa"); // 1
// solution("abccaabaa"); // 0
// solution("a"); //
// solution("abcdefggfedcba");
// solution("abbcdaadca ");

// function solution(s, answer = 0) {
//     if (s.length % 2 !== 0) {
//       return 0;
//     }
//     else if (s.length === 0) {
//       answer = 1;
//       return answer;
//     }
//     let temp = s.slice().split("");
//     for (let i = 0; i < s.length; i++) {
//       if (s[i] === s[i + 1]) {
//         temp.splice(i, 2);
//         temp = temp.join("");
//         break;
//       }
//       else if (i === s.length - 1) {
//         console.log(answer);
//         return answer;
//       }
//     }
//     return solution(temp);
//   }
