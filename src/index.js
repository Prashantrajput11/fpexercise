console.log("hello");

// Q.no 1
// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// const data = arr.map((a) => {
//   return a % 2 == 0 ? a + 1 : a;
// });

// console.log(data);

// Q.no 2
const family = [
  {
    name: "Tanay",
    haveCycle: true
  },
  {
    name: "Akanksha",
    haveCycle: false
  },
  {
    name: "Tanvi",
    haveCycle: true
  },
  {
    name: "Kanak",
    haveCycle: false
  }
];

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

// console.log(product_output);

// Q. 09
const fruits = [
  {
    name: "Apple"
  },
  {
    name: "Mango"
  },
  {
    name: "Potato"
  },
  {
    name: "Guava"
  },
  {
    name: "Capsicum"
  }
];

let fruits_list = fruits.map((fruit) => {
  if (fruit.name.length > 5) {
    fruit["type"] = "vegetable";
  } else {
    fruit["type"] = "fruit";
  }

  return fruit;
});

console.log(fruits_list);

// q.no 7

// const arr = [
//   {
//     name: "Jay",
//     age: 60
//   },
//   {
//     name: "Gloria",
//     age: 36
//   },
//   {
//     name: "Manny",
//     age: 16
//   },
//   {
//     name: "Joe",
//     age: 9
//   }
// ];

// Your output should be: 121 /*** 60+36+16+9 ***/
// let sum_of_ages = persons
//   .map((person) => {
//     return person["age"];
//   })
//   .reduce((acc, curr) => {
//     return acc + curr;
//   });

// console.log(sum_of_ages);

// / Q. no 10

const inventory = [
  {
    name: "fans",
    quantity: 3
  },
  {
    name: "chimneys",
    quantity: 0
  },
  {
    name: "bulbs",
    quantity: 5
  },
  { name: "stove", quantity: 1 }
];

// Get all the items in an array whose quantity is less than 2.
let item_less_then_two = inventory
  .map((item) => {
    if (item.quantity < 2) {
      return item.name;
    }
  })
  .filter((i) => {
    return i !== undefined;
  });
// console.log(item_less_then_two);

// Q10 Part b
let total_items = inventory.reduce((acc, currVal) => {
  console.log("acc", acc);
  return acc + currVal["quantity"];
});
// console.log("total items in inventory ", total_items);

const data = [
  {
    name: "Jay",
    age: 60
  },
  {
    name: "Gloria",
    age: 36
  },
  {
    name: "Manny",
    age: 16
  },
  {
    name: "Joe",
    age: 16
  }
];

// Get distinct elememts
// { 60:1, 36:1, 16:2}

let output = data.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age] = acc[curr.age] + 1;
  } else {
    acc[curr.age] = 1;
  }

  return acc;
}, {});
console.log(output);
