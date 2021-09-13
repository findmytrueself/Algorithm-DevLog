function solution(bridge_length, weight, truck_weights) {
    let count = 0;
    let compeleteArr = [];
    let passArr = [];

    passArr.push(truck_weights.shift());
    count++;
    if (passArr[0] + truck_weights[0] < weight) {
        count++;
        passArr.push(truck_weights.shift());
        count++;
    } else if (passArr[0] + truck_weights[0] > weight) {
        count++;
        compeleteArr.push(passArr.shift());
        count++;
    } else if (truck_weights.length === 0) {
    }
    return count;
}
debugger;
solution(2, 10, [7, 4, 5, 6]);
