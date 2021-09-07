function solution(arr1, arr2) {
    const answer = Array.from(Array(arr1.length), () => Array(arr2[0].length).fill(0));
    console.log(answer);
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2[0].length; j++) {
            for (let k = 0; k < arr1[0].length; k++) {
                console.log(arr1[i][k], 'arr1');
                console.log(arr2[k][j], 'arr2');
                answer[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return answer;
}
// [arr1[0][0]*arr2[0][0] + arr[0][1]*arr2[0][1] , arr1[0][0]*arr2[1][0] + arr[0][1]*arr2[1][1] ]
solution(
    [
        [1, 4],
        [3, 2],
        [4, 1],
    ],
    [
        [3, 3],
        [3, 3],
    ]
);

// solution(
//     [
//         [2, 3, 2],
//         [4, 2, 4],
//         [3, 1, 4],
//     ],
//     [
//         [5, 4, 3], //arr2[0][0] arr2[1][0] arr2[2][0]
//         [2, 4, 1], //arr2[0][1] arr2[1][1] arr2[2][1]
//         [3, 1, 1], //arr2[0][2] arr2[1][2] arr2[2][2]
//     ]
// );

// arr[j][i]
