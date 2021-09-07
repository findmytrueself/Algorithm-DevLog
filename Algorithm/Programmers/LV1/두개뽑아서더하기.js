function solution(numbers) {
    let answer = [];
    for (let number1 = 0; number1 < numbers.length - 1; number1++) {
        for (let number2 = number1 + 1; number2 < numbers.length; number2++) {
            const sum = numbers[number1] + numbers[number2];
            answer.push(sum);
        }
    }
    answer.sort((a, b) => a - b);
    answer = answer.filter((el, idx) => answer.indexOf(el) === idx);
    return answer;
}
solution([2, 1, 3, 4, 1]);
