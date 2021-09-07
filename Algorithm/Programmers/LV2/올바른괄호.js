const solution = (s) => {
    //스택을 간단하게 변수 하나로 생각
    let sum = 0;

    //for문을 돌면서 sum이 -값이되면 올바르지 않은 괄호
    //닫는괄호가 먼저 나올 수 없으므로
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            sum++;
        } else {
            sum--;
        }
        if (sum < 0) {
            return false;
        }
    }

    //괄호가 끝나지않았다면 올바르지 않은 괄호
    //+값이라면 여는괄호가 남아있고 -값이라면 닫는괄호가 남아있다는 뜻
    if (sum !== 0) {
        return false;
    }
    return true;
};

// function solution(s) {
//     let stack = [];
//     let obj = { '(': ')' };
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '(') {
//             stack.push(s[i]);
//         } else {
//             let last = stack.pop();
//             if (s[i] !== obj[last]) {
//                 return false;
//             }
//         }
//     }
//     if (stack.length !== 0) {
//         return false;
//     } else {
//         return true;
//     }
// }
// debugger;
// solution('(())()');
