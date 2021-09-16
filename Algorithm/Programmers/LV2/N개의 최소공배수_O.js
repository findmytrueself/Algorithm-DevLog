const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);

function solution(arr) {
    var answer = 0;
    arr.reduce((a, b) => lcm(a, b));

    return answer;
}

solution([2, 6, 8, 14]);
