function solution(dartResult) {
    let answer = 0;
    let temp = ''
    let arr = []
    let starCount = 0
    for(let i=0; i<dartResult.length; i++){
        if(typeof +dartResult[i] === 'number' && isNaN(dartResult[i])===false){
            if(dartResult[i] === '1' && dartResult[i+1] === '0'){
                temp = 10
            } else if(dartResult[i] === '0' && dartResult[i-1]==='1'){
                continue
        }

            else {
                temp = dartResult[i]
            }
        }
        if(dartResult[i] === 'S'){
            temp = Math.pow(temp,1)
            arr.push(temp)
            answer += temp;
        }
        if(dartResult[i] === 'D'){
            temp = Math.pow(temp,2)
            arr.push(temp)
            answer += temp;
        }
        if(dartResult[i] === 'T'){
            temp = Math.pow(temp,3)
            arr.push(temp)
            answer += temp;
        }
        if(dartResult[i] === "#"){
            answer = answer - temp*2
        }
        if(dartResult[i] === "*"){ // star의 갯수가 여러개 나올 수 있음. star가 뒤에 나오면 두번째 세번째만 곱해준다.
            if(i>dartResult.length-3 && starCount === 2){
                answer = answer*2 -(arr[0] * Math.pow(2,starCount)) // 기존에 별만큼 뺀 값을 더해준거 모두 제거
            }
            else if(i>dartResult.length-3 && starCount === 1){
                answer = answer*2 -(arr[0] * Math.pow(2,starCount)) // 기존에 별만큼 뺀 값을 더해준거 모두 제거
                starCount++
            }
            else if(i>dartResult.length-3 && starCount === 0){
                answer = answer*2 - (arr[0] * Math.pow(2,starCount)) // 기존에 별만큼 뺀 값을 더해준거 모두 제거
                starCount++
        } else {
                answer = answer * 2
                starCount++
            }
        }
    }
    console.log(answer);
    return answer;
}
debugger
solution("1S2D3T*"); // 63
solution("1S2D*3T*") // 72
solution("1S*2D*3T*") // 74
// solution('1S2D*3T'); // 37
// solution('1D2S#10S'); // 9
// solution('1D2S0T'); // 3
// solution('1S*2T*3S'); // 23
// solution('1D#2S*3S'); // 5
// solution('1T2D3D#'); // -4
