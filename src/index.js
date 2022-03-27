console.log("hello");

// Q.no 1
// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// const data = arr.map((a) => {
//   return a % 2 == 0 ? a + 1 : a;
// });

// console.log(data);

// Q.no 2
// const family = [
//   {
//     name: "Tanay",
//     haveCycle: true
//   },
//   {
//     name: "Akanksha",
//     haveCycle: false
//   },
//   {
//     name: "Tanvi",
//     haveCycle: true
//   },
//   {
//     name: "Kanak",
//     haveCycle: false
//   }
// ];

// let names = family
//   .map((member) => {
//     if (member.haveCycle) {
//       return member.name;
//     }
//   })
//   .filter((n) => {
//     return n !== undefined;
//   });

// console.log(names);

// Q.no 3
const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const getNum = arr.filter((n) => {
  if (n <= 8 && n % 2 == 0) {
    return n;
  }
});

// console.log(getNum);

// Q.no 4
// Your output should be: ['repeat']

// let words = ["eat", "sleep", "repeat", "code"];

// const wordsMoreThanFive = words.filter((word) => {
//   return word.length > 5;
// });

// console.log(wordsMoreThanFive);

// q.no 6
const list = [1, 2, 3, 58, 5, 6, 62, 8, 70];

// Your output should be: 190

const data2 = list.reduce((acc, currVal) => {
  if (currVal > 50) {
    return acc + currVal;
  }
  return acc;
});

console.log(data2);

//Q.no 7
const list_two = [1, 2, 3, 7, 5, 6, 8, 9];

// Your output should be: 96

const product_output = list_two.reduce((acc, curr) => {
  if (curr % 2 == 0) {
    return acc * curr;
  }
  return acc;
});

console.log(product_output);
