function solution(N, stages) {
    var answer = [];
    let tempArr = [];
    let count = 0;
    let people = stages.length;
    for (let i = 1; i <= N; i++) {
        for (let j = 0; j < stages.length; j++) {
            if (i === stages[j]) {
                count++;
            }
        }
        if (count !== 0 && people !== 0) {
            tempArr.push(+(count / people));
            people = people - count;
            count = 0;
        } else {
            tempArr.push(0);
        }
    }
    let sortArr = tempArr.slice().sort((a, b) => b - a);
    sortArr.forEach((el, idx1) => {
        tempArr.forEach((ele, idx2) => {
            if (el === ele && ele !== -1) {
                answer.push(idx2 + 1);
                tempArr[idx2] = -1;
            }
        });
    });
    console.log(answer);
    return answer;
}
debugger;
solution(5, [1, 2, 2, 1, 3]);
// solution(5, [2, 1, 2, 6, 2, 4, 3, 3]); // [3,4,2,1,5]
// solution(4, [4, 4, 4, 4, 4]); // [4,1,2,3]

// function solution(N, stages) {
//     var answer = [];
//     let result = [];
//     stages = stages.sort((a, b) => a - b); // 정렬
//     let obj = {};
//     stages.forEach((el) => {
//         obj[el] = (obj[el] || 0) + 1;
//     }); // 중복횟수 체크
//     for (let i = 1; i <= N; i++) {
//         let failRate = 0;
//         if (stages.includes(i)) {
//             let howMany = obj[i];
//             failRate = howMany / stages.length;
//             stages = stages.filter((el) => el !== i);
//         } else {
//             failRate = 0;
//         }
//         result.push(failRate); // 실패율 기록
//     }
//     // result [ 0.125, 0.42857142857142855, 0.5, 0.5, 0 ]
//     let sortedResult = result.slice().sort((a, b) => b - a); // 내림차순
//     console.log(sortedResult);
//     let obj2 = {};
//     sortedResult.forEach((el) => {
//         obj2[el] = (obj2[el] || 0) + 1;
//     }); // 중복횟수 체크
//     let count = Math.max.apply(null, Object.values(obj2));
//     // sortedResult [ 0.5, 0.5, 0.42857142857142855, 0.125, 0 ]
//     // result의 인덱스 필요.
//     // sortedAnswer의 내림차순 필요
//     // Array.includes 로 result 인덱스 확인

//     for (let i = 0; i < sortedResult.length; i++) {
//         for (let j = 0; j < result.length; j++) {
//             if (sortedResult[i] === result[j]) {
//                 console.log(i + 1);
//             }
//         }
//     }
//     return answer;
// }
