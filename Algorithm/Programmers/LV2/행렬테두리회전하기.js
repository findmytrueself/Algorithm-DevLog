function solution(rows, columns, queries) {
    var answer = [];
    let temp = 0;
    const matrix = Array.from(Array(rows), () => Array(columns).fill(0));
    matrix.map((el, i) => {
        el.map((ele, j) => {
            temp++;
            matrix[i][j] = temp;
        });
    });
    queries.map((el) => {
        const [x1, y1] = [el[0], el[1]];
        const [x2, y2] = [el[2], el[3]];
        let swap = matrix[x1 - 1][y1 - 1];
        let a = x2 - x1;
        let b = y2 - y1;
        console.log(b);
    });
    return answer;
}
solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
]);
