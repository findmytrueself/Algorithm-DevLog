function solution(scores) {
    var answer = '';
    for (let i = 0; i < scores.length; i++) {
        let max = Math.max.apply(null, scores[i]);
        let min = Math.min.apply(null, scores[i]);
        for (let j = 0; j < scores[i].length; j++) {
            if (scores[j][j] === max || scores[j][j] === min) {
                console.log('yes');
            }
        }
    }
    return answer;
}

solution([
    [100, 90, 98, 88, 65],
    [50, 45, 99, 85, 77],
    [47, 88, 95, 80, 67],
    [61, 57, 100, 80, 65],
    [24, 90, 94, 75, 65],
]);
