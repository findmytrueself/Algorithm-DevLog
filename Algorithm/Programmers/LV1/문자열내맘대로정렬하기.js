function solution(strings, n) {
    let answer = [];
    answer = strings.sort((a, b) => {
        if (a[n] > b[n]) {
            return 1;
        }
        if (a[n] < b[n]) {
            return -1;
        }
        if (a[n] === b[n]) {
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1;
            }
            return 0;
        }
    });
    console.log(answer);
    return answer;
}
solution(['abzcd', 'cdzab', 'abzfg', 'abzaa', 'abzbb', 'bbzaa'], 2);
solution(['aooc', 'coob', 'cooa'], 1);
