function solution(land) {
    var answer = 0;
    let max = 0;
    let idx = 0;
    land.sort((a, b) => a - b);
    //0123
    for (let i = 0; i < land.length; i++) {
        max = Math.max.apply(null, land[i]);
        for (let j = 3; j >= 0; j--) {
            if (land[i][j] === max && idx !== j) {
                answer += land[i][j];
                idx = j;
                if (i + 1 < land.length) {
                    land[i + 1].splice(j, 1);
                    continue;
                }
            }
        }
    }
    console.log(answer);
    return answer;
}
solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
]);
