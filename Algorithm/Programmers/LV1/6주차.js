function solution(weights, head2head) {
    var answer = [];
    // 1. 우선순위 : 승률 > 자기보다 무거운복서 이긴횟수
    // 2. 승률이 같으면 자기보다 무거운복서 이긴횟수 탐색해서 자기보다 무거운복서 count가 높으면 우선순위 정한다.
    // 3. 승률이 같고 자기보다 무거운복서 이긴횟수가 같으면, 무게가 높은사람을 우선순위로 한다.
    // 4. 승률이 같고 자기보다 무거운복서 이긴횟수가 같고, 무게가 같으면, ? 앞번호가 우선순위가 되도록한다.
    // 문제의 조건은 주어 졌고.. 먼저 승률을 구하자.
    let count = 0;
    let countArr = Array(weights.length).fill(0)
    let temp = [];
    head2head.map((el, idx) => {
        let result = el.match(/W/g);
        if(weights.length !== null && weights.length > 0){
            temp.push(result.length / (weights.length - 1));
        }
    });
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] === temp[i + 1]) {
            for (let j = 0; j < head2head.length; j++) {
                if (head2head[i][j]==="W" && weights[i] < weights[j]) {
                    count++;
                }
            }
        countArr[i] = count
        count = 0
        }
    }
    console.log(temp);
    return answer;
}
debugger;
solution([50, 82, 75, 120], ['NLWL', 'WNLL', 'LWNW', 'WWLN']);
// solution([145,92,86],["NLW","WNL","LWN"])
// for(let i=0; i<weights.length; i++){
//     for(let j=0; j<head2head.length; j++){
//         if(head2head[i][j]==="W" && weights[i]<weights[j]){
//             count++;
//         }
//     }
// }


//temp.push(Math.floor((result.length / (weights.length - 1)) * 100) / 100);

// let sortTemp = temp.slice().sort((a, b) => b - a);
// sortTemp.map((el, idx) => {
//     answer.push(temp.indexOf(el) + 1);
// });
// console.log(answer);