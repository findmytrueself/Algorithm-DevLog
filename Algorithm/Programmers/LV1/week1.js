function solution(price, money, count) {
    let answer = 0;
    let sum = 0;
    // sum = 3 + 6 + 9 + 12 ===30 , money===20 if(sum-money>0)? sum-money = answer   , answer = 10
    for (let i = 1; i <= count; i++) {
        sum += price * i;
    }
    if (sum - money > 0) {
        answer = sum - money;
    } else {
        return 0;
    }
    return answer;
}

solution(3, 20, 4);
