function solution(numbers, hand) {
    var answer = '';
    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ['*', 0, '#'],
    ];
    let left = [3, 0];
    let right = [3, 2];
    let goal = [];
    let distance = 0;
    numbers.map((el) => {
        if (el === 1 || el === 4 || el === 7) {
            answer += 'L';
            matrix.map((el2, idx) => {
                el2.map((ele, idx2) => {
                    if (el === ele) {
                        left = [idx, idx2];
                        return;
                    }
                });
            });
        }
        if (el === 3 || el === 6 || el === 9) {
            answer += 'R';
            matrix.map((el2, idx) => {
                el2.map((ele, idx2) => {
                    if (el === ele) {
                        right = [idx, idx2];
                        return;
                    }
                });
            });
        }
        if (el === 2 || el === 5 || el === 8 || el === 0) {
            matrix.map((el2, idx) => {
                el2.map((ele, idx2) => {
                    if (el === ele) {
                        goal = [idx, idx2];
                        return;
                    }
                });
            });
        }
    });
    return answer;
}
solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right');
