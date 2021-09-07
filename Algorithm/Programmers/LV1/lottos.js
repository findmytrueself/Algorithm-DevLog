function solution(lottos, win_nums) {
  let answer = [];
  let zeroNum = [];
  let temp = [];
  let result = [];
  let count = 0;
  lottos.forEach((el) => (el === 0 ? zeroNum.push(el) : temp.push(el)));
  for (let i = 0; i < temp.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (temp[i] === win_nums[j]) {
        count++;
      }
    }
  }
  result = [count + zeroNum.length, count];
  result.forEach((el) => {
    if (el === 6) {
      answer.push(1);
    } else if (el === 5) {
      answer.push(2);
    } else if (el === 4) {
      answer.push(3);
    } else if (el === 3) {
      answer.push(4);
    } else if (el === 2) {
      answer.push(5);
    } else if (el === 1 || el === 0) {
      answer.push(6);
    }
  });
  return answer;
}
solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
