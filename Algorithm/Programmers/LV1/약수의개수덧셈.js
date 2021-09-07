function solution(left, right) {
    let answer = 0;
    let arr = [];
    function divisor(integer) {
        let newArr = arr.slice();
        for (let i = 1; i <= integer; i++) {
            if (integer % i === 0) {
                newArr.push(i);
            }
        }
        return newArr.length;
    }
    for (let i = left; i <= right; i++) {
        if (divisor(i) % 2 === 0) {
            answer += i;
        } else {
            answer -= i;
            arr.length === 0;
        }
    }
    return answer; //24,27 25,26
}
debugger;
solution(24, 27);

// function solution(left, right, addArr = [], subArr = [], answer = 0) {
//     let leftDivisor = [];
//     let rightDivisor = [];
//     function divisor(integer, arr) {
//         for (let i = 1; i <= integer; i++) {
//             if (integer % i === 0) {
//                 arr.push(i);
//                 return;
//             }
//         }
//     }
//     if (left === right) {
//         leftDivisor.push(divisor(left, (leftDivisor = [])));
//         if (leftDivisor.length % 2 === 0) {
//             addArr.push(leftDivisor[leftDivisor.length - 1]);
//         } else if (leftDivisor.length % 2 === 1) {
//             subArr.push(leftDivisor[leftDivisor.length - 1]);
//         }
//         if (addArr.length !== 0) {
//             answer = addArr.reduce((a, b) => a + b);
//         }
//         if (subArr.length !== 0) {
//             answer = answer - subArr.reduce((a, b) => a + b);
//         }
//         console.log(answer);
//         return;
//     }
//     leftDivisor.push(divisor(left, (leftDivisor = [])));
//     rightDivisor.push(divisor(right, (rightDivisor = [])));
//     if (leftDivisor.length % 2 === 0 || rightDivisor.length % 2 === 0) {
//         if (leftDivisor.length % 2 === 0) {
//             addArr.push(leftDivisor[leftDivisor.length - 1]);
//             return;
//         }
//         if (rightDivisor.length % 2 === 0) {
//             addArr.push(rightDivisor[rightDivisor.length - 1]);
//             return;
//         }
//     }
//     if (leftDivisor.length % 2 === 1 || rightDivisor.length % 2 === 1) {
//         if (leftDivisor.length % 2 === 1) {
//             subArr.push(leftDivisor[leftDivisor.length - 1]);
//             return;
//         }
//         if (rightDivisor.length % 2 === 1) {
//             subArr.push(rightDivisor[rightDivisor.length - 1]);
//             return;
//         }
//     }
//     solution(left + 1, right - 1, addArr, subArr, answer);
//     return answer;
// }
