function test3(board, operation) {
    let x = 0;
    let y = 0;
    let score = 0;
    let yMax = board.length;
    let xMax = board[0].length;

    for (let i = 0; i < operation.length; i++) {
        if (operation[i] === 'R') {
            x++;
            if (x > xMax) {
                x--;
                continue;
            }
            score += board[y][x];
            board[y][x] = 0;
        } else if (operation[i] === 'L') {
            x--;
            if (x < 0) {
                x++;
                continue;
            }
            score += board[y][x];
            board[y][x] = 0;
        } else if (operation[i] === 'D') {
            y++;
            if (y > yMax) {
                y--;
                continue;
            }
            score += board[y][x];
            board[y][x] = 0;
        } else if (operation[i] === 'U') {
            y--;
            if (y < 0) {
                y++;
                continue;
            }
            score += board[y][x];
            board[y][x] = 0;
        }
    }
    console.log(score);
    return score;
}

//  const board2 = [
//     [567, 6734, 132],
//     [789, 243, 6],
//     [89, 33333, 0]
//   ]
//     test3(board2, 'UUUDD')

const board3 = [
    [4345, 112, 11, 756],
    [1, 1, 1, 0],
    [456, 238, 77, 7],
    [0, 0, 0, 0],
];
test3(board3, 'RRDLLDDLLRRDDDLLRUUUU');
