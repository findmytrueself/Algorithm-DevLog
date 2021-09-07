function solution(array, commands) {
    var answer = [];
    commands.forEach((el) => {
        let newArr = array.slice(el[0] - 1, el[1]);
        newArr.sort((a, b) => a - b);
        // console.log(newArr, 'newArr');
        answer.push(newArr[el[2] - 1]);
    });
    return answer;
}

solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
        [2, 5, 3],
        [4, 4, 1],
        [1, 7, 3],
    ]
);
