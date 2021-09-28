// 1. 기울기 이용
function solution(w, h) {
    const slope = h / w;
    let result = 0;

    for (let i = 1; i <= w; i++) {
        result += Math.ceil(slope * i);
    }

    return (h * w - result) * 2;
}

// 2. 브레젠험 알고리즘

// if (w < h) {
//     return w * h - (2 * h - w);
// }

// 3. 유클리드 호제법
const GCD = (a, b) => (a % b === 0 ? b : GCD(b, a % b));

function solution(w, h) {
    return w * h - (w + h - GCD(w, h));
}

// W + H - (W, H의 최대 공약수)
// 1. 사각형의 w와 h가 서로소인 경우 잘린 정사각형의 갯수 = w + h - 1

// 2. 사각형에서 서로소 관계의 사각형의 갯수 = 최대공약수

// 3. 잘린 정사각형의 개수는 g * ((w` / g) + (h`/g) - 1) = w`+ h` - g

// 서로소 : 두 수 사이의 관계가 1 이외에 공약수가 없는 수

// w` : 사각형의 가로길이, h` : 사각형의 세로길이

solution(8, 12);
