// function solution(skill, skill_trees) {
//     let answer = 0;
//     let firstSkill = skill[0];
//     let nextSkill = skill[1];
//     let filtered = [];
//     skill_trees.forEach((el, idx) => {
//         if (el.indexOf(firstSkill) !== -1) {
//             filtered.push(el);
//         }
//     });
//     filtered.forEach((el) => {
//         if (skillOrder(el.indexOf(firstSkill), el.indexOf(nextSkill))) {
//             answer++;
//         }
//     });
//     return answer;
// }

function skillOrder(skillIdx, compareSkillIdx) {
    if (skillIdx > compareSkillIdx) {
        return false;
    } else {
        return true;
    }
}
function solution(skill, skill_trees, answer = 0) {
    let firstSkill = skill[0];
    let nextSkill = skill[1];
    let filtered = [];
    if (skill.length === 0) {
        return answer;
    }
    skill_trees.forEach((el, idx) => {
        if (el.indexOf(firstSkill) !== -1) {
            filtered.push(el);
        }
    });
    filtered.forEach((el) => {
        // 'BACDE', 'CBADF', 'AECB'
        if (skillOrder(el.indexOf(firstSkill), el.indexOf(nextSkill))) {
            answer++;
            filtered = filtered.filter((ele) => el === ele);
            skill = skill.slice(1);
        }
    });
    return solution(skill, filtered, answer);
}
solution('CBD', ['BACDE', 'CBADF', 'AECB', 'BDA']);

function skillOrder(skillIdx, compareSkillIdx) {
    if (skillIdx > compareSkillIdx) {
        return false;
    } else {
        return true;
    }
}

// let trueFalseBox = Array(skill_trees.length).fill(0);
// console.log(trueFalseBox);
// skill.split('').forEach((el) => {
//     let compareSkill = el; // C,B,D
//     console.log(skill_trees);
//     skill_trees.forEach((ele, idx) => {
//         if (ele.indexOf(compareSkill) === -1) {
//             skill_trees.splice(idx, 1);
//         }
//         // C -> [BACDE] , C -> [CBADF] , C-> [AECB] , C -> [BDA]
//         //      O               O              O            X
//     });
// });
// console.log(skill_trees);
