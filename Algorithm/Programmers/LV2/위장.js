function solution(clothes) {
    let answer = 1; // 해당 종류의 의상을 입지 않은 경우도 계산하기 위해 value의 기본값을 1로 지정
    let obj = {};
    for (let i = 0; i < clothes.length; i++) {
        // 의상의 종류를 key로, 해당 종류에 포함되는 의상의 개수를 value로 하는 obj 생성
        obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
    }
    for (let key in obj) {
        // 의상의 종류별로 모든 조합의 수를 곱하고,
        answer *= obj[key];
    }
    return answer - 1; // 아무것도 안입은 상태를 뺴기 위해 answer에 -1을 해줌
}
solution([
    ['yellowhat', 'headgear'],
    ['bluesunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
]); // 5

// solution([
//     ['crowmask', 'face'],
//     ['bluesunglasses', 'face'],
//     ['smoky_makeup', 'face'],
// ]); // 3
