function solution(n, lost, reserve) {
    let answer = n - lost.length;
    let count = 0;
    lost = lost.sort((a, b) => a - b);
    lost.forEach((el) => {
        // 빌려줄사람이 잃어버리면 ? 더이상 빌려줄수없으니깐 제외시킨다.
        if (reserve.includes(el)) {
            let temp = reserve.indexOf(el);
            reserve.splice(temp, 1);
            lost = lost.filter((ele) => ele !== el);
            count++;
        }
    });
    let newReserve = reserve.slice().sort((a, b) => a - b);
    newReserve.forEach((el) => {
        if (lost.includes(el + 1)) {
            let rm = reserve.indexOf(el);
            reserve.splice(rm, 1);
            lost = lost.filter((ele) => ele !== el + 1);
            count += 1;
        } else if (lost.includes(el - 1)) {
            let rm = reserve.indexOf(el);
            reserve.splice(rm, 1);
            lost = lost.filter((ele) => ele !== el - 1);
            count += 1;
        }
    });
    answer += count;
    console.log(answer);
    return answer;
}
debugger;

// solution(10, [3, 4], [4, 5]); //
solution(4, [1, 3], [2, 4]); // 4

//// solution(3, [1, 2], [2, 3]); // 2
//// solution(4, [3, 1, 2], [2, 4, 3]); // 3
//// solution(5, [1, 2, 3], [2, 3, 4]); // 4
//// solution(10, [5, 7, 9], [1, 2, 3, 4, 6, 8]); // 10
//// solution(4, [4, 2], [1, 3]); // 4
//// solution(2, [2, 1], [1, 2]); // 2
//// solution(12, [1, 2, 3, 4, 8, 9, 10, 11], [9, 10]); // 6
//// solution(4, [3, 1, 2], [2, 4, 3]); // 3
//// solution(7, [7, 4, 3, 5, 2, 1], [6, 5]); // 3
//// solution(5, [2, 3, 4], [3, 4, 5]); // 4
//// solution(10, [5, 4, 3, 2, 1], [3, 1, 2, 5, 4]); // 10
//// solution(10, [8, 10], [6, 7, 9]); // 10
//// solution(7, [2, 4, 5, 6, 7], [1, 3, 4, 5, 6, 7]); // 7
//// solution(5, [5, 3, 1], [2, 4]); // 4
