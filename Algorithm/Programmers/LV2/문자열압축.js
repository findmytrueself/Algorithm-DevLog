function solution(s) {
    var answer = 0;
    
    return answer;
}
solution('aabbaccc'); // 7 -> aabba3c
solution('ababcdcdababcdcd'); // 9 -> 2ababcdcd
solution('abcabcdede'); // 8 -> 2abcdede
//!
solution('abcabcabcabcdededededede');
// 2개로 짜르면 -> 15 -> abcabcabcabc6de
// 3개로 짜르면 -> 16 -> 4abcdededededede
// 4개로 짜르면 -> 17 -> abcabcabcabc3dede
// 6개로 짜르면 -> 14 -> 2abcabc2dedede
// [15,16,17,14]의 최솟값 리턴 14

solution('xababcdcdababcdcd');
