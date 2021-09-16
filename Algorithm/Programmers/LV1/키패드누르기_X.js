// function solution(numbers, hand) {
//     var answer = '';
//     let matrix = [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9],
//         ['*', 0, '#'],
//     ];
//     let left = [3, 0];
//     let right = [3, 2];
//     let goal = [];
//     let distanceL = 0;
//     let distanceR = 0;
//     numbers.map((el) => {
//         if (el === 1 || el === 4 || el === 7) {
//             answer += 'L';
//             matrix.map((el2, idx) => {
//                 el2.map((ele, idx2) => {
//                     if (el === ele) {
//                         left = [idx, idx2];
//                     }
//                 });
//             });
//         }
//         if (el === 3 || el === 6 || el === 9) {
//             answer += 'R';
//             matrix.map((el2, idx) => {
//                 el2.map((ele, idx2) => {
//                     if (el === ele) {
//                         right = [idx, idx2];
//                     }
//                 });
//             });
//         }
//         if (el === 2 || el === 5 || el === 8 || el === 0) {
//             matrix.map((el2, idx) => {
//                 el2.map((ele, idx2) => {
//                     if (el === ele) {
//                         goal = [idx, idx2];
//                     }
//                 });
//             });
//          if(hand === "left"){
//     if(left[0]>goal[0]){
//             left = [left[0]-1,left[1]]
//             distanceL++
//            if(matrix[left[0],left[1]] === matrix[goal[0],goal[1]]){
//             if(distanceL>distanceR){
//                 answer+='L'
//                 left = [goal[0],goal[1]]
//                 distanceL = 0
//             } else if (distanceL<distanceR){
//                 answer+="R"
//                 right = [goal[0],goal[1]]
//                 distanceR = 0
//             }
//         }
//         } else if(left[0]<goal[0]){
//             left = [left[0]+1, left[1]]
//             distanceL++
//             if(matrix[left[0],left[1]] === matrix[goal[0],goal[1]]){
//             if(distanceL>distanceR){
//                 answer+='L'
//                 left = [goal[0],goal[1]]
//                 distanceL = 0
//             } else if (distanceL<distanceR){
//                 answer+="R"
//                 right = [goal[0],goal[1]]
//                 distanceR = 0
//             }
//         }
//         } else if(left[1]>goal[1]){
//             left = [left[0],left[1]-1]
//             distanceL++
//             if(matrix[left[0],left[1]] === matrix[goal[0],goal[1]]){
//             if(distanceL>distanceR){
//                 answer+='L'
//                 left = [goal[0],goal[1]]
//                 distanceL = 0
//             } else if (distanceL<distanceR){
//                 answer+="R"
//                 right = [goal[0],goal[1]]
//                 distanceR = 0
//             }
//         }
//         } else if(left[1]<goal[1]){
//             left = [left[0],left[1]+1]
//             distanceL++
//             if(matrix[left[0],left[1]] === matrix[goal[0],goal[1]]){
//             if(distanceL>distanceR){
//                 answer+='L'
//                 left = [goal[0],goal[1]]
//                 distanceL = 0
//             } else if (distanceL<distanceR){
//                 answer+="R"
//                 right = [goal[0],goal[1]]
//                 distanceR = 0
//             }
//         }
//         }
// } else if(hand !=="left"){
//      if(right[0]>goal[0]){
//             right = [right[0]-1,right[1]]
//             distanceR++
//             if(matrix[right[0],right[1]] === matrix[goal[0],goal[1]]){
//             if(distanceL>distanceR){
//                 answer+='L'
//                 left = [goal[0],goal[1]]
//                 distanceL = 0
//             } else if (distanceL<distanceR){
//                 answer+="R"
//                 right = [goal[0],goal[1]]
//                 distanceR = 0
//             }
//         }
//         } else if(right[0]<goal[0]){
//             right = [right[0]+1, right[1]]
//             distanceR++
//             if(matrix[right[0],right[1]] === matrix[goal[0],goal[1]]){
//             if(distanceL>distanceR){
//                 answer+='L'
//                 left = [goal[0],goal[1]]
//                 distanceL = 0
//             } else if (distanceL<distanceR){
//                 answer+="R"
//                 right = [goal[0],goal[1]]
//                 distanceR = 0
//             }
//         }
//         } else if(right[1]>goal[1]){
//             right = [right[0],right[1]-1]
//             distanceR++
//             if(matrix[right[0],right[1]] === matrix[goal[0],goal[1]]){
//             if(distanceL>distanceR){
//                 answer+='L'
//                 left = [goal[0],goal[1]]
//                 distanceL = 0
//             } else if (distanceL<distanceR){
//                 answer+="R"
//                 right = [goal[0],goal[1]]
//                 distanceR = 0
//             }
//         }
//         } else if(right[1]<goal[1]){
//             right = [right[0],right[1]+1]
//             distanceR++
//             if(matrix[right[0],right[1]] === matrix[goal[0],goal[1]]){
//             if(distanceL>distanceR){
//                 answer+='L'
//                 left = [goal[0],goal[1]]
//                 distanceL = 0
//             } else if (distanceL<distanceR){
//                 answer+="R"
//                 right = [goal[0],goal[1]]
//                 distanceR = 0
//             }
//         }
//         }
// }
//     if(hand==="right"){
//     if(right[0]>goal[0]){
//             right = [right[0]-1,right[1]]
//             distanceR++
//             if(matrix[right[0],right[1]] === matrix[goal[0],goal[1]]){
//             if(distanceL>distanceR){
//                 answer+='L'
//                 left = [goal[0],goal[1]]
//                 distanceL = 0
//             } else if (distanceL<distanceR){
//                 answer+="R"
//                 right = [goal[0],goal[1]]
//                 distanceR = 0
//             }
//         }
//         } else if(right[0]<goal[0]){
//             right = [right[0]+1, right[1]]
//             distanceR++
//             if(matrix[right[0],right[1]] === matrix[goal[0],goal[1]]){
//             if(distanceL>distanceR){
//                 answer+='L'
//                 left = [goal[0],goal[1]]
//                 distanceL = 0
//             } else if (distanceL<distanceR){
//                 answer+="R"
//                 right = [goal[0],goal[1]]
//                 distanceR = 0
//             }
//         }
//         } else if(right[1]>goal[1]){
//             right = [right[0],right[1]-1]
//             distanceR++
//             if(matrix[right[0],right[1]] === matrix[goal[0],goal[1]]){
//             if(distanceL>distanceR){
//                 answer+='L'
//                 left = [goal[0],goal[1]]
//                 distanceL = 0
//             } else if (distanceL<distanceR){
//                 answer+="R"
//                 right = [goal[0],goal[1]]
//                 distanceR = 0
//             }
//         }
//         } else if(right[1]<goal[1]){
//             right = [right[0],right[1]+1]
//             distanceR++
//             if(matrix[right[0],right[1]] === matrix[goal[0],goal[1]]){
//             if(distanceL>distanceR){
//                 answer+='L'
//                 left = [goal[0],goal[1]]
//                 distanceL = 0
//             } else if (distanceL<distanceR){
//                 answer+="R"
//                 right = [goal[0],goal[1]]
//                 distanceR = 0
//             }
//         }
//         }
// } else if (hand !=="right"){
//     if(left[0]>goal[0]){
//             left = [left[0]-1,left[1]]
//             distanceL++
//            if(matrix[left[0],left[1]] === matrix[goal[0],goal[1]]){
//             if(distanceL>distanceR){
//                 answer+='L'
//                 left = [goal[0],goal[1]]
//                 distanceL = 0
//             } else if (distanceL<distanceR){
//                 answer+="R"
//                 right = [goal[0],goal[1]]
//                 distanceR = 0
//             }
//         }
//         } else if(left[0]<goal[0]){
//             left = [left[0]+1, left[1]]
//             distanceL++
//             if(matrix[left[0],left[1]] === matrix[goal[0],goal[1]]){
//             if(distanceL>distanceR){
//                 answer+='L'
//                 left = [goal[0],goal[1]]
//                 distanceL = 0
//             } else if (distanceL<distanceR){
//                 answer+="R"
//                 right = [goal[0],goal[1]]
//                 distanceR = 0
//             }
//         }
//         } else if(left[1]>goal[1]){
//             left = [left[0],left[1]-1]
//             distanceL++
//             if(matrix[left[0],left[1]] === matrix[goal[0],goal[1]]){
//             if(distanceL>distanceR){
//                 answer+='L'
//                 left = [goal[0],goal[1]]
//                 distanceL = 0
//             } else if (distanceL<distanceR){
//                 answer+="R"
//                 right = [goal[0],goal[1]]
//                 distanceR = 0
//             }
//         }
//         } else if(left[1]<goal[1]){
//             left = [left[0],left[1]+1]
//             distanceL++
//             if(matrix[left[0],left[1]] === matrix[goal[0],goal[1]]){
//             if(distanceL>distanceR){
//                 answer+='L'
//                 left = [goal[0],goal[1]]
//                 distanceL = 0
//             } else if (distanceL<distanceR){
//                 answer+="R"
//                 right = [goal[0],goal[1]]
//                 distanceR = 0
//             }
//         }
//         }
// }

//         }
//     });
//     console.log(answer)
//     return answer;
// }
// debugger
// solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'); // 'LRLRRRLLRRR'
