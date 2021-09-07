function solution(d, budget) {
    var answer = 0;
    let total = 0;
    d = d.sort();
    d.forEach((el) => {
        if (total + el <= budget) {
            total += el;
            answer++;
        }
    });
    return answer;
}

solution([1, 3, 2, 5, 4], 9);

// function solution(d, budget) {
//     var answer = 0;
//     let result = [];
//     let count = d.length - 1;
//     d = d.sort();
//     function recursive(arr, bucket, n) {
//         if (n === 0) {
//             result.push(bucket);
//             return;
//         }
//         for (let i = 0; i < arr.length; i++) {
//             const choice = arr[i];
//             const sliceArr = arr.slice(i + 1);

//             recursive(sliceArr, bucket.concat(choice), n - 1);
//         }
//     }
//     recursive(d, [], count);
//     if (result[0].reduce((a, b) => a + b) > budget && result[result.length - 1].reduce((a, b) => a + b) > budget) {
//         count--;
//         recursive(d, [], count);
//     } else if (result[0].reduce((a, b) => a + b) <= budget || result[result.length - 1].reduce((a, b) => a + b) <= budget) {
//         answer = result[0].length;
//     }
//     console.log(answer);
//     return answer;
// }
