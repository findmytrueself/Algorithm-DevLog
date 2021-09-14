function solution(numbers) {
    var answer = -1;
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers.sort((a, b) => a - b);
    console.log(numbers);
    numbers = numbers.map((el) => {
        arr.map((ele) => {
            if (el === ele) {
                console.log(el);
            }
        });
    });
    console.log(numbers);
    return answer;
}
debugger;
solution([1, 2, 3, 4, 6, 7, 8, 0]);
