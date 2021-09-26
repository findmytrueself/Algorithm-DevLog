function solution(info, query) {
  var answer = [];
  let temp = [];
  let count = 0;
  for (let i = 0; i < query.length; i++) {
    let querySplit = query[i].split(" and ");
    info.map((el) => {
      let infoSplit = el.split(" ");
      if (querySplit[0] === "-") {
        // console.log("0");
        querySplit[0] = infoSplit[0];
      }
      if (querySplit[1] === "-") {
        querySplit[1] = infoSplit[1];
      }
      if (querySplit[2] === "-") {
        querySplit[2] = infoSplit[2];
      }
      if (querySplit[3].split(" ")[0] === "-") {
        querySplit[3].split(" ")[0] = infoSplit[3];
      }

      if (
        querySplit[0] === infoSplit[0] &&
        querySplit[1] === infoSplit[1] &&
        querySplit[2] === infoSplit[2] &&
        querySplit[3].split(" ")[0] === infoSplit[3] &&
        querySplit[3].split(" ")[1] <= infoSplit[4]
      ) {
        count++;
      }
    });
    answer.push(count);
    count = 0;
  }
  return answer;
}
solution(
  [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50",
  ],
  [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150",
  ]
);
