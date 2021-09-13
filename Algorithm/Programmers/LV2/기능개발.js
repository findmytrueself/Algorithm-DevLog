function solution(progresses, speeds) {
    var answer = [];
    let workday = [];
    let temp = [];
    let count = 0;
    let shiftCount = 0;
    for (let i = 0; i < progresses.length; i++) {
        workday.push(Math.ceil((100 - progresses[i]) / speeds[i])); // 1. 일하는 날짜 계산 후 배열에 넣기.
    }

    function recursive(arr) {
        if (arr.length === 0) {
            //재귀함수 탈출 조건
            if (count > 0) {
                // count에 쌓여있는 값을 마지막으로 처리 해준다.
                answer.push(count);
            }
            return;
        }

        temp.push(arr.shift()); // 3. 임의의 배열에 workday 첫번째 인원을 넣고 (비교를 위해서)
        count++; // 첫번째인원 자신을 count ++
        arr.forEach((el) => {
            // 4. 비교를 위해 나머지 사람들을 맵핑
            if (temp[0] >= el) {
                // 조건 1. 나머지사람 요소가 작을때,
                count++; // count를 증가 시키고,
                shiftCount++; // 기존 workday배열에서 없애줘야하기때문에 shiftcount도 증가 시켜준다.
            }
            if (temp[0] < el) {
                // 조건2, 나머지사람 요소가 클때
                answer.push(count); // 기존에 쌓아둔 count를 answer에 push 한다.
                for (let i = 0; i < shiftCount; i++) {
                    // push 한만큼 workday 배열에서 요소를 제거한다.
                    arr.shift();
                }
                shiftCount = 0; // shiftCount 초기화
                count = 0; // count 초기화
                temp.pop(); // temp 초기화
            }
        });
        for (let i = 0; i < shiftCount; i++) {
            // 조건3, 한사람이 끝날때까지 나머지 사람들의 일이 모두 끝나버릴경우
            arr.shift(); // 재귀함수 종료하기 전에 shiftCount를 빼줘야하는데, 재귀함수 호출 할때 제거해줬다.
        } // 재귀함수 호출 하고 나서 제거 해줘도 된다.
        recursive(arr);
    }
    recursive(workday); // 2. 계산된 일하는날짜 배열을 재귀함수에 넣기
    return answer;
}
debugger;
// solution([96, 99, 98, 97],[1,1,1,1]) //! 문제있었던 부분
// solution([95, 95, 95, 95], [4, 3, 2, 1]); //! [2,1,1] 문제있었던 부분, 같은값까지 count를 올려줘야했었다.
// solution(  [98, 99, 97, 96], [1, 1, 1, 1]);
// solution([95, 90, 99, 99, 80, 99],[1, 1, 1, 1, 1, 1])
// solution([0,0,0,0],[100,50,34,25])
// solution([5, 5, 5],[21, 25, 20])
// solution( [40, 93, 30, 55, 60, 65], [60, 1, 30, 5 , 10, 7]) 문제없음
// solution([93, 30, 55, 60, 40, 65],[1, 30, 5 , 10, 60, 7]) 문제없음
