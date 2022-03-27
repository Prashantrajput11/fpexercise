console.log("hello");
// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// const data = arr.map((a) => {
//   return a % 2 == 0 ? a + 1 : a;
// });

// console.log(data);

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

const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

const getNum = arr.filter((n) => {
  if (n <= 8 && n % 2 == 0) {
    return n;
  }
});

console.log(getNum);

// Q.no 4
// Your output should be: ['repeat']

let words = ["eat", "sleep", "repeat", "code"];

const wordsMoreThanFive = words.filter((word) => {
  return word.length > 5;
});

console.log(wordsMoreThanFive);
