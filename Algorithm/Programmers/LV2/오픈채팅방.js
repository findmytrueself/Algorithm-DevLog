function solution(record) {
    let answer = [];
    let answerTemp = [];
    record.map((el) => {
        let action = el.split(' ')[0];
        let id = el.split(' ')[1];
        let nickname = el.split(' ')[2];
        if (action === 'Enter') {
            answer.push(`${nickname}님이 들어왔습니다.`);
            answerTemp.push([id, nickname]);
        } else if (action === 'Leave') {
            answerTemp.map((el) => {
                if (el[0] === id) {
                    nickname = el[1];
                }
            });
            answer.push(`${nickname}님이 나갔습니다.`);
        } else if (action === 'Change') {
        }
        console.log(answerTemp);
    });
    console.log(answer);
}
debugger;
solution(['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan']);
solution(['Enter uid123 uid1234', 'Leave uid123', 'Enter uid4567 uid123', 'Change uid4567 uid1234', 'Leave uid4567']);
// ["uid1234님이 들어왔습니다.","uid1234;님이 나갔습니다.","uid1234님이 들어왔습니다.","uid1234님이 나갔습니다."]

// var answer = [];
//     let keyword = '';
//     let id = '';
//     let name = '';
//     let userLog = [];
//     record.map((el) => {
//         keyword = el.split(' ')[0];
//         id = el.split(' ')[1];
//         name = el.split(' ')[2];
//         if (keyword === 'Enter' && !userLog.flat().includes(id)) {
//             answer.push(`${name}님이 들어왔습니다.`);
//             userLog.push([id, name]);
//         } else if (keyword === 'Enter' && userLog.flat().includes(id)) {
//             let tempName = '';
//             answer.push(`${name}님이 들어왔습니다.`);
//             userLog.push([id, name]);
//             userLog.some((ele) => {
//                 if (ele[0] === id && ele[1] !== name) {
//                     tempName = ele[1];
//                 }
//             });
//             answer = answer.map((ele) => ele.replace(tempName, name));
//         }
//         if (keyword === 'Leave') {
//             userLog.map((ele) => {
//                 if (ele[0] === id) {
//                     name = ele[1];
//                     answer.push(`${name}님이 나갔습니다.`);
//                     userLog.push([id, name]);
//                     if (ele[2] === 1) {
//                         answer.splice(-2, 1);
//                         userLog.splice(-2, 1);
//                     }
//                 }
//             });
//         }
//         if (keyword === 'Change') {
//             let tempName = '';
//             userLog.some((ele) => {
//                 if (ele[0] === id) {
//                     tempName = ele[1];
//                 }
//             });
//             answer = answer.map((ele, idx) => {
//                 if (userLog[idx][0] === id) {
//                     userLog.push([id, name, 1]);
//                     return ele.replace(tempName, name);
//                 } else {
//                     return ele;
//                 }
//             });
//         }
//     });
//     console.log(answer);
//     return answer;
