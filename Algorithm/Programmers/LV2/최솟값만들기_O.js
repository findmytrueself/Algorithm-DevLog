function solution(A, B) {
    var answer = 0;
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    return A.reduce((total, a, i) => total + a * B[i], 0);
}

// function solution(A, B, answer=0) {
//     let arr = []
//     let aMax = Math.max.apply(null,A)
//     let bMin = Math.min.apply(null,B)
//     answer += aMax * bMin
//     let aMaxIdx = A.indexOf(aMax);
//     let bMinIdx = B.indexOf(bMin);
//     A = A.filter((el,idx)=> idx!==aMaxIdx? el:null)
//     B = B.filter((el,idx)=> idx!==bMinIdx? el:null)
//     if(A.length===0 || B.length===0){
//         return answer
//     }
//     return solution(A,B,answer)
// }

solution([1, 2], [3, 4]);
