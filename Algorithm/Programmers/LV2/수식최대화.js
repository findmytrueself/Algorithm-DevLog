function solution(expression) {
    const operands = [
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '+', '*'],
        ['-', '*', '+'],
        ['*', '+', '-'],
        ['*', '-', '+'],
    ];
    let num = expression.split(/[^0-9]/);
    num = num.map((el) => +el);
    let sign = [];
    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '*' || expression[i] === '-' || expression[i] === '+') {
            sign.push(expression[i]);
        }
    }
    let maxNum = 0;
    for (let i = 0; i < operands.length; i++) {
        const copyNum = num.slice();
        const copySign = sign.slice();

        for (let j = 0; j < operands[i].length; j++) {
            for (let k = 0; k < copySign.length; k++) {
                if (copySign[k] === operands[i][j]) {
                    if (copySign[k] === '*') {
                        copyNum[k] *= copyNum[k + 1];
                        copyNum.splice(k + 1, 1);
                        copySign.splice(k, 1);
                        k--;
                    } else if (copySign[k] === '+') {
                        copyNum[k] += copyNum[k + 1];
                        copyNum.splice(k + 1, 1);
                        copySign.splice(k, 1);
                        k--;
                    } else if (copySign[k] === '-') {
                        copyNum[k] -= copyNum[k + 1];
                        copyNum.splice(k + 1, 1);
                        copySign.splice(k, 1);
                        k--;
                    }
                }
            }
        }
        if (Math.abs(copyNum[0]) >= maxNum) {
            maxNum = Math.abs(copyNum[0]);
        }
    }
    console.log(maxNum);
    return maxNum;
}
debugger;
solution('100-200*300-500+20'); // 60420
// solution('50*6-3*2'); // 300
