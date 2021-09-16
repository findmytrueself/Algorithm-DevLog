function solution(s) {
    var answer = [];
    let obj = {};
    s = s.slice(1, s.length - 1); // 첫번째 브라켓 제거 ({숫자...},{숫자...} 형태로 만듬)

    while (s.length !== 0) {
        // 자른 이후 반복 s길이가 0될때 종료
        let openBracketIdx = s.indexOf('{'); // 브라켓 시작위치
        let closeBracKetIdx = s.indexOf('}'); // 브라켓 종료위치
        let numbers = s.slice(openBracketIdx + 1, closeBracKetIdx); // 1.','기준으로 배열만들기 위한 작업
        let cutNumbers = s.slice(openBracketIdx, closeBracKetIdx + 1); // 2.사용한 {} 집합을 없애기 위한 작업
        let temp = numbers.split(','); // 1. 배열 만들어서
        temp.map((el) => {
            // 1. obj에 배열의 갯수 세어주기 위해 맵핑.
            obj[el] = obj[el] + '1'; //! 앞에 undefined는 어케 하면 안나올지 더 생각해봐야할듯.
        }); //? key는 무조건 문자열인데.. 어떻게하면 숫자 형태로 더해주지?
        s = s.substring(cutNumbers.length + 1); // 2. 사용완료된 {} 자르기
    }
    for (let num in obj) {
        // undefined찍힌 값을 제거 하는 작업
        obj[num] = obj[num]
            .slice(9)
            .split('')
            .map((el) => +el) // 이 작업이 없으면 더해주지않으면 문자열 그대로 찍히기때문에 숫자로 다 바꿔준다.
            .reduce((a, b) => +a + +b); // 1111식으로 되어있는 갯수 숫자형태로 더해주기 작업
    }
    let a = Object.values(obj); // 내림차순 정렬.
    a.sort((a, b) => b - a);

    a.map((el) => {
        Object.keys(obj).find((key) => {
            //! 알고있는 value를 가지고 key를 찾는 작업. 템플릿처럼 외우기
            if (obj[key] === el) {
                answer.push(parseInt(key));
            }
        });
    });
    console.log(answer);
    return answer;
}
