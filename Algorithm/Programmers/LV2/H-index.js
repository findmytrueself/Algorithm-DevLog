function solution(citations) {
    let answer = 0;
    let h = 0;
    citations.sort((a, b) => b - a);
    for (let i = 0; i < citations.length; i++) {
        if (i < citations[i]) {
            h = i + 1;
        } else if (i > citations[i]) {
            break;
        }
    }
    return answer;
}
solution([3, 0, 6, 1, 5]); // 3
solution([22, 42]); // 2
solution([3, 1, 1, 1, 4]); // 2
solution([0, 0, 0, 0, 0, 0]); // 0
solution([0, 0, 0, 1]); // 1
solution([9, 9, 9, 12]); // 4
solution([1, 1, 5, 7, 6]); // 3
solution([6, 5, 4, 2, 0]); // 3
