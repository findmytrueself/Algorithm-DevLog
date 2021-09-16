function solution(brown, yellow) {
    let answer = [];
    let sum = brown + yellow;
    let arr = [];
    if (Number.isInteger(Math.sqrt(sum))) {
        answer = [Math.sqrt(sum), Math.sqrt(sum)];
    } else {
        const divisors = (sum) => {
            for (let i = 1; i <= sum; i++) {
                if (sum % i === 0) {
                    arr.push(i);
                }
            }
        };
        divisors(sum);
        arr = arr.slice(arr.length / 2);
        //(x-2)*(y-2) = yellow;
        let idx = 0;
        let x = arr[idx];
        let y = sum / arr[idx];
        while (idx <= arr.length) {
            if ((x - 2) * (y - 2) !== yellow) {
                idx++;
            }
        }
        answer = [x, y];
    }
    console.log(answer);
    return answer;
}
debugger;
solution(18, 6); // [12,6]
// solution(10, 2); // [4,3]
// solution(8, 1); // [3,3]
// solution(24, 24); //[8,6]
// solution(14, 4); // [6,3]
