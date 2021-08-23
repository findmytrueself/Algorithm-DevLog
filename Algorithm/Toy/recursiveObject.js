function test2(arr, id) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  let temp = [];
  arr.forEach((el) =>
    el.id === id ? result.push(el) : temp.push(el.children)
  );
  console.log(result);
  console.log(temp);
  if (result.id === id) {
    return result[0];
  } else {
    return test2(temp, id);
  }
}

let input = [
  {
    id: 1,
    name: "johnny",
  },
  {
    id: 2,
    name: "ingi",
    children: [
      {
        id: 3,
        name: "johnson",
      },
      {
        id: 5,
        name: "steve",
        children: [
          {
            id: 6,
            name: "lisa",
          },
        ],
      },
      {
        id: 11,
      },
    ],
  },
  {
    id: "13",
  },
];

// let output = test2(input, 1);
// console.log(output);

let output = test2(input, 5);
console.log(output);
