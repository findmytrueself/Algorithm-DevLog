function solution(s, n) {
    var answer = '';
    let temp = [];
    for (let i = 0; i < s.length; i++) {
        let num = s.charCodeAt(i) + n;
        if (num > 122 && s.charCodeAt(i) >= 97) {
            n = 26 - n;
            num = 96 + n;
        }
        if (num > 90 && s.charCodeAt(i) >= 65 && s.charCodeAt(i) < 91) {
            n = 26 - n;
            num = 64 + n;
        }
        temp.push(num);
    }
    temp.map((el) => (answer += String.fromCharCode(el)));
    answer = answer.replace(/\$/g, ' ');
    console.log(answer);
    return answer;
}
solution('bC', 25); // "ZzYy"
