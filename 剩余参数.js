// function sum (first, ...args) {
//     console.log(first); //10
//     console.log(args);
// }
// sum(10,20,30)
// const sum = (...args) => {
//     let total = 0;
//     args.forEach(item => total += item);
//     return total;
// };
// console.log(sum(10,30));
// console.log(sum(10,20,30));

// let ary = [1,2,3];
// console.log(...ary);

// 数组合并
// let ary1 = [1,2,3];
// let ary2 = [4,5,6];
// let ary3 = [...ary1,...ary2]
// console.log(ary3);

// 数组合并2
let ary1 = [1,2,3];
let ary2 = [4,5,6];

ary1.push(...ary2);
console.log(ary1);