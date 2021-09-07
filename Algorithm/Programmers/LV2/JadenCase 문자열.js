function solution(s) {
    var answer = '';
    let upper = '';
    let lower = '';
    let arr = s.split(' ');
    arr.forEach((el) => {
        upper = el.slice(0, 1).toUpperCase();
        lower = el.slice(1).toLowerCase();
        answer += upper + lower + ' ';
    });
    answer = answer.slice(0, answer.length - 1);
    return answer;
}
solution(' A  sdf fFt ');
