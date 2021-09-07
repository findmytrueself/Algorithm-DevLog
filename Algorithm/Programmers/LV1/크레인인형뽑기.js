function solution(board, moves) {
    var answer = 0;
    let stack = [];
    for (let i = 0; i < moves.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[j][moves[i] - 1] > 0) {
                // 2차원배열 열의 0보다 큰값 차례로 확인, 2차원배열의 인덱스니깐 moves[i]-1
                stack.push(board[j][moves[i] - 1]); // stack배열에 0보다 큰값 차례로 넣기
                board[j][moves[i] - 1] = 0; // 넣은 값을 0으로 바꾸기
                if (stack[stack.length - 1] === stack[stack.length - 2]) {
                    stack.pop(); // stack에 쌓인 값 중 동시에 같은값이 나오면 제거하고
                    stack.pop(); // 2번 제거(같은값이 두개씩 쌍이니간 두개 제거)
                    answer += 2; // 제거한 만큼 answer에 추가
                }
                break; // 열에 값이 변화가 되면 더이상 바뀔게 없으므로 break로 for문 종료
            }
        }
    }
    return answer;
}
solution(
    [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4] // [4,3,1,1,3,2,4], [3,1,1,3], answer = 4
);

// moves.forEach(el => {
//     if(el===1){

//     }
// })
