function solution(nums) {
    var answer = 0;
    let getPockNum = parseInt(nums.length / 2);
    let filtered = nums.filter((el, idx) => {
        return nums.indexOf(el) === idx;
    });
    if (getPockNum < filtered.length) {
        answer = getPockNum;
    } else if (getPockNum >= filtered.length) {
        answer = filtered.length;
    }
    console.log(answer);
    return answer;
}

solution([3, 3, 3, 2, 2, 2]);
