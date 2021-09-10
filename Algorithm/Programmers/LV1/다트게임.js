function solution(dartResult) {
    let answer = 0;
    let temp = ''
    let memo = []
    let starCount = 0
    for(let i=0; i<dartResult.length; i++){
        if(typeof +dartResult[i] === 'number' && isNaN(dartResult[i])===false){
            if(dartResult[i] === '1' && dartResult[i+1] === '0'){ // 10일때 조건 : 1일때 뒷자리가 0인지 확인
                temp = 10 // 직접 10 넣고 
            } else if(dartResult[i] === '0' && dartResult[i-1]==='1'){ // 0이나오고, 뒷자리가 1일때 1:[i-1] 0:[i] 
                continue // 아무것도 안하고 넘김
        } else {
                temp = dartResult[i] // 나머지경우(0~9)는 temp에 넣는다.
            }
        }
        if(dartResult[i] === 'S'){ // "S"일경우
            temp = Math.pow(temp,1) // 1제곱
            memo.push(temp) // 배열에 memo해준다
            answer += temp; // answer에 더한다.
        }
        if(dartResult[i] === 'D'){ // "D"일경우
            temp = Math.pow(temp,2) // 2제곱
            memo.push(temp) // 배열에 memo한다.
            answer += temp; //answer에 더한다
        }
        if(dartResult[i] === 'T'){ //"T"일경우
            temp = Math.pow(temp,3) // 3제곱
            memo.push(temp) // 배열에 memo
            answer += temp; // answer에 더한다.
        }
        if(dartResult[i] === "#"){ // "#"인경우
            answer = answer - temp*2 // 로직상 기존에 더했던거까지 빼주려면 "곱하기 2"해줘야함
        }
        if(dartResult[i] === "*"){ // star의 갯수가 여러개 나올 수 있음. star가 뒤에 나오면 두번째 세번째만 곱해준다.
            if(i>dartResult.length-3 && starCount === 2){ // *** star가 첫번째나 두번째가 아닌경우만 다른 로직 ***
                answer = answer*2 -(memo[0] * Math.pow(2,starCount)) // 기존에 별만큼 뺀 값을 더해준거 모두 제거
            }
            else if(i>dartResult.length-3 && starCount === 1){
                answer = answer*2 -(memo[0] * Math.pow(2,starCount)) // 기존에 별만큼 뺀 값을 더해준거 모두 제거
                starCount++
            }
            else if(i>dartResult.length-3 && starCount === 0){
                answer = answer*2 - (memo[0] * Math.pow(2,starCount)) // 기존에 별만큼 뺀 값을 더해준거 모두 제거
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
