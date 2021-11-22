function solution(s) {
    return answer;
}
solution('aabbaccc'); // 7 -> aabba3c
// solution('ababcdcdababcdcd'); // 9 -> 2ababcdcd
// solution('abcabcdede'); // 8 -> 2abcdede
//!
// solution('abcabcabcabcdededededede');
// 2개로 짜르면 -> 15 -> abcabcabcabc6de
// 3개로 짜르면 -> 16 -> 4abcdededededede
// 4개로 짜르면 -> 17 -> abcabcabcabc3dede
// 6개로 짜르면 -> 14 -> 2abcabc2dedede
// ? 4abc6de
// [15,16,17,14]의 최솟값 리턴 14

// solution('xababcdcdababcdcd'); -> 압축되지않음 -> 17
// solution("acacacbacacac") // -> 3acba2cac -> 9
// solution("acacacacacacbacacacacacac") // -> 6acba5cac -> 9
// solution("xxxxxxxxxxyyy"); // -> "10x3y" -> 5
// solution("a") // -> "a" -> 1
// solution("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx") // -> "100x" -> 4
// solution("zxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx") //  -> "z100x" -> 5
// solution("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxz") // -> "100xz" -> 5
