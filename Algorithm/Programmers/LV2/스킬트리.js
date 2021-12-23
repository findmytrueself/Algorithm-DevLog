function solution(skill, skill_trees) {
    let answer = 0;
    skill_trees.map(el => {
        let isBreak = false // breakPoint
        let skills = skill.split(''); // skill을 배열로 쪼개기 ["C","B","D"]
        for (let i=0; i<el.length; i++){  // 효율성을 위해 break주기 위해서는 for문을 사용한다.
            if(skills.includes(el[i])){ // 각각의 스킬트리를 접근하여 스킬트리의 0번 인덱스부터 skills에 포함되어있는지
                if(skills[0]===el[i]){ // 첫번째 나오는 스킬이 스킬트리에서 가장 먼저 나오는지 확인한다.
                    skills.shift(); // 가장먼저 나왔기 때문에 지워준다.
                } else { // 나오지 않았으면 더이상 조사할 필요가 없기 때문에 break문으로 반복문을 넘긴다.
                    isBreak = true; // 만족을 모두 하면 else문으로 들어오지 않기때문에
                    break;
                }
            }
        }
        if(isBreak === false){ //  처음에 설정한 falsy한 스킬트리만 정답에 더해준다.
            answer += 1
        }
    })
    return answer
}