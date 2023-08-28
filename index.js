//task1

// const obj = {
//   1: 1,
//   2: 2,
//   3: 3,
//   4: 4,
//   5: 5,
// };
// let sum = 0;

// for (const key of Object.keys(obj)) {
//   sum += +key;
// }
// console.log(sum / Object.keys(obj).length);

//1.1

// const obj = {
//   b: {
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//   },
//   a: {
//     1: 1,
//     2: 2,
//     3: 3,
//     4: 4,
//     5: 5,
//   },
// };

// let sumb = 0;
// let suma = 0;
// for (const key of Object.values(obj.b)) {
//   sumb += key;
// }
// for (const key of Object.values(obj.a)) {
//   suma += key;
// }
// let result =
//   suma / Object.values(obj.a).length + suma / Object.values(obj.a).length;
// console.log(result / Object.keys(obj).length);

//task2

// const user = {
//   first_name: "John",
//   last_name: "Dou",
//   age: 19,
//   address: undefined,
// };

// const education = {
//   location: "New york ...",
//   payment: "$30,000",
//   group_number: "B2",
// };
// console.log({ ...user, ...education });

//task2.2

// let obj = {
//   a: {
//     name: "hi",
//   },
//   b: {

//     age: 32,
//   },
// };

// let obj2 = {
//   a: {
//     surname: "hello",
//   },
//   b: {
//     height: 42,
//   },
// };
// obj = { ...obj.a, ...obj.b };
// obj2 = { ...obj2.a, ...obj2.b };
// console.log({ ...obj, ...obj2 });

//task3

// const user = {
//   first_name: "John",
//   last_name: "Dou",
//   age: 22,
//   address: "Boston",
// };

// const hobbies = {
//   computer_games: "2 hours a day",
//   running: "Every morning",
// };
// user.hobbies = hobbies;
// console.log(user);

//task4

// function FindAdds(int) {
//   let num = [2, 7, 11, 15];

//   for (let i = 0; i < num.length; i += 2) {
//     if (i + 1 < num.length) {
//       c = num[i + 1] + num[i];
//       if (c == int) {
//         return `answer: ${i + 1}, ${i}`;
//       }
//     }
//   }
// }

// console.log(FindAdds(9));

//task 4.1

// function FindAdds(int) {
//   let num = [3, 2, 4];

//   for (let i = 0; i < num.length; i++) {
//     let sum = 0;
//     for (let b = 0; b < num.length; b++) {
//       if (num[i] != num[b]) {
//         sum = num[i] + num[b];
//         if (sum == int) {
//           return `answer: ${i}, ${b}`;
//         } else {
//           sum = 0;
//         }
//       }
//     }
//   }
// }

// console.log(FindAdds(6));

//task5

// function combine(arr1, arr2) {
//   let sum = 0;
//   let sumarray = arr1.concat(arr2);
//   let length = 0;
//   for (const key of sumarray) {
//     sum += key;
//     length++;
//   }
//   return sum / length;
// }
// console.log(combine([2, 3], [2, 9]));

//task 5.1

// function combine(arr1, arr2) {
//   let sum = 0;
//   let sumarray = [...arr1, ...arr2];
//   let length = 0;

//   for (const key of sumarray) {
//     sum += key;
//     length++;
//   }
//   return sum / length;
// }
// console.log(combine([2, 3], [2, 9]));

// les 11 amaliy

// let s = {
//   none: {
//     age: 46,
//     hi: "nffd",
//   },
// };

// console.log(s.none.age);
