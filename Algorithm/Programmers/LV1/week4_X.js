function solution(table, languages, preference) {
    let answer = '';
    // let title = [];
    let titleSum = [];
    let subject = [];
    let score = 0;
    let sum = 0;
    table.forEach((el) => {
        subject.push(el.split(' ').slice());
    });

    subject.map((el) => {
        el.slice(1).forEach((sub) => {
            console.log(el[0]);
        });
    });

    return answer;
}

const table = [
    'SI JAVA JAVASCRIPT SQL PYTHON C#',
    'CONTENTS JAVASCRIPT JAVA PYTHON SQL C++',
    'HARDWARE C C++ PYTHON JAVA JAVASCRIPT',
    'PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP',
    'GAME C++ C# JAVASCRIPT C JAVA',
];
solution(table, ['JAVA', 'JAVASCRIPT'], [7, 5]);

// console.log(title); [ 'SI', 'CONTENTS', 'HARDWARE', 'PORTAL', 'GAME' ]

// console.log(subject);
// [
//     [ 'JAVA', 'JAVASCRIPT', 'SQL', 'PYTHON', 'C#' ],
//     [ 'JAVASCRIPT', 'JAVA', 'PYTHON', 'SQL', 'C++' ],
//     [ 'C', 'C++', 'PYTHON', 'JAVA', 'JAVASCRIPT' ],
//     [ 'JAVA', 'JAVASCRIPT', 'PYTHON', 'KOTLIN', 'PHP' ],
//     [ 'C++', 'C#', 'JAVASCRIPT', 'C', 'JAVA' ]
//   ]

// table.forEach((el) => {
//     title.push(el.split(' ').slice(0, 1));
//     subject.push(el.split(' ').slice(1));
// });

// title = title.flat();
//     title.forEach(el => {
//         if(el){

//         }
//     })
